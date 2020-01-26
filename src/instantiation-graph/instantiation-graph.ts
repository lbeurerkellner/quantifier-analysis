import { Expr, isBinaryOperation, Constant, NotExpr, ExprNode, NodeType } from './../ast/parser';
import { BinaryOperation, Formula, FunctionApplicationExpr, Variable } from '../ast/parser';
import * as GraphOperations from "./operations"

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

    matched : Set<TermNode>
    instantiated : Set<TermNode>

    bindings : Map<string, TermNode>
}

export interface FunctionApplicationNode extends TermNode {
    name : string
    matches : Set<QuantifierInstantiationNode>

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

export class InstantiationGraph {
    cache = new Map<string, TermNode>()
    entryNodes = new Set<InstantiationNode>();

    ctr = 0;

    instantiateFormula(formula: Formula, bindings = new Map<string, TermNode>()): QuantifierInstantiationNode {
        let q = {
            name: "q" + (this.ctr++),
            type: InstantiationNodeType.QUANTIFIER,
            formula: formula,
            matched: setOf(),
            instantiated: setOf(),
            bindings: bindings
        } as QuantifierInstantiationNode;

        // instantiate patterns
        q.matched = new Set(formula.pattern.map(p => this.instantiateTerm(p, bindings, null, null, [q])) as FunctionApplicationNode[]);
        // instantiate body
        findTerms(formula.body).map(t => this.instantiateTerm(t, bindings, q));
        // instantiate equalities
        findEqualities(formula.body).forEach(eq => {
            const lhsNode = this.instantiateTerm(eq.lhs, bindings, q);
            const rhsNode = this.instantiateTerm(eq.rhs, bindings, q)
            GraphOperations.setEqual(lhsNode, rhsNode);
        })
        
        this.entryNodes.add(q);

        console.log(this.cache);

        return q;
    }

