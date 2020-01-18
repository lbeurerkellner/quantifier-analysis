import { InputRange, InputLocation } from './ast-utils';
import peg from "pegjs"
import GrammarParser from "./Grammar.pegjs"

// AST model

export interface Root {
    formulas : Formula[]
}

export interface AstNode {
    type : string
    location : InputRange

    parent : AstNode|null
}
export interface Formula extends AstNode {
    variables: Variable[]
    pattern: FunctionApplicationExpr[]
    body: Expr
}
export interface Variable extends AstNode {
    name : string
}
export type Expr = ExprNode|Expr[]
export interface ExprNode extends AstNode {}
export interface FunctionApplicationExpr extends ExprNode {
    name : string
    args : Expr[]
}
export interface Constant extends ExprNode {
    name : string
}

export function isBinaryOperation(expr : Expr) : boolean {
    if (typeof expr === "undefined" || expr === null) {
        return false;
    }
    return !Array.isArray(expr) && (
        (expr as ExprNode).type === "and" ||
        (expr as ExprNode).type === "or" ||
        (expr as ExprNode).type === "="
    )
}
export interface BinaryOperation extends ExprNode {
    operation : ("and"|"or"|"=")
    lhs : Expr
    rhs : Expr
}
export interface NotExpr extends ExprNode {
    type : string
    operand : Expr
}
export interface ParenthesisNode extends AstNode {
    operands : Expr[]
}

/**
 * Preprocessor for the raw parsed representation directly 
 * obtained from the PegJS parser.
 * 
 * Applies some transformations which lift the representation
 * from the grammar-based syntactic level to a slightly higher-level representation.
 */
class ASTPreprocessor {
    process(root: Root) : Root {
        return {
            formulas: root.formulas.map(this.processFormula.bind(this))
        }
    }
    processFormula(formula : Formula) : Formula {
        return {
            type: formula.type,
            variables: formula.variables,
            pattern: formula.pattern.map(this.processFunctionApplication.bind(this)),
            body: this.processExpr(formula.body),
            location: formula.location,
            parent: null
        }
    }

    processExpr(expr : Expr) : Expr {
        // non-array expressions (leaves) do not need to be processed
        if (!Array.isArray(expr)) {
            return this.processNode(expr as ExprNode) as Expr;
        }
        
        let exprs = expr as Expr[];
        let expressions : Expr[] = []

        // order of merging AST nodes below determines precedence of operators
        // merge sibling AST nodes adjacent to "=" expression node
        for (let i=0; i<exprs.length; i++) {
            if (Array.isArray(exprs[i])) {
                expressions.push(this.processExpr(exprs[i]));
                continue;
            }
            const e : ExprNode = exprs[i] as ExprNode;

            if (e.type === "=") {
                const lhs = expressions.pop() as Expr;
                const rhs = this.processExpr(exprs[i+1]);
                const loc = mergeRange(e.location, ...[lhs, rhs]
                    .filter(e => typeof e !== "undefined").map(e => locationOfExpr(e)));
                expressions.push({
                    type: e.type,
                    lhs: lhs || null,
                    rhs: rhs || null,
                    location: loc
                } as BinaryOperation)
                i += 1;
            } else {
                expressions.push(e);
            }
        }
        exprs = Array.from(expressions);
        expressions = [];

        // merge right-hand sibling AST node with preceeding "not" expression node
        for (let i=0; i<exprs.length; i++) {
            if (Array.isArray(exprs[i])) {
                expressions.push(exprs[i]);
                continue;
            }

            const e : ExprNode = exprs[i] as ExprNode;
            if (e.type === "not") {
                const operand = exprs[i+1]
                expressions.push({
                    type: "not",
                    location: mergeRange(e.location, locationOfExpr(operand)),
                    operand: operand
                } as NotExpr)
                i += 1;
            } else {
                expressions.push(e);
            }
        }

        exprs = Array.from(expressions);
        expressions = [];

        // merge adjacent sibling AST nodes with "and" and "or" expression nodes
        for (let i=0; i<exprs.length; i++) {
            if (Array.isArray(exprs[i])) {
                expressions.push(exprs[i]);
                continue;
            }

            const e : ExprNode = exprs[i] as ExprNode;
            // handle binary expressions (apart from '=')
            if (isBinaryOperation(e) && e.type !== "=") {
                const lhs = expressions.pop() as Expr;
                const rhs = exprs[i+1];
                const loc = mergeRange(e.location, ...[lhs, rhs]
                    .filter(e => typeof e !== "undefined").map(e => locationOfExpr(e)));
                expressions.push({
                    type: e.type,
                    lhs: lhs || null,
                    rhs: rhs || null,
                    location: loc
                } as BinaryOperation)
                i += 1;
            } else {
                expressions.push(e);
            }
        }

        return expressions;
    }

