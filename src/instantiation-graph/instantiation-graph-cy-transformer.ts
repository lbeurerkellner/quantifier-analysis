import { AstNode } from '../ast/parser';
import { QuantifierInstantiationNode, InstantiationNode, InstantiationNodeType, FunctionApplicationNode, VariableNode, ConstantNode } from './instantiation-graph';

const EdgeStyleMatches = {
    "line-color": "rgb(187, 100, 237)",
    "line-style": "dashed"
}
const EdgeStyleInstantiates = {
    "line-color": "rgb(219, 228, 83)",
    "line-style": "dashed"
}

export class InstantiationGraphCyTransformer {
    traces = new Map<string, AstNode>();
    
    cache = new Map<InstantiationNode, any[]>();
    idMap = new Map<InstantiationNode, string>();

    ctr = 0

    transform(qis: QuantifierInstantiationNode[]): {graphDescription: any[], traces : Map<string, AstNode>} {
        this.traces = new Map<string, AstNode>();
        this.ctr = 0;

        qis.forEach((qi, idx) => this.transformQuantifierInstantiation(qi));
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
        
        this.idMap.set(node, nodeId);

        return nodeId;
    }

    transformQuantifierInstantiation(qi : QuantifierInstantiationNode) : string {
        const qiNodeId = "qi_" + (this.ctr++);
        let nodes: any[] = [{ data: { 
            id: qiNodeId, 
            label: qi.name,
            "background-color": "rgb(240, 235, 158)"
        } }];

        // add placeholder to cache and idMap
        this.idMap.set(qi, qiNodeId);
        this.cache.set(qi, nodes);

        // transform instantiated nodes
        qi.instantiated.forEach(n => {
            let targetId = this.transformNode(n)
            nodes.push({ data: { target: targetId, source: qiNodeId, ...EdgeStyleInstantiates } });
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

        // add placeholder to cache and idMap
        this.idMap.set(fa, faNodeId);
        this.cache.set(fa, nodes);

        // transform instantiator quantifier nodes
        fa.instantiator.forEach(i => this.transformNode(i));

        // transform matched quantifier nodes
        fa.matches.forEach(qi => {
            let targetId = this.transformNode(qi);
            nodes.push({ data: { target: targetId, source: faNodeId, ...EdgeStyleMatches} });
        })

        // transform other nodes in equivalence class
        fa.equivalenceClass.forEach(n => this.transformNode(n));

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

        this.cache.set(c, nodes);
        return nodeId;
    }
}