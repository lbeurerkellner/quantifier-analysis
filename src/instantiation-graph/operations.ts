import { Expr, FunctionApplicationExpr, isBinaryOperation, Variable, Formula, ExprNode, BinaryOperation, NotExpr } from './../ast/parser';
import { TermNode, VariableNode, FunctionApplicationNode, InstantiationNodeType, QuantifierInstantiationNode } from './instantiation-graph';

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
    q.matched = formula.pattern.map(p => instantiateTerm(p, bindings, [q])) as FunctionApplicationNode[];
    // instantiate body
    q.instantiated = findTerms(formula.body).map(t => instantiateTerm(t, bindings)) as FunctionApplicationNode[];

    return q;
}

export function instantiateTerm(e: Expr, bindings = new Map<string, TermNode>(), matches : QuantifierInstantiationNode[] = []): TermNode {
    if (Array.isArray(e) || isBinaryOperation(e) || e.type === "not") {
        throw new Error("Cannot instantiate non-term expression " + e);
    }

    const term = e as (FunctionApplicationExpr | Variable);

    if (term.type === "func_application") {
        const fa = term as FunctionApplicationExpr;
        return {
            arguments: fa.args.map(a => instantiateTerm(a, bindings)),
            equivalenceClass: new Set<TermNode>(),
            functionApplication: fa,
            instantiator: [],
            matches: matches,
            type: InstantiationNodeType.FUNC_APPL
        } as FunctionApplicationNode;
    } else if (term.type === "variable" || term.type === "constant") {
        const v = term as Variable;
        const name = v.name;

        // check for an existing binding of v
        if (bindings.has(v.name)) {
            return bindings.get(v.name)!;
        }
        // create new binding for v
        const variableNode = {
            name: name,
            equivalenceClass: new Set<TermNode>(),
            type: InstantiationNodeType.VARIABLE,
            variable: v
        } as VariableNode;

        bindings.set(v.name, variableNode);
        return variableNode;
    } else {
        console.log(e);
        throw new Error("Cannot instantiate unhandled expression type " + e);
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