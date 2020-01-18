import { ExprNode, Expr } from './parser';

export enum BasicType {
    Boolean,
    Sort,
    ErrorType
}

/** Very basic support for two types: boolean and sort (and an error type). */
export class TypeSystem {
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
                return BasicType.Sort;
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