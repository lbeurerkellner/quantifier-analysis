import { BinaryOperation, Constant, Expr, ExprNode, Formula, FunctionApplicationExpr, isBinaryOperation, NotExpr, Variable } from './../ast/parser';
import { FunctionApplicationNode, InstantiationNodeType, QuantifierInstantiationNode, TermNode, VariableNode } from './instantiation-graph';

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

var ctr = 0;

export function instantiateFormula(formula: Formula, bindings = new Map<string, TermNode>()): QuantifierInstantiationNode {
    let q = {
        name: "q" + (ctr++),
        type: InstantiationNodeType.QUANTIFIER,
        formula: formula,
        matched: setOf(),
        instantiated: setOf()
    } as QuantifierInstantiationNode;

    // instantiate patterns
    q.matched = new Set(formula.pattern.map(p => instantiateTerm(p, bindings, null, null, [q])) as FunctionApplicationNode[]);
    // instantiate body
    q.instantiated = new Set(findTerms(formula.body).map(t => instantiateTerm(t, bindings, q)) as FunctionApplicationNode[]);
    // instantiate equalities
    findEqualities(formula.body).forEach(eq => {
        const lhsNode = instantiateTerm(eq.lhs, bindings, q);
        const rhsNode = instantiateTerm(eq.rhs, bindings, q)
        setEqual(lhsNode, rhsNode);
    })

    return q;
}

export function path(node : FunctionApplicationExpr|Variable|Constant) : string {
    switch (node.type) {
        case "func_application":
            const fa = node as FunctionApplicationExpr;
            return fa.name + "$(" + fa.args.map(a => path(a as any)).join(", ") + ")";
        case "variable":
            return (node as Variable).name;
        case "constant":
            return (node as Constant).name;
    }
    throw new Error("Unhandled AST element type in path computation " + node.type);
}

export function instantiateTerm(e: Expr, bindings = new Map<string, TermNode>(), 
    instantiator : QuantifierInstantiationNode|null = null,
    reference : FunctionApplicationNode|null = null, 
    matches : QuantifierInstantiationNode[] = []): TermNode {

    if (Array.isArray(e) || isBinaryOperation(e) || e.type === "not") {
        throw new Error("Cannot instantiate non-term expression " + e);
    }

    const term = e as (FunctionApplicationExpr | Variable);
    const termPath = path(term);

    // the TermNode to return, may be initialized by
    // pre-existing bindings in the next block
    let resultNode : TermNode|null = null;

    // check for an existing node for 'e'
    if (bindings.has(termPath)) {
        const existing = bindings.get(termPath)!;
        if (reference !== null) {
            existing.references.add(reference);
        }
        if (existing.type === InstantiationNodeType.FUNC_APPL && matches.length > 0) {
            matches.forEach(q => (existing as FunctionApplicationNode).matches.push(q));
        }
        resultNode = existing;
    }

    if (term.type === "func_application") {
        const fa = term as FunctionApplicationExpr;
        const faNode = (resultNode as FunctionApplicationNode|null) || {
            name: fa.name,
            arguments: [],
            equivalenceClass: setOf(),
            functionApplication: fa,
            instantiator: setOf(),
            references: setOf(),
            matches: [],
            type: InstantiationNodeType.FUNC_APPL
        } as FunctionApplicationNode;

        // save resulting node in bindings
        bindings.set(termPath, faNode);

        if (!resultNode) { 
            // in case of a fresh FA node
            // initialise 'arguments' field
            faNode.arguments = fa.args.map(a => instantiateTerm(a, bindings, instantiator, faNode))
        }
        // extend FA node by 'matches'
        matches.forEach(q => faNode.matches.push(q));

        // extend FA node by 'instantiator' as cause
        if (instantiator !== null) {
            faNode.instantiator.add(instantiator)
        }
        // extend FA node by additional 'reference' parent node
        if (reference) {
            faNode.references.add(reference);
        }
        // set resultNode to be returned
        resultNode = faNode;
    } else if (term.type === "variable" || term.type === "constant") {
        if (resultNode && term.type as string !== resultNode.type as string) {
            // variable 'term' has been replaced/bound to a different term in the current graph
            // extend existing node by additional 'reference' parent node
            if (reference) {
                resultNode.references.add(reference);
            }
            // 'instantiator' does not need to be propagated along the children of this existing resultNode
            // since their instantiation cannot be attributed to 'instantiator'
        } else {
            const v = term as Variable;
            const variableNode = (resultNode as VariableNode|null) || {
                name: v.name,
                equivalenceClass: setOf(),
                type: InstantiationNodeType.VARIABLE,
                variable: v,
                references: setOf(), 
                instantiator: setOf(),
            } as VariableNode;

            // extend FA node by 'instantiator' as cause
            if (instantiator) {
                variableNode.instantiator.add(instantiator);
            }
            // extend FA node by additional 'reference' parent node
            if (reference) {
                variableNode.references.add(reference);
            }
            // save resulting node in bindings
            bindings.set(termPath, variableNode);
            // set resultNode to be returned
            resultNode = variableNode;
        }
    } else {
        console.log(e);
        throw new Error("Cannot instantiate unhandled expression type " + e);
    }

    return resultNode!;
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