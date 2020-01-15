import {
    Root,
    Formula,
    Expr,
    ExprNode,
    isBinaryOperation,
    Constant,
    NotExpr,
    BinaryOperation,
    FunctionApplicationExpr
} from "./parser";

var ctr = 0;

/**
 * Transformer which transforms a given AST to a list 
 * of node and edge description to be displayed using
 * the cytoscape.js library.
 */
export class ASTCytoscapeTransformer {
    tranformASTToCy(ast: Root): any[] {
        return ast.formulas.flatMap((f, idx) => this.transformFormulaToCy(f, idx));
    }

    transformFormulaToCy(formula: Formula, idx: number) {
        let nodes: any[] = [{ data: { 
            id: "f" + idx, 
            label: "Q" + idx,
            "background-color": "rgb(240, 235, 158)"
        } }];
        this.transformExprToCy(formula.body, "f" + idx, "body").forEach(n =>
            nodes.push(n)
        );
        nodes.push({ data: { id: "f_trigger_" + idx, label: "T" } })
        this.transformExprToCy(formula.pattern, "f_trigger_" + idx, "pattern").forEach(n =>
            nodes.push(n)
        );
        nodes.push({ data: { target: "f_trigger_" + idx, source: "f" + idx, label: "trigger" } });
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
            this.transformExprToCy((e as BinaryOperation).lhs, id, "lhs").forEach(n =>
                nodes.push(n)
            );
            this.transformExprToCy((e as BinaryOperation).rhs, id, "rhs").forEach(n =>
                nodes.push(n)
            );
        } else if (e.type === "not") {
            id = "expr_not_" + ctr++;
            nodes.push({ data: { id: id, label: e.type } });
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
        } else if (e.type === "func_application") {
            return this.transformFunctionApplicationToCy(
                e as FunctionApplicationExpr,
                parentId,
                label
            );
        } else {
            id = "expr_unknown_" + ctr++;
            nodes.push({ data: { id: id, label: "Unknown" } });
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
        func.args.forEach((a, idx) => {
            this.transformExprToCy(a, id, "arg" + idx).forEach(n => nodes.push(n));
        });
        nodes.push({ data: { target: id, source: parentId, label: label } });
        return nodes;
    }
}
