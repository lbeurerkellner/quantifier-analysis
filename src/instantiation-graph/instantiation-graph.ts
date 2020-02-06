import { Expr, isBinaryOperation, Constant, NotExpr, ExprNode, NodeType, AstNode } from './../ast/parser';
import { BinaryOperation, Formula, FunctionApplicationExpr, Variable } from '../ast/parser';
import { GraphOperationCandidate } from "./operations"
import * as GraphOperations from "./operations"
import {setOf} from "./util"

export enum InstantiationNodeType {
    QUANTIFIER = "quantifier",
    FUNC_APPL = "func_application",
    VARIABLE = "variable",
    CONSTANT = "constant"
}

export interface InstantiationNode {
    type : InstantiationNodeType

    // list of predecessor nodes in the evolution of the instantiation graph 
    // (i.e. nodes which were merged into this node)
    predecessors : Set<InstantiationNode>
}

export interface TermNode extends InstantiationNode {
    name : string

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

    // list of graph operations (forward/backward steps) enabled by this node
    operations : GraphOperationCandidate[]
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
    entryNodes : InstantiationNode[] = [];

    ctr = 0;

    formulas : Formula[]

    constructor(formulas : Formula[]) {
        this.formulas = formulas;
    }

    /**
     * Instantiate the given 'formula' using 'bindings'.
     * 
     * Only generates ground terms for the trigger terms which are not
     * listed as key in 'existingTriggerTerms'.
     */
    instantiateFormula(formula: Formula, bindings = new Map<string, TermNode>(),
        existingTriggerTerms = new Map<FunctionApplicationExpr, FunctionApplicationNode>(), 
        isForwardDirection: boolean = true): QuantifierInstantiationNode {
        let q : QuantifierInstantiationNode = {
            name: "q" + (this.ctr++),
            type: InstantiationNodeType.QUANTIFIER,
            formula: formula,
            matched: setOf(),
            instantiated: setOf(),
            bindings: bindings,
            predecessors: setOf()
        };

        // instantiate missing trigger terms
        q.matched = new Set([
            ...Array.from(existingTriggerTerms.values()),
            ...formula.pattern
                .filter(p => !existingTriggerTerms.has(p))
                .map(p => this.instantiateTerm(p, bindings, null, null, [q])) as FunctionApplicationNode[]
        ]);
        // connect existing trigger terms
        existingTriggerTerms.forEach(term => term.matches.add(q));

        // instantiate body
        findTerms(formula.body).map(t => this.instantiateTerm(t, bindings, q));
        // instantiate equalities
        findEqualities(formula.body).forEach(eq => {
            const lhsNode = this.instantiateTerm(eq.lhs, bindings, q);
            const rhsNode = this.instantiateTerm(eq.rhs, bindings, q)
            GraphOperations.setEqual(lhsNode, rhsNode);
        })
        
        // depending on the direction (forward/backward)
        // prepend or append the new instantiation node 
        if (isForwardDirection) {
            this.entryNodes.push(q);
        } else {
            this.entryNodes.splice(0, 0, q);
        }

        // recompute set of possible graph operations
        this.computeGraphOperationCandidates();

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
            const faNode : FunctionApplicationNode = (resultNode as FunctionApplicationNode|null) || {
                name: fa.name,
                arguments: [],
                equivalenceClass: setOf(),
                functionApplication: fa,
                instantiator: setOf(),
                references: setOf(),
                matches: setOf(),
                type: InstantiationNodeType.FUNC_APPL,
                operations: [],
                predecessors: setOf()
            };

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

            //// derive equalities over new FA node from its arguments
            // find set of sibling function applications of the same function
            const siblingFAs = setOf(...faNode.arguments
                .flatMap(a => Array.from(a.equivalenceClass))
                .flatMap(a => Array.from(a.references))
                .filter(fa => (fa !== faNode &&
                               fa.name === faNode.name &&
                               fa.arguments.length === faNode.arguments.length)))
            // add equalities to siblings if applicable
            siblingFAs.forEach(siblingFa => GraphOperations.setEqualIfArgumentsMatch(siblingFa, faNode));

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
                // replace bound term with a possibly cached instance
                resultNode = this.cache.get(instantiatedPath(resultNode)) || resultNode;

                // extend existing node by additional 'reference' parent node
                if (reference) {
                    resultNode.references.add(reference);
                }
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
                    const variableNode : VariableNode = (resultNode as VariableNode|null) || {
                        name: c.name,
                        equivalenceClass: setOf(),
                        type: InstantiationNodeType.VARIABLE,
                        variable: c.referencesVariable!,
                        references: setOf(), 
                        instantiator: setOf(),
                        predecessors: setOf()
                    };

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

    rebuildCache() {
        // repopulate the cache by traversing this graph's entry nodes
        this.cache = new Map<string, TermNode>();
        const visitor = new InstantiationGraphVisitor(node => {
            if ((node.type === InstantiationNodeType.CONSTANT) ||
                (node.type === InstantiationNodeType.VARIABLE) ||
                (node.type === InstantiationNodeType.FUNC_APPL)) {
                    const termNode = node as (ConstantNode|VariableNode|FunctionApplicationNode)
                    this.cache.set(instantiatedPath(termNode, true), termNode);
            } else {
                // nop
            }
        })
        this.entryNodes.forEach(n => visitor.visit(n))
    }

    computeGraphOperationCandidates() {
        // find set of function application nodes in instantiation graph
        let funcAppls = new Array<FunctionApplicationNode>();
        const visitor = new InstantiationGraphVisitor(node => {
            if (node.type === InstantiationNodeType.FUNC_APPL) {
                const fa = node as FunctionApplicationNode;
                funcAppls.push(fa);
                // clear previous operations
                fa.operations = [];
            }
        });
        this.entryNodes.forEach(q => visitor.visit(q));

        const fSteps = GraphOperations.computePossibleForwardSteps(this, funcAppls, this.formulas);
        fSteps.forEach(operation => {
            Array.from(operation.terms).forEach(term => {
                if (term.type === InstantiationNodeType.FUNC_APPL) {
                    const fa = term as FunctionApplicationNode;
                    fa.operations.push(operation);
                }
            })
        });

        const unexplainedFuncAppls = funcAppls.filter(fa => fa.instantiator.size === 0);

        const bSteps = GraphOperations.computePossibleBackwardMatches(this, unexplainedFuncAppls, this.formulas);
        bSteps.forEach(operation => {
            Array.from(operation.terms).forEach(term => {
                if (term.type === InstantiationNodeType.FUNC_APPL) {
                    const fa = term as FunctionApplicationNode;
                    fa.operations.push(operation);
                }
            })
        })
    }
}

/**
 * A visitor implementation to traverse InstantiationGraph data structure.
 */
class InstantiationGraphVisitor {
    visited : Set<InstantiationNode>
    visitor : (node : InstantiationNode) => void

