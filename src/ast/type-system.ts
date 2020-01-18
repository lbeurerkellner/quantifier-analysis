import { ExprNode, Expr, FunctionApplicationExpr, AstNode } from './parser';

export enum BasicType {
    Boolean,
    Sort,
    ErrorType,
    UnknownType
}

export interface FunctionType {
    arity : number
    returnType : BasicType
}

/** Very basic support for two types: boolean and sort (and an error type). */
export class TypeSystem {
    /**
     * Determines the function type which can be inferred for funcAppl, considering
     * the chain of parent nodes 'parents'.
     */
    functionType(funcAppl : FunctionApplicationExpr, parents : AstNode[]) : FunctionType {
        const directParent = parents[parents.length - 1];
        let returnType : BasicType

        if (directParent.type === "=" || directParent.type === "func_application") {
            returnType = BasicType.Sort;
        } else if (directParent.type === "formula") {
            returnType = BasicType.UnknownType;
        } else {
            returnType = BasicType.Boolean;
        }

        return {
            arity: funcAppl.args.length,
            firstReference: null,
            returnType: returnType
        } as unknown as FunctionType;
    }

    type(exprOrArray : Expr) : BasicType {
        if (Array.isArray(exprOrArray)) {
            if (exprOrArray.length > 1) {
                console.error("Type system was queried for type of an expression array", exprOrArray);
                return BasicType.ErrorType;
            } else {
                return this.type(exprOrArray[0]);
            }
        }
        if (exprOrArray === null) {
            return BasicType.ErrorType;
        }

        const expr = exprOrArray as ExprNode;

        switch (expr.type) {
            case "constant": 
                return BasicType.Sort;
            case "variable":
                console.error("Cannot type variable node", expr);
                return BasicType.ErrorType;
            case "func_application":
                return BasicType.UnknownType;
            case "=":
            case "and":
            case "or":
            case "not":
                return BasicType.Boolean;
            default:
                console.error("Unhandled expression node type in type system", expr);
                return BasicType.ErrorType;
        }
    }
}