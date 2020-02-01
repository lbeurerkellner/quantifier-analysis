import { ExprNode, Expr, NodeType, FunctionApplicationExpr } from './../ast/parser';
import { TermNode, InstantiationNodeType, FunctionApplicationNode, VariableNode, ConstantNode } from './instantiation-graph';

export type BodyBinding = Map<TermNode, ExprNode>;

export function bodyMatch(termExpr : Expr, termNode : TermNode, argumentIdx : number = 0) : BodyBinding[] {
    if (Array.isArray(termExpr)) {
        throw new Error("Cannot perform body-match against array-based Expr term.")
    }
    const term = termExpr as ExprNode;
    
    if ((termNode.type === InstantiationNodeType.CONSTANT || 
         termNode.type === InstantiationNodeType.VARIABLE) && argumentIdx !== 0) {
        throw new Error("Invalid State: Cannot match against a specified argument with pattern being a variable/constant.");
    }

    // in case the argumentIdx exceeds the currently matched FunctionApplicationExpr-based
    // pattern, an empty binding ends the recursive calling of this function for each function argument
    if ((termNode.type === InstantiationNodeType.FUNC_APPL) && 
        (termNode as FunctionApplicationNode).arguments.length <= argumentIdx) {
        
        return [new Map<TermNode, ExprNode>()];
    }

    if (termNode.type === InstantiationNodeType.FUNC_APPL) {
        const arg = (termNode as FunctionApplicationNode).arguments[argumentIdx] as 
                    (FunctionApplicationNode|VariableNode|ConstantNode);

        if ((term.type === NodeType.FUNC_APPLICATION) && 
            (term as FunctionApplicationExpr).name === termNode.name) {
            const candidateFa = (term as FunctionApplicationExpr);
            
            const argumentIndexBindings = bodyMatch(candidateFa.args[argumentIdx], arg);
            const remainingBindings = bodyMatch(termExpr, termNode, argumentIdx+1);

            return (argumentIndexBindings
                .flatMap(bindings => remainingBindings.map(rb => 
                    mergeBodyBindings([bindings, rb])
                ))
                .filter(bindings => bindings !== null)) as BodyBinding[];
        } else {
            return []; // name or type mismatch, not an e-match
        }
    } else if (termNode.type === InstantiationNodeType.CONSTANT) {
        const c = termNode as ConstantNode;
        const binding = new Map<TermNode, ExprNode>();
        binding.set(c, term);

        // possibly revise this
        return [binding];
    } else if (termNode.type === InstantiationNodeType.VARIABLE) {
        const v = termNode as VariableNode;
        const binding = new Map<TermNode, ExprNode>();
        binding.set(v, term);
        return [binding];
    } else {
        console.error("Encountered non-matchable term in match(): ", termNode);
        return [];
    }
}

/** Returns a body-binding combining all provided bindings, or {@code null} if they are incompatible. */
export function mergeBodyBindings(multipleBindings : BodyBinding[]) : BodyBinding|null {
    const mergedBindings = new Map<TermNode, ExprNode>();
    for (let bindings of multipleBindings) {
        for (let b of Array.from(bindings.entries())) {
            if (mergedBindings.has(b[0])) {
                if (mergedBindings.get(b[0]) === b[1]) {
                    mergedBindings.set(b[0], b[1]);
                } else {
                    return null; // bindings are incompatible
                }
            } else {
                mergedBindings.set(b[0], b[1]);
            }
        }
    }
    return mergedBindings;
}
