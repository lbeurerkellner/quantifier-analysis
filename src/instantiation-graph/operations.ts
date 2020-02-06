import { Formula, FunctionApplicationExpr, ExprNode } from './../ast/parser';
import { match, mergeBindings } from './e-matching';
import { TermNode, InstantiationGraph, InstantiationNodeType, QuantifierInstantiationNode, instantiatedPath, VariableNode, findTerms, ConstantNode, FunctionApplicationNode } from './instantiation-graph';
import {setOf, zip, multiMap} from "./util"
import { bodyMatch } from './body-matching';

type Binding = Map<string, TermNode>;

/** 
 * (Partial) EMatch, as given by the used binding
 * and the matched term nodes in the instantiation graph.
 */
interface EMatch {
    existingTriggerTerms : Map<FunctionApplicationExpr, FunctionApplicationNode>
    binding : Binding
}

/**
 * Adjusts lhs and rhs such that they are considered
 * equal (part of the same equivalence class of term nodes).
 */
export function setEqual(lhs: TermNode, rhs: TermNode) {
    let lhsClass = lhs.equivalenceClass
    let rhsClass = rhs.equivalenceClass

    let eqClass = new Set<TermNode>();
    lhsClass.forEach(t => eqClass.add(t));
    rhsClass.forEach(t => eqClass.add(t));
    eqClass.add(lhs);
    eqClass.add(rhs);

    eqClass.forEach(t => t.equivalenceClass = eqClass);

    // propagate equivalence for parent function calls
    const lhsFunctionApplications = multiMap(Array.from(lhs.references).map(r => [r.name, r]));
    Array.from(rhs.references).forEach(rhsAppl => {
        (lhsFunctionApplications.get(rhsAppl.name) || []).forEach(lhsAppl => {
            if (rhsAppl.name === lhsAppl.name && rhsAppl.arguments.length === lhsAppl.arguments.length) { // double check 
                setEqualIfArgumentsMatch(lhsAppl, rhsAppl);
            }
        })
    });
}

/**
 * Checks all arguments of the provided pair of function application nodes 
 * to be equal and calls 'setEqual', if that holds true.
 */
export function setEqualIfArgumentsMatch(lhs : FunctionApplicationNode, rhs : FunctionApplicationNode) {
    let lhsArgs = lhs.arguments;
    let rhsArgs = rhs.arguments;

    for (let pair of zip(lhsArgs, rhsArgs)) {
        if (!pair[0].equivalenceClass.has(pair[1])) {
            return; // non-equivalent arguments
        }
    }
    // at this point all arguments must be equal
    setEqual(lhs, rhs);
}

export enum GraphOperationType {
    FORWARD_STEP = "FORWARD_STEP",
    BACKWARD_STEP = "BACKWARD_STEP"
}

export interface GraphOperationCandidate {
    type : GraphOperationType
    // the operand terms of this operation
    terms : Set<TermNode>
}

export interface ForwardStepCandidate extends GraphOperationCandidate {
    formula : Formula
    bindings : Map<string, TermNode>

    // map of existing ground terms which match some of the patterns of 'formula'
    existingTriggerTerms : Map<FunctionApplicationExpr, FunctionApplicationNode>
}

export interface BackwardStepCandidate extends GraphOperationCandidate {
    formula : Formula
    bodyBindings : Map<TermNode, ExprNode>
}

export function forwardStep(graph : InstantiationGraph, formula : Formula, 
    existingTriggerTerms : Map<FunctionApplicationExpr, FunctionApplicationNode>, bindings : Map<string, TermNode>) : QuantifierInstantiationNode {
    // augment binding to complete binding
    completeBindings(formula, bindings);
    return graph.instantiateFormula(formula, bindings, existingTriggerTerms);
}

