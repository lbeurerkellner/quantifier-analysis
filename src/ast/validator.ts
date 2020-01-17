import { TypeSystem, BasicType } from './type-system';
import { Root, AstNode, Variable, BinaryOperation, NotExpr, Constant, FunctionApplicationExpr, Formula, Expr, ExprNode } from './parser';
import { InputRange } from './ast-utils';
import { locationOfExpr } from './parser';

export interface ValidationError {
    message : string
    code : string
    range : InputRange
}

export class Validator {
    errors : ValidationError[]
    typeSystem : TypeSystem

    constructor() {
        this.errors = [] 
        this.typeSystem = new TypeSystem();
    }

    validate(ast : Root) {
        //this.addError(ast.formulas[0], "Test Error", "test.error");
        ast.formulas.forEach(f => this.validateNode(f, null));
    }

    validateNode(astNode : AstNode, parent : Formula|null) {
        // skip occurrences of null in the AST
        if (astNode === null) {
            return;
        }

        switch (astNode.type) {
            case "formula":
                this.validateFormula(astNode as Formula);
                break;
            case "variable":
                this.validateVariable(astNode as Variable);
                break;
            case "=":
                this.validateEqualExpr(astNode as BinaryOperation, parent!)
                break;
            case "and":
                this.validateAnd(astNode as BinaryOperation, parent!)
                break;
            case "or":
                this.validateOr(astNode as BinaryOperation, parent!)
                break;
            case "not":
                this.validateNot(astNode as NotExpr, parent!)
                break;
            case "constant":
                this.validateConstant(astNode as Constant, parent!)
                break;
            case "func_application":
                this.validateFunctionApplication(astNode as FunctionApplicationExpr, parent!)
                break;
        }
    }

    validateExpr(expr : Expr, parent : Formula) {
        if (Array.isArray(expr)) {
            this.addError(expr, "This sub-expression is missing boolean connectives.", "error.type");
            // (expr as Expr[]).forEach(e => this.validateExpr(e, parent))
        }
        return this.validateNode(expr as ExprNode, parent);
    }

    validateFormula(formula : Formula) {
        if (formula.variables.length < 1) {
            this.addError(formula, "A quantified formula must declare at least one quantified variable.", "error.formula");
        }
        if (formula.pattern.length < 1) {
            this.addError(formula, "A quantified formula must declare at least one trigger pattern.", "error.formula");
        }
        // check for duplicate variable names
        let variables = new Map<string, AstNode>();
        for (let v of formula.variables) {
            if (variables.has(v.name)) {
                this.addError(v, "Duplicate quantified variable '" + v.name + "'.", "error.variable");
            }
            variables.set(v.name, v);
        }

        // check child nodes
        this.validateExpr(formula.body, formula)
        formula.pattern.forEach(p => this.validateExpr(p, formula));
    }

    validateVariable(variable : Variable) {
        // nothing to enforce
    }

    validateBinaryOperation(binaryOperation : BinaryOperation, parent : Formula) {
        if (binaryOperation.lhs == null) {
            this.addError(binaryOperation, `Binary operation '${binaryOperation.type}' is missing a left-hand side operand`, "error.binaryop");
        }
        if (binaryOperation.rhs == null) {
            this.addError(binaryOperation, `Binary operation '${binaryOperation.type}' is missing a right-hand side operand`, "error.binaryop");
        }

        this.validateExpr(binaryOperation.lhs, parent);
        this.validateExpr(binaryOperation.rhs, parent);
    }

    validateEqualExpr(equalityExpression : BinaryOperation, parent : Formula) {
        this.validateBinaryOperation(equalityExpression, parent);

        [equalityExpression.lhs, equalityExpression.rhs].forEach(o => {
            const type = this.typeSystem.type(o);
            if (type === BasicType.ErrorType) {
                this.addError(o, `Cannot type this sub-expression.`, "error.type");
            } else if (type !== BasicType.Sort) {
                this.addError(o, `Type of this sub-expression must be sort.`, "error.type");
            }
        })
    }

    validateBooleanOperation(...operands : Expr[]) {
        operands.forEach(o => {
            const type = this.typeSystem.type(o);
            if (type === BasicType.ErrorType) {
                this.addError(o, `Cannot type this sub-expression.`, "error.type");
            } else if (type !== BasicType.Boolean) {
                this.addError(o, `Type of this sub-expression must be boolean.`, "error.type");
            }
        });
    }

    validateAnd(andExpression : BinaryOperation, parent : Formula) {
        this.validateBinaryOperation(andExpression, parent);
        this.validateBooleanOperation(andExpression.lhs, andExpression.rhs);
    }

    validateOr(orExpression : BinaryOperation, parent : Formula) {
        this.validateBinaryOperation(orExpression, parent);
        this.validateBooleanOperation(orExpression.lhs, orExpression.rhs);
    }

    validateNot(notExpression : NotExpr, parent : Formula) {
        this.validateBooleanOperation(notExpression.operand);
    }

    validateConstant(constant : Constant, parent : Formula) {
        if (!parent.variables.find(v => v.name === constant.name)) {
            this.addError(constant, `Reference to undeclared quantified variable '${constant.name}'`, "error.variable")
        }
    }

    validateFunctionApplication(funcAppl : FunctionApplicationExpr, parent : Formula) {
        funcAppl.args.forEach(a => {
            this.validateExpr(a, parent);
        })
    }

    addError(nodeOrExpr : AstNode|Expr, message : string, code : string) {
        let location : InputRange
        if (Array.isArray(nodeOrExpr)) {
            location = locationOfExpr(nodeOrExpr as Expr)
        } else {
            location = (nodeOrExpr as AstNode).location
        }
        
        this.errors.push({
            message: message,
            code : code,
            range : location
        });
    }
}

function childrenOf(astNode : AstNode) : AstNode[] {
    switch (astNode.type) {
        case "formula":
            const formula = astNode as Formula;
            return [
                astNode, 
                ...formula.pattern.flatMap(p => childrenOf(p)),
                ...childrenOfExpr(formula.body),
                ...formula.variables.flatMap(v => childrenOf(v))
            ];
        case "=":
        case "and":
        case "or":
            const binaryOpExpr = astNode as BinaryOperation;
            return [
                binaryOpExpr,
                ...childrenOfExpr(binaryOpExpr.lhs),
                ...childrenOfExpr(binaryOpExpr.rhs)
            ]
        case "not":
            return [
                astNode,
                ...childrenOfExpr((astNode as NotExpr).operand)
            ]
        case "func_application":
            const funcAppl = astNode as FunctionApplicationExpr;
            return [
                astNode,
                ...funcAppl.args.flatMap(a => childrenOfExpr(a))
            ]
        case "variable":
        case "constant":
            return [astNode];
        default:
            console.log("Unhandled case in childrenOf for AST element", astNode);
            return [];
    }
}

function childrenOfExpr(expr : Expr) : AstNode[] {
    if (Array.isArray(expr)) {
        return (expr as Expr[]).flatMap(e => childrenOfExpr(e))
    }
    return childrenOf(expr as ExprNode);
}