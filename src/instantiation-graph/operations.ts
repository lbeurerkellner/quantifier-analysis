import { Formula } from './../ast/parser';
import { match } from './e-matching';
import { TermNode, InstantiationGraph, InstantiationNodeType, QuantifierInstantiationNode, instantiatedPath, VariableNode } from './instantiation-graph';
import {setOf} from "./util"

type Binding = Map<string, TermNode>;

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
}

export interface BackwardStepCandidate extends GraphOperationCandidate {
    formula : Formula
    bindings : Map<string, TermNode>
}

export interface ForwardStepCandidate extends GraphOperationCandidate {
    formula : Formula
    bindings : Map<string, TermNode>
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

export function forwardStep(graph : InstantiationGraph, formula : Formula, bindings : Map<string, TermNode>) : QuantifierInstantiationNode {
    // augment binding to complete binding
    completeBindings(formula, bindings);
    return graph.instantiateFormula(formula, bindings);
}

export function computePossibleForwardSteps(instantiationGraph : InstantiationGraph, term : TermNode, formulas : Formula[]) : ForwardStepCandidate[] {
    const qNodes = (Array.from(instantiationGraph.entryNodes)
        .filter(n => n.type === InstantiationNodeType.QUANTIFIER) as QuantifierInstantiationNode[]);
    
    const candidates = formulas.flatMap(formula => {
        const formulaQNodes = qNodes.filter(q => q.formula === formula);
        const formulaQBindings = formulaQNodes.map(q => q.bindings);

        return formula.pattern.flatMap(pattern => {
            return match(pattern, term, false)
                // complete bindings to bind all variable of formula
                .map(binding => completeBindings(formula, binding))
                // only include matches which have not been instantiated yet
                .filter(binding => !formulaQBindings.find(b => equalBindings(b, binding)))
                .flatMap(binding => 
                ({
                    formula: formula,
                    bindings: binding,
                    type: GraphOperationType.FORWARD_STEP
                })
            )
        })
    })
    return candidates;
}

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