    constructor(visitor : (node : InstantiationNode) => void) {
        this.visited = new Set<InstantiationNode>();
        this.visitor = visitor;
    }

    visit(node : InstantiationNode) {
        if (this.visited.has(node)) {
            return;
        }

        this.visited.add(node);
        this.visitor(node);

        switch (node.type) {
            case InstantiationNodeType.QUANTIFIER:
                const q = node as QuantifierInstantiationNode;
                q.matched.forEach(n => this.visit(n))
                q.instantiated.forEach(n => this.visit(n))
                break;
            case InstantiationNodeType.FUNC_APPL:
                const fa = node as FunctionApplicationNode;
                fa.arguments.forEach(a => this.visit(a));
                fa.instantiator.forEach(q => this.visit(q))
                fa.matches.forEach(q => this.visit(q))
                fa.equivalenceClass.forEach(n => this.visit(n))
                fa.references.forEach(n => this.visit(n))
                break;
            case InstantiationNodeType.VARIABLE:
                const v = node as VariableNode;
                v.instantiator.forEach(q => this.visit(q))
                v.references.forEach(n => this.visit(n))
                v.equivalenceClass.forEach(n => this.visit(n))
                break;
            case InstantiationNodeType.CONSTANT:
                const c = node as ConstantNode;
                c.instantiator.forEach(q => this.visit(q))
                c.references.forEach(n => this.visit(n))
                c.equivalenceClass.forEach(n => this.visit(n))
                break;
        }
    }
}


/** 
 * Same as path(), but operates on InstantiationNode nodes and does not considers bindings. 
 */
export function instantiatedPath(node : TermNode, globalNames : boolean = true) : string {
    switch (node.type) {
        case InstantiationNodeType.FUNC_APPL:
            const fa = node as FunctionApplicationNode;
            return fa.name + "(" + fa.arguments.map(a => instantiatedPath(a as any, globalNames)).join(", ") + ")";
        case InstantiationNodeType.VARIABLE:
            const v = node as VariableNode;        
            return globalNames ? v.variable.globalName : v.variable.name;
    }
    throw new Error("Unhandled instantiation graph element type in path computation " + node.type);
}

/** 
 * Returns a string-based path which uniquely identifies the given AST node + the provided bindings in
 * the instantiation graph (binding is applied during path computation).
 */
export function path(node : FunctionApplicationExpr|Variable|Constant, bindings : Map<string, TermNode>, globalNames : boolean = true) : string {
    switch (node.type) {
        case "func_application":
            const fa = node as FunctionApplicationExpr;
            return fa.name + "(" + fa.args.map(a => path(a as any, bindings, globalNames)).join(", ") + ")";
        case "variable":
            return (node as Variable).globalName;
        case "constant":
            const constant = node as Constant;
            if (constant.referencesVariable) {
                const globalName = constant.referencesVariable!.globalName;
                if (bindings.has(globalName)) {
                    return instantiatedPath(bindings.get(globalName)!, globalNames);
                } else {
                    return globalNames ? globalName : constant.referencesVariable!.name;
                }
            }
            return (node as Constant).name;
    }
    throw new Error("Unhandled AST element type in path computation " + node.type);
}

/*export function shadowBindings(parentBinding : Map<string, TermNode>, binding : Map<string, TermNode>) {
    const result = new Map<string, TermNode>();
    Array.from(parentBinding.entries()).forEach(e => {
        result.set(e[0], e[1]);
    })
    Array.from(binding.entries()).forEach(e => {
        result.set(e[0], e[1]);
    })
    return result;
}*/


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
export function findTerms(expr : Expr) : ExprNode[] {
    if (expr === null) {
        return [];
    }
    if (Array.isArray(expr)) {
        return (expr as Expr[]).flatMap(e => findTerms(e));
    }

    if (typeof expr === "undefined") {
        throw new Error("Cannot compute set of contained terms for broken AST element " + expr)
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

export function getAstElement(instantiationNode : InstantiationNode) : AstNode|null {
    switch (instantiationNode.type) {
        case InstantiationNodeType.CONSTANT:
            return (instantiationNode as ConstantNode).constant;
        case InstantiationNodeType.FUNC_APPL:
            return (instantiationNode as FunctionApplicationNode).functionApplication;
        case InstantiationNodeType.QUANTIFIER:
            return (instantiationNode as QuantifierInstantiationNode).formula;
        case InstantiationNodeType.VARIABLE:
            return (instantiationNode as VariableNode).variable;
    }
}