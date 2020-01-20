import { AstNode } from '../ast/parser';
import { QuantifierInstantiationNode, InstantiationNode, InstantiationNodeType, FunctionApplicationNode, VariableNode, ConstantNode, TermNode } from './instantiation-graph';

const EdgeStyleMatches = {
    "line-color": "rgb(187, 100, 237)",
    "target-arrow-color": "rgb(187, 100, 237)",
    "line-style": "dashed"
}
const EdgeStyleInstantiates = {
    "line-color": "rgb(219, 228, 83)",
    "target-arrow-color": "rgb(219, 228, 83)",
    "line-style": "dashed"
}
const EdgeStyleEquality = {
    "line-color": "rgb(37, 106, 49)",
    "line-style": "dashed",
    "line-width": "1pt",
    "target-arrow-shape": "none"
}

export class InstantiationGraphCyTransformer {
    traces = new Map<string, AstNode>();
    
    cache = new Map<InstantiationNode|Set<TermNode>, any[]>();
    idMap = new Map<InstantiationNode, string>();

    ctr = 0

    transform(qis: QuantifierInstantiationNode[]): {graphDescription: any[], traces : Map<string, AstNode>} {
        this.traces = new Map<string, AstNode>();
        this.ctr = 0;

        qis.forEach((qi, idx) => this.transformNode(qi));
        let description = Array.from(this.cache.values()).flatMap(v => v);

        return {
            graphDescription: description,
            traces: this.traces
        }
    }

    transformNode(node : InstantiationNode) : string {
        if (this.cache.has(node)) {
            return this.idMap.get(node)!;
        }
        let nodeId : string

        switch (node.type) {
            case InstantiationNodeType.QUANTIFIER:
                nodeId = this.transformQuantifierInstantiation(node as QuantifierInstantiationNode);
                break;
            case InstantiationNodeType.FUNC_APPL:
                nodeId = this.transformFunctionApplication(node as FunctionApplicationNode);
                break;
            case InstantiationNodeType.VARIABLE:
                nodeId = this.transformVariable(node as VariableNode);
                break;
            case InstantiationNodeType.CONSTANT:
                nodeId = this.transformConstant(node as ConstantNode);
                break;
        }

        if (typeof nodeId === "undefined") {
            throw new Error("Failed to transform node " + node);
        }
        
        this.idMap.set(node, nodeId);

        return nodeId;
    }

    transformQuantifierInstantiation(qi : QuantifierInstantiationNode) : string {
        const qiNodeId = "qi_" + (this.ctr++);
        let nodes: any[] = [{ data: { 
            id: qiNodeId, 
            label: qi.name,
            "background-color": "rgb(240, 235, 158)",
            "position": [0, 0]
        } }];

        this.traces.set(qiNodeId, qi.formula);

        // add placeholder to cache and idMap
        this.idMap.set(qi, qiNodeId);
        this.cache.set(qi, nodes);

        // transform instantiated nodes
        qi.instantiated.forEach(n => {
            let targetId = this.transformNode(n)
            // only show an 'instantiates' edge if the set of instantiators of any of the referencing nodes 
            //  is different for the parent node
            if (Array.from(n.references).reduce((previous, ref) => previous && equalSets(ref.instantiator, n.instantiator), true)) {
                nodes.push({ data: { target: targetId, source: qiNodeId, ...EdgeStyleInstantiates } });
            }
        });

        // transform matched nodes
        qi.matched.forEach(n => this.transformNode(n));

        //nodes.push({ data: { target: formulaTriggerNodeId, source: formulaNodeId, label: "trigger" } });

        this.cache.set(qi, nodes);
        return qiNodeId;
    }

    transformFunctionApplication(fa : FunctionApplicationNode) : string {
        const faNodeId = "func_appl_" + (this.ctr++);
        let nodes: any[] = [{ data: { 
            "id": faNodeId, 
            "label": fa.functionApplication.name
        } }];
        this.traces.set(faNodeId, fa.functionApplication);

        // add placeholder to cache and idMap
        this.idMap.set(fa, faNodeId);
        this.cache.set(fa, nodes);

        // transform instantiator quantifier nodes
        fa.instantiator.forEach(i => this.transformNode(i));

        // transform matches quantifier nodes
        fa.matches.forEach(qi => {
            let targetId = this.transformNode(qi);
            nodes.push({ data: { target: targetId, source: faNodeId, ...EdgeStyleMatches} });
        })

        // transform other nodes in equivalence class
        fa.equivalenceClass.forEach(n => this.transformNode(n));

        // transform equivalence class edges
        this.transformEquivalenceClass(fa.equivalenceClass);

        // transform function arguments
        fa.arguments.forEach((a, idx) => {
            let targetId = this.transformNode(a);
            nodes.push({ data: { target: targetId, source: faNodeId, label: fa.arguments.length > 1 ? "" + idx : undefined } });
        });

        this.cache.set(fa, nodes);
        return faNodeId;
    }

    transformVariable(v : VariableNode) : string {
        const nodeId = "var_" + (this.ctr++);
        let nodes: any[] = [{ data: { 
            "id": nodeId, 
            "label": v.name,
            "background-color": "rgb(196, 69, 69)"
        } }];
        this.traces.set(nodeId, v.variable);

        this.idMap.set(v, nodeId);
        this.cache.set(v, nodes);
        // transform equivalence class edges
        this.transformEquivalenceClass(v.equivalenceClass);

        this.cache.set(v, nodes);
        return nodeId;
    }

    transformConstant(c : ConstantNode) : string {
        const nodeId = "const_" + (this.ctr++);
        let nodes: any[] = [{ data: { 
            "id": nodeId, 
            "label": "<constant>",
            "background-color": "rgb(196, 69, 69)"
        } }];
        // this.traces.set(nodeId, c.constant); // unsupported for now
        this.idMap.set(c, nodeId);
        this.cache.set(c, nodes);

        // transform equivalence class edges
        this.transformEquivalenceClass(c.equivalenceClass);

        this.cache.set(c, nodes);
        return nodeId;
    }

    transformEquivalenceClass(equivalenceClass : Set<TermNode>) {
        let edges : any[] = [];
        this.cache.set(equivalenceClass, edges);
        equivalenceClass.forEach(lhs => {
            equivalenceClass.forEach(rhs => {
                if (lhs === rhs) {
                    return;
                }
                let targetId = this.transformNode(lhs);
                let sourceId = this.transformNode(rhs);

                if (targetId < sourceId) { // only create one edge per relation
                    edges.push({ data: { 
                        target: targetId, 
                        source: sourceId, 
                        label: "",
                        ...EdgeStyleEquality
                        } });
                }
            })
        })
        this.cache.set(equivalenceClass, edges);
    }
}

/** Checks s1 and s2 to be sets of the same elements. */
function equalSets<T>(s1 : Set<T>, s2 : Set<T>) : boolean {
    if (s1 === s2) {
        return true;
    }
    if (s1.size !== s2.size) {
        return false;
    }
    const element = s1.values().next();
    while(!element.done) {
        if (!s2.has(element.value)) {
            return false;
        }
    }
    return true;
}