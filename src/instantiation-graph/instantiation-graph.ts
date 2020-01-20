import { Formula, FunctionApplicationExpr, Variable } from '../ast/parser';

export enum InstantiationNodeType {
    QUANTIFIER = "quantifier",
    FUNC_APPL = "func_application",
    VARIABLE = "variable",
    CONSTANT = "constant"
}

export interface InstantiationNode {
    type : InstantiationNodeType
}

export interface TermNode extends InstantiationNode {
    // the set of terms which are considered to be equivalent 
    // to this term (by established equalities in the instantiated formulas)
    equivalenceClass : Set<TermNode>
    // the set of function application nodes which refer to this term
    // as an argument
    references : Set<FunctionApplicationNode>
    // the list of quantifier instantiation that instantiate this term
    instantiator : Set<QuantifierInstantiationNode>
}

export interface QuantifierInstantiationNode extends InstantiationNode {

    name : string

    formula : Formula

    matched : TermNode[]
    instantiated : TermNode[]
}

export interface FunctionApplicationNode extends TermNode {
    matches : QuantifierInstantiationNode[]

    functionApplication : FunctionApplicationExpr

    arguments : TermNode[]
}

export interface VariableNode extends TermNode {
    name : string
    variable : Variable
}

export interface ConstantNode extends TermNode {
    name : string
    constant : null // TODO
}
