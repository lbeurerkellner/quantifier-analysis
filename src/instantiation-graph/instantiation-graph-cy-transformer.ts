import { InstantiationGraphLayout } from './instantiation-graph-layout';
import { GraphOperationType } from './operations';
import { AstNode } from '../ast/parser';
import { QuantifierInstantiationNode, InstantiationNode, InstantiationNodeType, FunctionApplicationNode, VariableNode, ConstantNode, TermNode, InstantiationGraph } from './instantiation-graph';

const EdgeStyleMatches = {
    "line-color": "#BB64ED",
    "target-arrow-color": "#BB64ED",
    "line-style": "dashed"
}
const EdgeStyleInstantiates = {
    "line-color": "#DBE453",
    "target-arrow-color": "#DBE453",
    "line-style": "dashed"
}
const EdgeStyleEquality = {
    "line-color": "#256A31",
    "line-style": "dashed",
    "line-width": "1pt",
    "target-arrow-shape": "none"
}

export class InstantiationGraphCyTransformer {
    traces = new Map<string, AstNode>();
    graph : InstantiationGraph = null as unknown as InstantiationGraph
    
    cache = new Map<InstantiationNode|Set<TermNode>, any[]>();
    idMap = new Map<InstantiationNode, string>();

    ctr = 0

    layout : InstantiationGraphLayout = null as unknown as InstantiationGraphLayout;

    transform(graph: InstantiationGraph, layout : InstantiationGraphLayout): {graphDescription: any[], traces : Map<string, AstNode>} {
        this.traces = new Map<string, AstNode>();
        this.ctr = 0;
        this.graph = graph;
        this.layout = layout;

        graph.entryNodes.forEach((n) => {
            this.transformNode(n)
        });

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
                "background-color": "#F0EB9E",
                instantiationNode: qi
            },
            position: this.layout.position(qi)
        }];

        this.traces.set(qiNodeId, qi.formula);

        // add placeholder to cache and idMap
        this.idMap.set(qi, qiNodeId);
        this.cache.set(qi, nodes);

        // transform instantiated nodes
        qi.instantiated.forEach(n => {
            let targetId = this.transformNode(n)
            // only show an 'instantiates' edge if the set of instantiators of any of the referencing nodes 
            //  is different for the parent node
            if (n.references.size === 0 || !Array.from(n.references).reduce((previous, ref) => previous && equalSets(ref.instantiator, n.instantiator), true)) {
                if (n.type !== InstantiationNodeType.VARIABLE) {
                    nodes.push({ data: { target: targetId, source: qiNodeId, ...EdgeStyleInstantiates } });
                }
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
                "label": fa.functionApplication.name,
                instantiationNode: fa
            },
            position: this.layout.position(fa)
        }];
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

        // check for instantiator
        if (!hasInstantiator(fa)) {
            nodes[0].data["border-color"] = "red";
            nodes[0].data["border-width"] = "2pt";
        } else {
            nodes[0].data["border-color"] = "transparent";
            nodes[0].data["border-width"] = "0pt";
        }

        // mark nodes which enable graph operations in green
        nodes[0].data["graph-operation-candidates"] = fa.operations;
        const enablesFSteps = fa.operations.length > 0 && fa.operations.find(o => o.type === GraphOperationType.FORWARD_STEP);
        const enablesBSteps = fa.operations.length > 0 && fa.operations.find(o => o.type === GraphOperationType.BACKWARD_STEP);
        if (enablesFSteps) {
            nodes[0].data["border-color"] = "green";
            nodes[0].data["border-width"] = "4pt";
        } else if (enablesBSteps) {
            nodes[0].data["border-color"] = "red";
            nodes[0].data["border-width"] = "4pt";
        } 

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
                "background-color": "#C44545",
                instantiationNode: v
            },
            position: this.layout.position(v)
        }];
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
                "background-color": "#C44545",
                instantiationNode: c
            },
            position: this.layout.position(c)
        }];
        // this.traces.set(nodeId, c.constant); // unsupported for now
        this.idMap.set(c, nodeId);
        this.cache.set(c, nodes);

        // transform equivalence class edges
        this.transformEquivalenceClass(c.equivalenceClass);

        this.cache.set(c, nodes);
        return nodeId;
    }

    transformEquivalenceClass(equivalenceClass : Set<TermNode>) {
        if (this.cache.has(equivalenceClass)) {
            return;
        }

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

/** 
 * Checks whether termNode or any of its parent reference nodes has an instantiator.
  */
function hasInstantiator(termNode : TermNode) {
    if (termNode.instantiator.size > 0) {
        return true;
    } else {
        for (let r of Array.from(termNode.references)) {
            if (hasInstantiator(r)) {
                return true;
            }
        }
        return false;
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
    const itr = s1.values();
    let element = itr.next();
    while(!element.done) {
        if (!s2.has(element.value)) {
            return false;
        }
        element = itr.next();
    }
    return true;
}