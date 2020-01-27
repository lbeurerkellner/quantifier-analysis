import { Formula } from './../ast/parser';
import { match } from './e-matching';
import { TermNode, InstantiationGraph, InstantiationNodeType, QuantifierInstantiationNode } from './instantiation-graph';

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

export function computePossibleForwardSteps(instantiationGraph : InstantiationGraph, term : TermNode, formulas : Formula[]) : ForwardStepCandidate[] {
    const qNodes = (Array.from(instantiationGraph.entryNodes)
        .filter(n => n.type === InstantiationNodeType.QUANTIFIER) as QuantifierInstantiationNode[]);
    
    const candidates = formulas.flatMap(formula => {
        const formulaQNodes = qNodes.filter(q => q.formula === formula);
        const formulaQBindings = formulaQNodes.map(q => q.bindings);

        return formula.pattern.flatMap(pattern => {
            return match(pattern, term)
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
        console.log(lhs, rhs, "differ");
        return false;
    }
    return !Array.from(lhs.entries()).find(e => rhs.get(e[0]) !== e[1]);
}