export function computePossibleForwardSteps(instantiationGraph : InstantiationGraph, 
    terms : TermNode[], formulas : Formula[]) : ForwardStepCandidate[] {
    
    const qNodes = (Array.from(instantiationGraph.entryNodes)
        .filter(n => n.type === InstantiationNodeType.QUANTIFIER) as QuantifierInstantiationNode[]);
    
    // collect all possible e-matches of patterns to 'term'
    const allPatterns = formulas.flatMap(f => f.pattern);
    const patternMatches = new Map<FunctionApplicationExpr, EMatch[]>();
    allPatterns.forEach(pattern => {
        patternMatches.set(pattern, terms
            .flatMap(term => 
                match(pattern, term, false).map(b => ({
                    existingTriggerTerms: new Map([[pattern, term]]), 
                    binding: b} as EMatch))
            )
        );
    });

    const candidates = formulas.flatMap(formula => {
        const formulaQNodes = qNodes.filter(q => q.formula === formula);
        const formulaQBindings = formulaQNodes.map(q => q.bindings);

        const formulaPatternMatches = formula.pattern.map(p => patternMatches.get(p)!);
        if (formulaPatternMatches.find(pm => pm!.length === 0)) {
            return [];
        }
        const possiblePatternMatchCombination = Array.from(combinations(formulaPatternMatches));
        return possiblePatternMatchCombination
            // merge pattern bindings into instantiation binding
            .map(pmc => mergeMatches(pmc))
            // sort out incompatible pattern binding combinations
            .filter(ematch => ematch !== null)
            // augment binding to a complete one
            .map(ematch => completeMatch(formula, ematch!)) 
            // only include matches which have not been instantiated yet
            .filter(ematch => {
                return !formulaQBindings.find(b => equalBindings(b, ematch.binding))
            })
            .map(ematch => ({
                formula: formula,
                bindings: ematch.binding,
                existingTriggerTerms: ematch.existingTriggerTerms,
                terms: new Set(ematch.existingTriggerTerms.values()),
                type: GraphOperationType.FORWARD_STEP
            }))
    });
    return candidates;
}

export function backwardStep(graph : InstantiationGraph, formula : Formula, bodyBindings : Map<TermNode, ExprNode>) {
    const bindings = new Map<string, TermNode>();
    completeBindings(formula, bindings);

    graph.cache.clear();
    const replacementPairs : Map<TermNode, TermNode> = new Map(Array.from(bodyBindings.entries()).map(entry => {
        return [entry[0], graph.instantiateTerm(entry[1], bindings, null)]
    }));

    // replace TermNodes pairs as given by bodyBindings
    for (let pair of Array.from(replacementPairs.entries())) {
        merge(graph, pair[0], pair[1]);
    }

    // replace occurrences in bindings
    graph.entryNodes.forEach(n => {
        if (n.type === InstantiationNodeType.QUANTIFIER) {
            const q = n as QuantifierInstantiationNode;
            q.bindings = new Map(Array.from(q.bindings.entries())
                .map(e => [e[0], replacementPairs.has(e[1]) ? replacementPairs.get(e[1])! : e[1]])
            );
        }
    });

    // rebuild graph cache, since the path of nodes may have changed by this backward step
    graph.rebuildCache();

    // add new backward-step instantiation of formula
    graph.instantiateFormula(formula, bindings, new Map(), false);

    // remove obsolete quantifier instantiations
    removeDuplicateInstantiations(graph);

    // recompute set of possible graph operation candidates
    graph.computeGraphOperationCandidates()

    console.log(graph);
}

export function removeDuplicateInstantiations(graph : InstantiationGraph) {
    let instantiationNodes = Array.from(graph.entryNodes)
        .filter(n => n.type === InstantiationNodeType.QUANTIFIER)
        .map(n => n as QuantifierInstantiationNode);
    
    // collect quantifier instantiations by formula
    let formulaInstantiations = new Map<Formula, QuantifierInstantiationNode[]>();
    instantiationNodes.forEach(qnode => {
        formulaInstantiations.set(qnode.formula, 
            [qnode, ...(formulaInstantiations.get(qnode.formula) || [])]);
        
    })
    
    let toBeRemoved : QuantifierInstantiationNode[] = [];
    // finally remove obsolete duplicate quantifier instantiation which arise if two bindings
    // turn out to be equivalent based on this merge operation
    graph.entryNodes = instantiationNodes.filter((qnode, index) => {
        const otherInstantiations = formulaInstantiations.get(qnode.formula)!;
        const qnodeIndex = otherInstantiations.indexOf(qnode);
        // check whether there exists another instantiation node with the same 
        // bindings which is not qnode itself and occurs later in the list according to 'index'
        const isDuplicate = otherInstantiations.find((otherInstantiation, otherIndex) => {
            return qnodeIndex < otherIndex && equalBindings(otherInstantiation.bindings, qnode.bindings)
        });

        // keep track of duplicate instantiation nodes for later unlinking
        if (isDuplicate) { toBeRemoved.push(qnode);}

        return !isDuplicate
    });

    // fully unlink duplicate instantiation nodes from graph
    toBeRemoved.forEach(qnode => {
        qnode.instantiated.forEach(node => node.instantiator.delete(qnode));
        qnode.matched.forEach(node => {
            if (node.type === InstantiationNodeType.FUNC_APPL) {
                (node as FunctionApplicationNode).matches.delete(qnode);
            }
        });
    });
}

