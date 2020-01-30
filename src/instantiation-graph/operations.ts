import { Formula, FunctionApplicationExpr } from './../ast/parser';
import { match, mergeBindings } from './e-matching';
import { TermNode, InstantiationGraph, InstantiationNodeType, QuantifierInstantiationNode, instantiatedPath, VariableNode } from './instantiation-graph';
import {setOf} from "./util"

type Binding = Map<string, TermNode>;

/** 
 * (Partial) EMatch, as given by the used binding
 * and the matched term nodes in the instantiation graph.
 */
interface EMatch {
    terms : Set<TermNode>
    binding : Binding
}

/**
 * Adjusts lhs and rhs in such that they are considered
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
}

export enum GraphOperationType {
    FORWARD_STEP = "forward_step",
    BACKWARD_STEP = "backward_step"
}

export interface GraphOperationCandidate {
    type : GraphOperationType
    // the operand terms of this operation
    terms : Set<TermNode>
}

export interface BackwardStepCandidate extends GraphOperationCandidate {
    formula : Formula
    bindings : Map<string, TermNode>
}

export interface ForwardStepCandidate extends GraphOperationCandidate {
    formula : Formula
    bindings : Map<string, TermNode>
}

export function forwardStep(graph : InstantiationGraph, formula : Formula, bindings : Map<string, TermNode>) : QuantifierInstantiationNode {
    // augment binding to complete binding
    completeBindings(formula, bindings);
    return graph.instantiateFormula(formula, bindings);
}

export function computePossibleForwardSteps(instantiationGraph : InstantiationGraph, terms : TermNode[], formulas : Formula[]) : ForwardStepCandidate[] {
    const qNodes = (Array.from(instantiationGraph.entryNodes)
        .filter(n => n.type === InstantiationNodeType.QUANTIFIER) as QuantifierInstantiationNode[]);
    
    // collect all possible e-matches of patterns to 'term'
    const allPatterns = formulas.flatMap(f => f.pattern);
    const patternMatches = new Map<FunctionApplicationExpr, EMatch[]>();
    allPatterns.forEach(pattern => {
        patternMatches.set(pattern, terms
            .flatMap(term => 
                match(pattern, term, false).map(b => ({terms: setOf(term), binding: b} as EMatch))
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
                terms: ematch.terms,
                type: GraphOperationType.FORWARD_STEP
            }))
    });
    return candidates;
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
            variable: v
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
    return {
        binding: binding,
        terms: new Set(matches.flatMap(m => Array.from(m.terms)))
    };
}

/**
 * Augments the bindings of the provided EMatch, to bind all
 * variables in formula.
 */
function completeMatch(formula : Formula, match : EMatch) {
    return {
        binding: completeBindings(formula, match.binding),
        terms: match.terms
    };
}

/** String representation of binding for logging purposes. */
function strBinding(binding : Binding) : string {
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