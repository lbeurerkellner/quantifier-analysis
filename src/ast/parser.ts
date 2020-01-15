import peg from "pegjs"
import GrammarParser from "./Grammar.pegjs"

export interface Root {
    formulas : Formula[]
}

export interface AstNode {
    type : string 
}
export interface Formula extends AstNode {
    variables: Variable[]
    pattern: FunctionApplicationExpr[]
    body: Expr
}
export interface Variable extends AstNode {
    name : string
}
type Expr = ExprNode|Expr[]
export interface ExprNode extends AstNode {}
export interface FunctionApplicationExpr extends ExprNode {
    name : string
    args : Expr[]
}
export interface Constant extends ExprNode {
    name : string
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
            body: this.processExpr(formula.body)
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
            if (e.type === "and" || e.type === "or" || e.type === "=") {
                expressions.push({
                    type: e.type,
                    lhs: expressions.pop(),
                    rhs: this.processExpr(exprs[i+1])
                } as BinaryOperation)
                i += 1;
            } 
            // transform unitary operations
            else if (e.type === "not") {
                expressions.push({
                    type: "not",
                    operand: this.processExpr(exprs[i+1])
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

export class Parser {
    pegParser : peg.Parser

    constructor() {
        this.pegParser = GrammarParser
    }

    parse(content : string) : Root {
        return this.pegParser.parse(content);
    }
}