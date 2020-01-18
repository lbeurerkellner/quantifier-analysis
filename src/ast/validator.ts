import { TypeSystem, BasicType, FunctionType } from './type-system';
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

    // keeps track of the inferred function arity for each function
    // referenced in the input formulas
    functionTypes = new Map<string, FunctionType>();

    constructor() {
        this.errors = [] 
        this.typeSystem = new TypeSystem();
    }

    validate(ast : Root) {
        //this.addError(ast.formulas[0], "Test Error", "test.error");
        ast.formulas.forEach(f => this.validateNode(f, []));
    }

    validateNode(astNode : AstNode, parent : AstNode[]) {
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

    validateExpr(expr : Expr, parent : AstNode[]) {
        if (Array.isArray(expr)) {
            if (expr.length > 1) {
                this.addError(expr, "This sub-expression is missing boolean connectives.", "error.type");
            }
            (expr as Expr[]).forEach(e => this.validateExpr(e, parent))
        } else {
            return this.validateNode(expr as ExprNode, parent);
        }
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
        this.validateExpr(formula.body, [formula])
        formula.pattern.forEach(p => this.validateExpr(p, [formula]));
    }

    validateVariable(variable : Variable) {
        // nothing to enforce
    }

    validateBinaryOperation(binaryOperation : BinaryOperation, parent : AstNode[]) {
        if (binaryOperation.lhs == null) {
            this.addError(binaryOperation, `Binary operation '${binaryOperation.type}' is missing a left-hand side operand`, "error.binaryop");
        }
        if (binaryOperation.rhs == null) {
            this.addError(binaryOperation, `Binary operation '${binaryOperation.type}' is missing a right-hand side operand`, "error.binaryop");
        }

        this.validateExpr(binaryOperation.lhs, [...parent, binaryOperation]);
        this.validateExpr(binaryOperation.rhs, [...parent, binaryOperation]);
    }

    validateEqualExpr(equalityExpression : BinaryOperation, parent : AstNode[]) {
        this.validateBinaryOperation(equalityExpression, parent);

        [equalityExpression.lhs, equalityExpression.rhs].forEach(o => {
            const type = this.typeSystem.type(o);
            if (type === BasicType.ErrorType) {
                this.addError(o, `Cannot type this sub-expression.`, "error.type");
            } else if (type !== BasicType.Sort && type !== BasicType.UnknownType) {
                this.addError(o, `Type of this sub-expression must be sort.`, "error.type");
            }
        })
    }

    validateBooleanOperation(parent : AstNode[], ...operands : Expr[]) {
        operands.forEach(o => {
            const type = this.typeSystem.type(o);
            if (type === BasicType.ErrorType) {
                this.addError(o, `Cannot type this sub-expression.`, "error.type");
            } else if (type !== BasicType.Boolean && type !== BasicType.UnknownType) {
                this.addError(o, `Type of this sub-expression must be boolean.`, "error.type");
            }
        });
    }

    validateAnd(andExpression : BinaryOperation, parent : AstNode[]) {
        this.validateBinaryOperation(andExpression, parent);
        this.validateBooleanOperation([...parent, andExpression], andExpression.lhs, andExpression.rhs);
    }

    validateOr(orExpression : BinaryOperation, parent : AstNode[]) {
        this.validateBinaryOperation(orExpression, parent);
        this.validateBooleanOperation([...parent, orExpression], orExpression.lhs, orExpression.rhs);
    }

    validateNot(notExpression : NotExpr, parent : AstNode[]) {
        this.validateBooleanOperation([...parent, notExpression], notExpression.operand);
    }

    validateConstant(constant : Constant, parent : AstNode[]) {
        if (!(parent[0] as Formula).variables.find(v => v.name === constant.name)) {
            this.addError(constant, `Reference to undeclared quantified variable '${constant.name}'`, "error.variable")
        }
    }

    validateFunctionApplication(funcAppl : FunctionApplicationExpr, parent : AstNode[]) {
        const type = this.typeSystem.functionType(funcAppl, parent);

        if (this.functionTypes.has(funcAppl.name)) {
            const registeredType = this.functionTypes.get(funcAppl.name);
            
            if (type.arity !== registeredType!.arity) {
                this.addError(funcAppl, 
                    `Wrong number of function parameters, expected ${registeredType!.arity} as used elsewhere.`, "error.function");
            }
            if (type.returnType !== BasicType.UnknownType && type.returnType !== registeredType!.returnType) {
                const returnTypeDescription = registeredType!.returnType === BasicType.Sort ? "sort" : "boolean";
                const inferredReturnTypeDescription = type!.returnType === BasicType.Sort ? "sort" : "boolean";
                this.addError(funcAppl, 
                    `This usage of function ${funcAppl.name} suggests return type '${inferredReturnTypeDescription}' which differs from the expected type '${returnTypeDescription}' as used elsewhere.`, "error.function");
            }
        } else if (type.returnType !== BasicType.UnknownType) {
            this.functionTypes.set(funcAppl.name, Object.assign(type, {firstReference: funcAppl}));
        }

        funcAppl.args.forEach(a => {
            this.validateExpr(a, [...parent, funcAppl]);

            const type = this.typeSystem.type(a);
            if (type === BasicType.ErrorType) {
                this.addError(a, `Cannot type this function argument.`, "error.type");
            } else if (type !== BasicType.Sort) {
                this.addError(a, `Function arguments must always be of a sort type.`, "error.type");
            }
        })
    }

    addError(nodeOrExpr : AstNode|Expr, message : string, code : string) {
        if (nodeOrExpr === null) {
            console.error("Cannot add error marker to null element.");
            return;
        }
        
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