import { TermNode, InstantiationNodeType, FunctionApplicationNode } from './instantiation-graph';
import { FunctionApplicationExpr, Constant, NodeType } from './../ast/parser';

/**
 * Returns a list of bindings that may be used to instantiate pattern 
 * such that term represents an e-match of pattern.
 */
export function match(pattern : FunctionApplicationExpr|Constant, term : TermNode, 
    includeEquivalenceClass : boolean, argumentIdx : number = 0) : Map<string, TermNode>[] {
    
    let candidates = new Set<TermNode>();
    if (includeEquivalenceClass) {
        // construct set of matching candidates (terms equivalent to term)
        term.equivalenceClass.forEach(t => candidates.add(t));
        candidates.add(term);
    } else {
        // only consider provided term and not its whole equivalence class
        candidates.add(term);
    }

    if (pattern.type === NodeType.CONSTANT && argumentIdx !== 0) {
        throw new Error("Invalid State: Cannot match against a specified argument with pattern being a variable.");
    }

    // in case the argumentIdx exceeds the currently matched FunctionApplicationExpr-based
    // pattern, an empty binding ends the recursive calling of this function for each function argument
    if ((pattern.type === NodeType.FUNC_APPLICATION) && 
        (pattern as FunctionApplicationExpr).args.length <= argumentIdx) {
        
        return [new Map<string, TermNode>()];
    }

    const bindings = Array.from(candidates.values()).flatMap(candidate => {
        if (pattern.type === NodeType.FUNC_APPLICATION) {
            const arg = (pattern as FunctionApplicationExpr).args[argumentIdx] as 
                        (FunctionApplicationExpr|Constant);

            if ((candidate.type === InstantiationNodeType.FUNC_APPL) && 
                (candidate as FunctionApplicationNode).name === pattern.name) {
                const candidateFa = (candidate as FunctionApplicationNode);
                
                const argumentIndexBindings = match(arg, candidateFa.arguments[argumentIdx], true);
                const remainingBindings = match(pattern, term, true, argumentIdx+1);

                return (argumentIndexBindings
                    .flatMap(bindings => remainingBindings.map(rb => 
                        mergeBindings([bindings, rb])
                    ))
                    .filter(bindings => bindings !== null)) as Map<string, TermNode>[];
            } else {
                return []; // name or type mismatch, not an e-match
            }
        } else if (pattern.type === NodeType.CONSTANT) {
            const c = pattern as Constant;
            const binding = new Map<string, TermNode>();
            binding.set(c.referencesVariable!.globalName, candidate);
            return [binding];
        } else {
            console.error("Encountered non-matchable term in match(): ", candidate);
            return [];
        }
    });

    return bindings;
}
/** Returns a binding combining all provided bindings, or {@code null} if they are incompatible. */
export function mergeBindings(multipleBindings : Map<string, TermNode>[]) : Map<string, TermNode>|null {
    const mergedBindings = new Map<string, TermNode>();
    for (let bindings of multipleBindings) {
        for (let b of Array.from(bindings.entries())) {
            if (mergedBindings.has(b[0])) {
                if (mergedBindings.get(b[0]) === b[1]) {
                    mergedBindings.set(b[0], b[1]);
                } else if (mergedBindings.get(b[0])?.equivalenceClass.has(b[1])) {
                    // nothing to do since an equivalent binding has already
                    // been added to mergedBindings
                } else {
                    console.log("Bindings are incompatible", multipleBindings);
                    console.log(mergedBindings.get(b[0]), b[1], mergedBindings.get(b[0]) == b[1]);
                    return null; // bindings are incompatible
                }
            } else {
                mergedBindings.set(b[0], b[1]);
            }
        }
    }
    return mergedBindings;
}