export function merge(graph : InstantiationGraph, oldTermNode : TermNode, newTermNode : TermNode) {
    // keep track of merged nodes
    oldTermNode.predecessors.forEach(p => newTermNode.predecessors.add(p));
    newTermNode.predecessors.add(oldTermNode);

    if (oldTermNode.type === InstantiationNodeType.CONSTANT || oldTermNode.type === InstantiationNodeType.VARIABLE) {
        const variableOrConstant = oldTermNode as (VariableNode|ConstantNode);
        // .instantiator
        variableOrConstant.instantiator.forEach(q => q.instantiated.delete(oldTermNode));
        // not to be unified since newTermNode was not instantiated by oldTermNode's instantiator
        
        // .equivalenceClass (maintain equalities over oldTermNode for newTermNode)
        const eqClass = new Set(variableOrConstant.equivalenceClass);
        eqClass.delete(variableOrConstant);
        eqClass.forEach(e => newTermNode.equivalenceClass.add(e))

        // .references (rewire references to oldTermNode to newTermNode)
        variableOrConstant.references.forEach(r => newTermNode.references.add(r));
        variableOrConstant.references.forEach(r => rewireReference(graph, r, oldTermNode, newTermNode));
    } else if (oldTermNode.type === InstantiationNodeType.FUNC_APPL) {
        const funcAppl = oldTermNode as FunctionApplicationNode;
        const newFuncAppl = newTermNode as FunctionApplicationNode;

        if (newFuncAppl.type !== InstantiationNodeType.FUNC_APPL) {
            throw new Error("Cannot unify non-function application term " + newFuncAppl + " with function application.");
        }
        // .instantiator
        funcAppl.instantiator.forEach(q => q.instantiated.delete(oldTermNode));
        // add newTermNode to oldTermNode's instantiator
        funcAppl.instantiator.forEach(q => q.instantiated.add(newTermNode));
        
        // .equivalenceClass (maintain equalities over oldTermNode for newTermNode)
        const eqClass = new Set(funcAppl.equivalenceClass);
        eqClass.delete(funcAppl);
        eqClass.forEach(e => newTermNode.equivalenceClass.add(e))

        // .references (rewire references to oldTermNode to newTermNode)
        funcAppl.references.forEach(r => newTermNode.references.add(r));
        funcAppl.references.forEach(r => rewireReference(graph, r, oldTermNode, newTermNode));

        // .arguments (remove references from oldTermNode to its arguments)
        funcAppl.arguments.forEach(a => a.references.delete(funcAppl));

        // .matches
        funcAppl.matches.forEach(m => newFuncAppl.matches.add(m));
        funcAppl.matches.forEach(q => q.matched.delete(funcAppl));
        funcAppl.matches.forEach(q => q.matched.add(newFuncAppl));
    } else {
        throw new Error("Cannot unify unhandled instantiation graph node " + oldTermNode.type)
    }

    // additionally unify function application which now refer to the same arguments
    const sortedByPath = Array.from(newTermNode.references)
        .map(r => ({node: r, path: instantiatedPath(r)}))
        .sort((a, b) => a.path < b.path ? -1 : (a.path === b.path ? 0 : 1));
    for (var i=1; i<sortedByPath.length; i++) {
        const p = sortedByPath[i].path;
        if (sortedByPath[i-1].path === p) {
            merge(graph, sortedByPath[i-1].node, sortedByPath[i].node);
        }
    }
}

export function rewireReference(graph : InstantiationGraph, referenceFa : FunctionApplicationNode, 
    oldTarget : TermNode, newTarget : TermNode) {

    referenceFa.arguments = referenceFa.arguments.map(a => {
        if (a === oldTarget) {
            return newTarget;
        }
        return a;
    });
}

