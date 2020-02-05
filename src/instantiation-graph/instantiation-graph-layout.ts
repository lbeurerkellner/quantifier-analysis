import { InstantiationNode, InstantiationGraph, FunctionApplicationNode, InstantiationNodeType, QuantifierInstantiationNode } from './instantiation-graph';

export interface NodePosition {
    x : number
    y : number
}

export class InstantiationGraphLayout {
    // persist node positions across layouting calls to 
    // build the layout incrementally and to integrate
    // user changes to individual node positions
    positions = new Map<InstantiationNode, NodePosition>()

    longestPath : number = 0

    // minimum Y value among all positioned nodes
    get minY() : number {
        return Math.min(0, ...Array.from(this.positions.entries()).map(e => e[1].y));
    }

    // maximum Y value among all positioned nodes
    get maxY() : number {
        return Math.max(0, ...Array.from(this.positions.entries()).map(e => e[1].y));
    }

    /** 
     * Change position of 'node' to 'pos' and maintain this position
     * in future layout operations.
    */
    updatePosition(node : InstantiationNode, pos : NodePosition) {
        this.positions.set(node, Object.assign({}, pos));
    }

    /**
     * Adjusts this graph layout by additionally processing elements in 'graph.entryNode'
     * which have not been considered in the last call of this function.
     * 
     * Assumes consecutive segments of new elements either in the beginning of graph.entryNodes
     * (new backward steps) and/or at the end (new forward steps). In case of individual new
     * elements apart from these segments, the resulting layout may be non-ideal.
     */
    processDelta(graph : InstantiationGraph) {
        //console.log(graph.entryNodes)
        // this.positions.clear();
        const quantifierInstantiationNodes = Array.from(graph.entryNodes).filter(n => 
            n.type === InstantiationNodeType.QUANTIFIER) as QuantifierInstantiationNode[];
        const positionedNodes = quantifierInstantiationNodes
            .map((qn, idx) => ({node: qn, originalIndex: idx}))
            .filter(nodeAndIndex => this.positions.has(nodeAndIndex.node));

        // recompute longest path
        this.longestPath = Math.max(this.longestPath, this.computeLongestPath(Array.from(graph.entryNodes)));

        // first position nodes which have been prepended to graph.entryNodes (i.e. backward steps)
        if (positionedNodes.length > 0) {
            const firstPositionedNode = positionedNodes[0];
            for (var i=firstPositionedNode.originalIndex-1; i>= 0; i--) {
                    const q = quantifierInstantiationNodes[i];
                    q.instantiated.forEach(n => this.position(n, true));
                    this.position(q, true);
                    q.matched.forEach(n => this.position(n, true));
            }
        }
        
        // then position nodes which have been appended to graph.entryNodes
        graph.entryNodes.forEach(n => {
            if (n.type === InstantiationNodeType.QUANTIFIER) {
                const q = n as QuantifierInstantiationNode;
                q.matched.forEach(n => this.position(n));
                this.position(q);
                q.instantiated.forEach(n => this.position(n));
            }
        })
    }

    position(node : InstantiationNode, prepend : boolean = false) : NodePosition {
        if (this.positions.has(node)) {
            return Object.assign({}, this.positions.get(node)!);
        } else {
            // find a predecessor nodes which has been positioned before
            const predWithPosition = Array.from(node.predecessors).find(p => this.positions.has(p))
            // if such a node exists, make sure to update the positions mapping
            // and return the existing position
            if (predWithPosition) {
                const pos = this.positions.get(predWithPosition)!
                this.positions.delete(predWithPosition);
                this.positions.set(node, pos);
                return Object.assign({}, pos);
            }
            if (node.predecessors.size > 0) {
                console.log(node.predecessors);
            }
        }
        const pos = {
            x: (this.longestPath - longestPath(node)) * 100 - (node.type === InstantiationNodeType.QUANTIFIER ? 50 : 0), 
            y: prepend ? this.minY - 40 : this.maxY + 40
        };
        this.updatePosition(node, pos);
        return Object.assign({}, pos);
    }

    computeLongestPath(nodes : InstantiationNode[]) {
        return Math.max(...nodes.map(n => longestPath(n)))
    }
}

function longestPath(t : InstantiationNode) : number {
    switch (t.type) {
        case InstantiationNodeType.FUNC_APPL:
            return Math.max(...(t as FunctionApplicationNode).arguments.map(a => longestPath(a) + 1));
        case InstantiationNodeType.CONSTANT:
        case InstantiationNodeType.VARIABLE:
            return 0
        case InstantiationNodeType.QUANTIFIER:
            return Math.max(
                ...Array.from((t as QuantifierInstantiationNode).instantiated).map(a => longestPath(a) + 1),
                ...Array.from((t as QuantifierInstantiationNode).matched).map(a => longestPath(a) + 1)
            );
    } 
}