    processNode(astNode : AstNode) : AstNode {
        // skip occurrences of null in the AST
        if (astNode === null || typeof astNode === "undefined") {
            return astNode;
        }

        switch (astNode.type) {
            case "formula":
                return this.processFormula(astNode as Formula);
            case "variable":
            case "constant":
                return astNode;
            case "=":
            case "and":
            case "or": {
                const binOp = astNode as BinaryOperation;
                
                let result = Object.assign(astNode, {}) as BinaryOperation;
                
                result.lhs = this.processExpr(binOp.lhs);
                result.rhs = this.processExpr(binOp.rhs);
                result.operation = binOp.operation;
                
                return result;
            }
            case "not": {
                const notExpr = astNode as NotExpr;
                
                let result = {
                    type: notExpr.type,
                    location: notExpr.location
                } as NotExpr;

                result.operand = this.processExpr(notExpr.operand);
                
                return result;
            }
            case "func_application":
                const funcAppl = astNode as FunctionApplicationExpr;

                let result = Object.assign(funcAppl, {}) as FunctionApplicationExpr;
                result.args = funcAppl.args.map(a => this.processExpr(a));

                return result;
            default:
                console.log("Unhandled AST node type in preprocessing", astNode);
                return astNode;
        }
    }
    
    processFunctionApplication(expr : FunctionApplicationExpr) {
        return expr;
    }
}

/**
 * Computes the location/range the given Expr takes up in
 * the input by considering the location of its sub-expressions.
 */
export function locationOfExpr(expr : Expr) : InputRange {
    if (Array.isArray(expr)) {
        let locations = (expr as Expr[]).map(e => locationOfExpr(e))
        return mergeRange.apply(null, locations);
    }
    return (expr as ExprNode).location;
}

/** 
 * Merges multiple InputRange s into one by determining
 * a common lower and upper limit.
 */
function mergeRange(...ranges : InputRange[]) {
    if (ranges.length < 1) {
        throw new Error("Cannot merge empty list of PegJsRanges.");
    }

    let result : InputRange = ranges[0];
    for (let i=1; i<ranges.length; i++) {
        let r : InputRange = ranges[i];
        if (lessThanLocation(r.start, result.start)) {
            result.start = r.start;
        }
        if (lessThanLocation(result.end, r.end)) {
            result.end = r.end;
        }
    }
    return result;
}
function lessThanLocation(lhs : InputLocation, rhs : InputLocation) {
    return lhs.line < rhs.line ||
        (lhs.line === rhs.line && lhs.column < rhs.column) ||
        (lhs.line === rhs.line && lhs.column === rhs.column && lhs.offset < rhs.offset);
}

export class Parser {
    pegParser : peg.Parser
    preprocessor : ASTPreprocessor

    constructor() {
        this.pegParser = GrammarParser
        this.preprocessor = new ASTPreprocessor();
    }

    parse(content : string) : Root {
        const rawAst = this.pegParser.parse(content);
        return this.preprocessor.process(rawAst);
    }
}