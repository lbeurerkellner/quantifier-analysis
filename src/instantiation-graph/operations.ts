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

    lhs.equivalenceClass = eqClass;
    rhs.equivalenceClass = eqClass;
}

var ctr = 0;

export function instantiateFormula(formula: Formula, bindings = new Map<string, TermNode>()): QuantifierInstantiationNode {
    let q = {
        name: "q" + (ctr++),
        type: InstantiationNodeType.QUANTIFIER,
        formula: formula,
        matched: [],
        instantiated: []
    } as QuantifierInstantiationNode;

    // instantiate patterns
    q.matched = formula.pattern.map(p => instantiateTerm(p, bindings, null, [q])) as FunctionApplicationNode[];
    // instantiate body
    q.instantiated = findTerms(formula.body).map(t => instantiateTerm(t, bindings)) as FunctionApplicationNode[];
    q.instantiated.forEach(t => t.instantiator.add(q));
    // instantiate equalities
    findEqualities(formula.body).forEach(eq => {
        const lhsNode = instantiateTerm(eq.lhs, bindings);
        const rhsNode = instantiateTerm(eq.rhs, bindings)
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

export function instantiateTerm(e: Expr, bindings = new Map<string, TermNode>(), reference : FunctionApplicationNode|null = null, matches : QuantifierInstantiationNode[] = []): TermNode {
    if (Array.isArray(e) || isBinaryOperation(e) || e.type === "not") {
        throw new Error("Cannot instantiate non-term expression " + e);
    }

    const term = e as (FunctionApplicationExpr | Variable);
    const termPath = path(term);

    // check for an existing node for 'e'
    if (bindings.has(termPath)) {
        const existing = bindings.get(termPath)!;
        if (reference !== null) {
            existing.references.add(reference);
        }
        if (existing.type === InstantiationNodeType.FUNC_APPL && matches.length > 0) {
            matches.forEach(q => (existing as FunctionApplicationNode).matches.push(q));
        }
        return existing;
    }

    if (term.type === "func_application") {
        const fa = term as FunctionApplicationExpr;
        const faNode = {
            arguments: [],
            equivalenceClass: setOf(),
            functionApplication: fa,
            instantiator: setOf(),
            references: setOf(reference),
            matches: matches,
            type: InstantiationNodeType.FUNC_APPL
        } as FunctionApplicationNode;

        bindings.set(termPath, faNode);
        faNode.arguments = fa.args.map(a => instantiateTerm(a, bindings, faNode))

        return faNode;
    } else if (term.type === "variable" || term.type === "constant") {
        const v = term as Variable;

        // create new binding for v
        const variableNode = {
            name: v.name,
            equivalenceClass: new Set<TermNode>(),
            type: InstantiationNodeType.VARIABLE,
            variable: v,
            references: setOf(reference), 
            instantiator: setOf(),
        } as VariableNode;

        bindings.set(termPath, variableNode);
        return variableNode;
    } else {
        console.log(e);
        throw new Error("Cannot instantiate unhandled expression type " + e);
    }
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
    } else if (expr.type === "func_application" || expr.type === "variable" || expr.type === "constant") {
        return [expr];
    } else {
        console.log(expr);
        throw new Error("Unhandled expression type in findTerms "+ expr);
    }
}

function setOf<T>(...elements : T[]) : Set<T> {
    return new Set<T>(elements.filter(e => e !== null));
}