export function computePossibleBackwardMatches(instantiationGraph : InstantiationGraph, terms : TermNode[], formulas : Formula[]) : BackwardStepCandidate[] {
    return terms.flatMap(termNode => {
        return formulas.flatMap(formula => {
            const formulaTerms = findTerms(formula.body);
            
            return formulaTerms.flatMap(term => { // determine set of matching formula terms
                return bodyMatch(term, termNode);
            }).map(bodyBinding => { // construct backward-step candidates from body bindings
                const b : BackwardStepCandidate = {
                    formula: formula,
                    bodyBindings: bodyBinding,
                    terms: new Set([termNode]),
                    type: GraphOperationType.BACKWARD_STEP
                };
                return b;
            })
        })
    });
}

/**
 * Completes the provided bindings to be used as an instantiating binding 
 * with {@code formula}.
 * 
 * Binds all variables in {@code formula} not bound yet, to a new free variable 
 * of the same name.
 */
export function completeBindings(formula : Formula, bindings : Map<string, TermNode>) : Map<string, TermNode> {
    formula.variables.filter(v => !bindings.has(v.globalName)).forEach(v => {
        const variableNode : VariableNode = {
            type: InstantiationNodeType.VARIABLE,
            name: v.name,
            instantiator: setOf(),
            equivalenceClass: setOf(),
            references: setOf(),
            variable: v,
            predecessors: setOf()
        };
        bindings.set(v.globalName, variableNode)
    });
    
    return bindings;
}


export function *combinations<T>(bags : T[][]) : IterableIterator<T[]> {
    if (bags.length === 1) {
        for (let element of bags[0]) {
            yield [element];
        }
        return;
    } else {
        const remainingBags = [...bags];
        remainingBags.splice(0, 1);
        for (let element of bags[0]) {
            let remainingCombinations = combinations(remainingBags);
            const iterator = remainingCombinations;
            let nextElement = iterator.next();
            while (!nextElement.done) {
                yield ([element, ...nextElement.value]);
                nextElement = iterator.next();
            }
        }
    }
    return;
}


/**
 * Merges the given list of (partial) matches into one
 * EMatch, if the corresponding bindings are compatible.
 * 
 * Returns {@code null} if the given set of matches are not compatible.
 */
function mergeMatches(matches : EMatch[]) : EMatch|null {
    const binding = mergeBindings(matches.map(m => m.binding));
    if (!binding) {
        return null;
    }
    let existingTriggerTerms = new Map<FunctionApplicationExpr, FunctionApplicationNode>();
    matches.flatMap(m => Array.from(m.existingTriggerTerms.entries())).forEach(e => {
        if (existingTriggerTerms.has(e[0])) {
            console.error("Failed to merge partial E-matches due to inconsistent ground-term pattern mapping.", matches);
            throw new Error("Failed to merge partial E-matches due to inconsistent ground-term pattern mapping.");
        } else {
            existingTriggerTerms.set(e[0], e[1]);
        }
    })
    return {
        binding: binding,
        existingTriggerTerms: existingTriggerTerms
    };
}

/**
 * Augments the bindings of the provided EMatch, to bind all
 * variables in formula.
 */
function completeMatch(formula : Formula, match : EMatch) : EMatch{
    return {
        binding: completeBindings(formula, match.binding),
        existingTriggerTerms: match.existingTriggerTerms
    };
}

/** String representation of binding for logging purposes. */
export function strBinding(binding : Binding) : string {
    return Array.from(binding.entries())
        .map(e => e[0] + " => " + instantiatedPath(e[1]))
        .join(", ");
}

/** Returns whether two bindings can be considered equal. */
function equalBindings(lhs : Binding, rhs : Binding) : boolean {
    if (lhs.size !== rhs.size) {
        return false;
    }
    return !Array.from(lhs.entries()).find(e => {
        // search for mismatching binding
        let rhsTerm = rhs.get(e[0]);
        // check for missing mapping in rhs
        if (!rhsTerm) { return true; }
        let lhsTerm = e[1]
        return instantiatedPath(rhsTerm!) !== instantiatedPath(lhsTerm);
    });
}