import { BinaryOperation, FunctionApplicationExpr, AstNode, NodeType, Formula, Root } from './parser';
import { Expr, ExprNode, isBinaryOperation, NotExpr } from './parser';

/** Maps all expr that can be found in 'expr' to a unique path. */
export function mapNodes(node : AstNode|Expr, prefix : string = "") : Map<AstNode, string> {
    if (node === null) {
        return new Map();
    }
    if (Array.isArray(node)) {
        return mergeMaps((node as Expr[]).flatMap((e, idx) => mapNodes(e, prefix + "." + idx)));
    }

    if (typeof node === "undefined") {
        throw new Error("Cannot compute set of contained terms for broken AST element " + node)
    }

    if (isBinaryOperation(node)) {
        const bo = node as BinaryOperation;
        return mergeMaps([
            new Map([[node, prefix]]),
            mapNodes(bo.lhs, prefix + ".lhs"),
            mapNodes(bo.rhs, prefix + ".rhs")
        ])
    } else if (node.type === "not") {
        const notExpr = node as NotExpr;
        return mergeMaps([
            new Map([[node, prefix]]),
            mapNodes(notExpr.operand, prefix + ".operand")
        ]);
    } else if (node.type === "variable" || node.type === "constant") {
        return new Map([
            [node, prefix]
        ])
    } else if (node.type === "func_application") {
        const fa = node as FunctionApplicationExpr;
        return mergeMaps([
            new Map([[node, prefix]]),
            ...fa.args.map((arg, idx) => mapNodes(arg, prefix + ".args." + idx))
        ])
    } else if (node.type === NodeType.FORMULA) {
        const f = node as Formula;
        return mergeMaps([
            new Map([[node, f.name]]),
            ...f.pattern.map((p, idx) => mapNodes(p, f.name + ".pattern." + idx)),
            mapNodes(f.body, f.name + ".body")
        ])
    } else {
        throw new Error("Unhandled expression type in mapExpr "+ node);
    }
}

export function resolve(root : Root, path : string) {
    let segments = path.split(".");
    if (segments.find(s => s.length === 0)) {
        throw new Error(`Malformed path '${path}'.`)
    }
    let formulaName = segments.splice(0, 1)[0];
    const f = root.formulas.find(f => f.name === formulaName);

    if (!f) {
        throw new Error(`Failed to resolve path '${path}', could not find formula with name '${formulaName}'`);
    }

    return resolveNode(f, segments, segments);
}

export function resolveNode(node : AstNode|Expr, path : string[], completePath : string[]) : AstNode|Expr {
    if (typeof node === "undefined") {
        throw new Error(`Failed to resolve AST path '${completePath.join(".")}': Element at segment '${path.join(".")}' is undefined.`);
    }

    if (path.length === 0) {
        return node;
    }

    let rawAccess = node as any;
    let nextKey = path.splice(0, 1)[0];

    return resolveNode(rawAccess[nextKey], path, completePath);
}

function mergeMaps<K, V>(maps : Map<K, V>[]) : Map<K, V> {
    let resultMap = new Map<K, V>();
    maps.forEach(map => {
        Array.from(map.entries()).forEach(entry => {
            if (resultMap.has(entry[0])) {
                throw new Error("Failed to merge maps, encountered non-unique key.");
            }
            resultMap.set(entry[0], entry[1]);
        })
    })
    return resultMap;
}