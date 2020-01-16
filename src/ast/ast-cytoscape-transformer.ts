import {
    Root,
    Formula,
    Expr,
    ExprNode,
    isBinaryOperation,
    Constant,
    NotExpr,
    BinaryOperation,
    FunctionApplicationExpr,
    AstNode
} from "./parser";

var ctr = 0;

/**
 * Transformer which transforms a given AST to a list 
 * of node and edge description to be displayed using
 * the cytoscape.js library.
 */
export class ASTCytoscapeTransformer {
    traces = new Map<string, AstNode>();

    tranformASTToCy(ast: Root): any[] {
        this.traces = new Map<string, AstNode>();
        return ast.formulas.flatMap((f, idx) => this.transformFormulaToCy(f, idx));
    }

    transformFormulaToCy(formula: Formula, idx: number) {
        const formulaNodeId = "f" + idx;
        let nodes: any[] = [{ data: { 
            id: formulaNodeId, 
            label: "Q" + idx,
            "background-color": "rgb(240, 235, 158)"
        } }];
        this.traces.set(formulaNodeId, formula);

        this.transformExprToCy(formula.body, formulaNodeId, "body").forEach(n =>
            nodes.push(n)
        );

        const formulaTriggerNodeId = "f_trigger_" + idx;
        nodes.push({ data: { id: formulaTriggerNodeId, label: "T" } })
        this.traces.set(formulaTriggerNodeId, formula);

        this.transformExprToCy(formula.pattern, formulaTriggerNodeId, "pattern").forEach(n =>
            nodes.push(n)
        );
        nodes.push({ data: { target: formulaTriggerNodeId, source: formulaNodeId, label: "trigger" } });

        return nodes;
    }

    transformExprToCy(expr: Expr, parentId: string, label: string): any[] {
        if (Array.isArray(expr)) {
            return (expr as Expr[]).flatMap(e =>
                this.transformExprToCy(e, parentId, label)
            );
        }
        const e = expr as ExprNode;

        let id = "";
        let nodes: any[] = [];
        if (isBinaryOperation(e)) {
            id = "expr_" + e.type + "_" + ctr++;
            nodes.push({ data: { id: id, label: e.type } });
            this.traces.set(id, e);

            this.transformExprToCy((e as BinaryOperation).lhs, id, "lhs").forEach(n =>
                nodes.push(n)
            );
            this.transformExprToCy((e as BinaryOperation).rhs, id, "rhs").forEach(n =>
                nodes.push(n)
            );
        } else if (e.type === "not") {
            id = "expr_not_" + ctr++;
            nodes.push({ data: { id: id, label: e.type } });
            this.traces.set(id, e);

            this.transformExprToCy((e as NotExpr).operand, id, "operand").forEach(n =>
                nodes.push(n)
            );
        } else if (e.type === "constant") {
            id = "expr_const_" + ctr++;
            nodes.push({
                data: {
                    id: id,
                    label: (e as Constant).name,
                    "background-color": "rgb(196, 69, 69)"
                }
            });
            this.traces.set(id, e);
        } else if (e.type === "func_application") {
            return this.transformFunctionApplicationToCy(
                e as FunctionApplicationExpr,
                parentId,
                label
            );
        } else {
            id = "expr_unknown_" + ctr++;
            nodes.push({ data: { id: id, label: "Unknown" } });
            this.traces.set(id, e);
        }
        nodes.push({ data: { target: id, source: parentId, label: label } });

        return nodes;
    }

    transformFunctionApplicationToCy(
        func: FunctionApplicationExpr,
        parentId: string,
        label: string
    ) {
        let nodes = [];
        let id = "func_" + func.name + ctr++;
        nodes.push({ data: { id: id, label: func.name } });
        this.traces.set(id, func);

        func.args.forEach((a, idx) => {
            this.transformExprToCy(a, id, "arg" + idx).forEach(n => nodes.push(n));
        });
        nodes.push({ data: { target: id, source: parentId, label: label } });
        return nodes;
    }
}
