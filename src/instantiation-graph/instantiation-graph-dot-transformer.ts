let LB = "\n";

function isNode(element : any) {
  return typeof element.data["source"] === "undefined";
}

function isEdge(element : any) {
  return typeof element.data["source"] !== "undefined";
}

interface CyNode {
  data : {
    id : string,
    label : string,
    "background-color": string
  }
  position : {
    x : number,
    y : number
  }
}

interface CyEdge {
  data : {
    source : string,
    target : string,
    "line-color": string,
    "line-style": string,
    label? : string,
    "target-arrow-shape"?: string
  }
}

export class InstantiationGraphDotTransformer {
    transform(cyEncoded : any[]) : string {
      const nodes = cyEncoded.filter(e => isNode(e)) as CyNode[];
      const edges = cyEncoded.filter(e => isEdge(e)) as CyEdge[];
      
      let maxY = 0;
      nodes.forEach(n => maxY = Math.max(n.position.y, maxY));

      return "digraph G {" + LB
            // + `graph [splines = "curved"]` + LB 
            + nodes.map(n => this.transformNode(n, maxY)).join(LB) + LB + LB
            + edges.map(e => this.transformEdge(e)).join(LB) + LB
            + "}" + LB;
    }

    transformNode(node : CyNode, maxY : number) : string {
      return `\t${node.data.id} [label = "${node.data.label}"` +
       `, pos="${node.position?.x ?? "0"}, ${maxY - node.position?.y ?? "0"}", style="filled",` + 
       `color="${node.data["background-color"] ?? "#bdc5f2"}"];`;
    }

    transformEdge(edge : CyEdge) : string {
      return `\t${edge.data.source} -> ${edge.data.target} [` + 
        `taillabel = "${edge.data.label ?? ""}", ` + 
        `color = "${edge.data["line-color"] ?? "black"}", ` + 
        `${edge.data["line-style"] == "dashed" ? 'style="dashed"' : ""}` + 
        (edge.data["target-arrow-shape"] == "none" ? " arrowsize=0.0 " : "") +
        `]`;
    }
}