    instantiateTerm(e: Expr, bindings = new Map<string, TermNode>(), 
        instantiator : QuantifierInstantiationNode|null = null,
        reference : FunctionApplicationNode|null = null, 
        matches : QuantifierInstantiationNode[] = []): TermNode {

        if (Array.isArray(e) || isBinaryOperation(e) || e.type === NodeType.NOT) {
            throw new Error("Cannot instantiate non-term expression " + e);
        }

        const term = e as (FunctionApplicationExpr | Constant);
        const termPath = path(term, bindings);

        // the TermNode to return, may be initialized by
        // pre-existing cached element in the next block
        let resultNode : TermNode|null = null;
        
        // check for an existing node for 'e'
        if (this.cache.has(termPath)) {
            const existing = this.cache.get(termPath)!;
            if (reference !== null) {
                existing.references.add(reference);
            }
            if (existing.type === InstantiationNodeType.FUNC_APPL && matches.length > 0) {
                matches.forEach(q => (existing as FunctionApplicationNode).matches.add(q));
            }
            resultNode = existing;
        }

        if (term.type === NodeType.FUNC_APPLICATION) {
            const fa = term as FunctionApplicationExpr;
            const faNode = (resultNode as FunctionApplicationNode|null) || {
                name: fa.name,
                arguments: [],
                equivalenceClass: setOf(),
                functionApplication: fa,
                instantiator: setOf(),
                references: setOf(),
                matches: setOf(),
                type: InstantiationNodeType.FUNC_APPL
            } as FunctionApplicationNode;

            // save resulting node in cache
            this.cache.set(termPath, faNode);

            if (!resultNode) { 
                // in case of a fresh FA node
                // initialise 'arguments' field
                faNode.arguments = fa.args.map(a => this.instantiateTerm(a, bindings, instantiator, faNode))
            }
            // extend FA node by 'matches'
            matches.forEach(q => faNode.matches.add(q));

            // extend FA node by 'instantiator' as cause
            if (instantiator !== null) {
                faNode.instantiator.add(instantiator)
                instantiator.instantiated.add(faNode);
            }
            // extend FA node by additional 'reference' parent node
            if (reference) {
                faNode.references.add(reference);
            }
            // set resultNode to be returned
            resultNode = faNode;
        } else if (term.type === NodeType.CONSTANT) {
            const c = term as Constant;
            if (!c.referencesVariable) {
                throw new Error("Cannot instantiate constant without correspondingly bound variable " + e);
            }
            // check for binding of this variable
            if (bindings.has(c.referencesVariable!.globalName)) {
                // just use binding here
                resultNode = bindings.get(c.referencesVariable!.globalName)!
            } else {
                // check for cached node
                if (resultNode && term.type as string !== resultNode.type as string) {
                    // variable 'term' has been replaced/bound to a different term in the current graph
                    // extend existing node by additional 'reference' parent node
                    if (reference) {
                        resultNode.references.add(reference);
                    }
                    // 'instantiator' does not need to be propagated along the children of this existing resultNode
                    // since their instantiation cannot be attributed to 'instantiator'
                } else {
                    const variableNode = (resultNode as VariableNode|null) || {
                        name: c.name,
                        equivalenceClass: setOf(),
                        type: InstantiationNodeType.VARIABLE,
                        variable: c.referencesVariable!,
                        references: setOf(), 
                        instantiator: setOf(),
                    } as VariableNode;

                    // extend FA node by 'instantiator' as cause
                    if (instantiator) {
                        variableNode.instantiator.add(instantiator);
                        instantiator.instantiated.add(variableNode);
                    }
                    // extend FA node by additional 'reference' parent node
                    if (reference) {
                        variableNode.references.add(reference);
                    }
                    // save resulting node in cache
                    this.cache.set(termPath, variableNode);
                    // update bindings accordingly
                    bindings.set(c.referencesVariable!.globalName, variableNode);
                    // set resultNode to be returned
                    resultNode = variableNode;
                }
            }
        } else {
            console.log(e);
            throw new Error("Cannot instantiate unhandled expression type " + e);
        }

        return resultNode!;
    }
}

export function forwardStep(graph : InstantiationGraph, formula : Formula, bindings : Map<string, TermNode>) : QuantifierInstantiationNode {
    // augment binding to complete binding
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

    return graph.instantiateFormula(formula, bindings);
}

/** 
 * Same as path(), but operates on InstantiationNode nodes and does not considers bindings. 
 */
export function instantiatedPath(node : TermNode) : string {
    switch (node.type) {
        case InstantiationNodeType.FUNC_APPL:
            const fa = node as FunctionApplicationNode;
            return fa.name + "$(" + fa.arguments.map(a => instantiatedPath(a as any)).join(", ") + ")";
        case InstantiationNodeType.VARIABLE:
            const v = node as VariableNode;        
            return v.variable.globalName;
    }
    throw new Error("Unhandled instantiation graph element type in path computation " + node.type);
}

/** 
 * Returns a string-based path which uniquely identifies the given AST node + the provided bindings in
 * the instantiation graph (binding is applied during path computation).
 */
export function path(node : FunctionApplicationExpr|Variable|Constant, bindings : Map<string, TermNode>) : string {
    switch (node.type) {
        case "func_application":
            const fa = node as FunctionApplicationExpr;
            return fa.name + "$(" + fa.args.map(a => path(a as any, bindings)).join(", ") + ")";
        case "variable":
            return (node as Variable).globalName;
        case "constant":
            const constant = node as Constant;
            if (constant.referencesVariable) {
                const globalName = constant.referencesVariable!.globalName;
                if (bindings.has(globalName)) {
                    return instantiatedPath(bindings.get(globalName)!);
                } else {
                    return globalName;
                }
            }
            return (node as Constant).name;
    }
    throw new Error("Unhandled AST element type in path computation " + node.type);
}

export function shadowBindings(parentBinding : Map<string, TermNode>, binding : Map<string, TermNode>) {
    const result = new Map<string, TermNode>();
    Array.from(parentBinding.entries()).forEach(e => {
        result.set(e[0], e[1]);
    })
    Array.from(binding.entries()).forEach(e => {
        result.set(e[0], e[1]);
    })
    return result;
}


/**
 * TODO: support inequalities
 */
function findEqualities(expr : Expr) : BinaryOperation[] {
    if (expr === null) {
        return [];
    }
    if (Array.isArray(expr)) {
        return (expr as Expr[]).flatMap(e => findEqualities(e));
    }

    if (isBinaryOperation(expr)) {
        if (expr.type === "=") {
            return [expr as BinaryOperation];
        }

        const bo = expr as BinaryOperation;
        return [bo.lhs, bo.rhs].flatMap(e => findEqualities(e));
    } else if (expr.type === "not") {
        return findEqualities((expr as NotExpr).operand);
    } else if (expr.type === "func_application" || expr.type === "variable" || expr.type === "constant") {
        return [];
    } else {
        console.log(expr);
        throw new Error("Unhandled expression type in findTerms "+ expr);
    }
}

/**
 * Returns all (sub-)terms (function applications and constants) contained 
 * in the given expression.
 */
function findTerms(expr : Expr) : ExprNode[] {
    if (expr === null) {
        return [];
    }
    if (Array.isArray(expr)) {
        return (expr as Expr[]).flatMap(e => findTerms(e));
    }

    if (isBinaryOperation(expr)) {
        const bo = expr as BinaryOperation;
        return [bo.lhs, bo.rhs].flatMap(e => findTerms(e));
    } else if (expr.type === "not") {
        return findTerms((expr as NotExpr).operand);
    } else if (expr.type === "variable" || expr.type === "constant") {
        return [expr];
    } else if (expr.type === "func_application") {
        const fa = expr as FunctionApplicationExpr;
        return [
            expr,
            ...fa.args.flatMap(a => findTerms(a))
        ]
    } else {
        console.log(expr);
        throw new Error("Unhandled expression type in findTerms "+ expr);
    }
}

function setOf<T>(...elements : T[]) : Set<T> {
    return new Set<T>(elements.filter(e => e !== null));
}