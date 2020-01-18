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
    equivalenceClass : TermNode[]
}

export interface QuantifierInstantiationNode extends InstantiationNode {

    name : string

    formula : Formula

    matched : FunctionApplicationNode[]
    instantiated : FunctionApplicationNode[]
}

export interface FunctionApplicationNode extends TermNode {
    instantiator : QuantifierInstantiationNode[]
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