import { InputRange, InputLocation } from './ast-utils';
import peg from "pegjs"
import GrammarParser from "./Grammar.pegjs"

export interface Root {
    formulas : Formula[]
}

export interface AstNode {
    type : string
    location : InputRange
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
export class ASTPreprocessor {
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
            location: formula.location
        }
    }

    processExpr(expr : Expr) : Expr {
        // non-array expressions (leafes) do not need to be processed
        if (!Array.isArray(expr)) {
            return expr;
        }
        
        let exprs = expr as Expr[];
        let expressions : Expr[] = []
        for (var i=0; i<exprs.length; i++) {
            if (Array.isArray(exprs[i])) {
                expressions.push(this.processExpr(exprs[i]));
                continue;
            }

            const e : ExprNode = exprs[i] as ExprNode;

            // handle binary expressions
            if (isBinaryOperation(e)) {
                const lhs = expressions.pop() as Expr;
                const rhs = this.processExpr(exprs[i+1]);
                const loc = mergeRange(e.location, locationOfExpr(lhs), locationOfExpr(rhs));
                expressions.push({
                    type: e.type,
                    lhs: lhs,
                    rhs: rhs,
                    location: loc
                } as BinaryOperation)
                i += 1;
            } 
            // transform unitary operations
            else if (e.type === "not") {
                const operand = this.processExpr(exprs[i+1])
                expressions.push({
                    type: "not",
                    operand: operand,
                    location: mergeRange(e.location, locationOfExpr(operand))
                } as NotExpr)
                i += 1;
            } else {
                expressions.push(e);
            }
        }

        // remove obsolete levels of nesting
        if (expressions.length === 1) {
            return expressions[0];
        }

        return expressions;
    }
    
    processFunctionApplication(expr : FunctionApplicationExpr) {
        return expr;
    }
}

function locationOfExpr(expr : Expr) : InputRange {
    if (Array.isArray(expr)) {
        let locations = (expr as Expr[]).map(e => locationOfExpr(e))
        return mergeRange.apply(null, locations);
    }
    return (expr as ExprNode).location;
}

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

    constructor() {
        this.pegParser = GrammarParser
    }

    parse(content : string) : Root {
        return this.pegParser.parse(content);
    }
}