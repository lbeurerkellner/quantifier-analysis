import React from 'react';
import './css/graph.css';
import CytoscapeComponent from 'react-cytoscapejs';

import cytoscape from "cytoscape"
import cola from "cytoscape-cola";
cytoscape.use(cola);

const CytoscapeStylesheet = [{
  selector: 'node',
  style: {
    'label': (e : any) => e.data("label") || "",
    'font-size': '16pt',
    'text-valign': 'center',
    'color': '#000000',
    'background-color': (e : any) => e.data("background-color") || '#bdc5f2', 
    'border-color': (e : any) => e.data("border-color") || 'transparent',
    'border-width': (e : any) => e.data("border-width") || '0pt',
  }
},

{
  selector: 'edge',
  style: {
    'width': 2,
    'font-size': 12,
    'color': 'grey',
    'label': (e : any) => e.data("label") || "",
    'curve-style': 'bezier',
    'line-style': (e : any) => e.data("line-style") || 'solid',
    'line-color': (e : any) => e.data("line-color") || 'grey',
    'target-arrow-shape': (e : any) => e.data("target-arrow-shape") || 'triangle',
    'target-arrow-color': (e : any) => e.data("target-arrow-color") || 'grey',
    
  }
}]

let LAYOUT_OPTIONS = {
  name: 'breadthfirst',

  fit: true, // whether to fit the viewport to the graph
  directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30, // padding on fit
  circle: false, // put depths in concentric circles if true, put depths top down if false
  grid: true, // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  animate: false, // whether to transition the node positions
  animationDuration: 50, // duration of animation in ms if enabled
  randomize: false,
};

interface GraphProperties {
  graph : any[]
  onTapNode : (nodeId : string, target : any) => void
  onSecondaryTapNode? : (nodeId : string, target : any) => void
  onCanvasMove? : () => void

  layout : string
}

class Graph extends React.Component<GraphProperties, {}> {
  // cytoscape global object handle
  cy : any
  graphContainer : HTMLDivElement|null = null

  componentDidMount() {
    this.cy.center();

    this.cy.on('pan', () => {
      if (this.props.onCanvasMove) {
        this.props.onCanvasMove();
      }
    })

    this.cy.on('zoom', () => {
      if (this.props.onCanvasMove) {
        this.props.onCanvasMove();
      }
    })
    
    this.cy.on('tapstart', (event : any) => {
      if (typeof event.target !== "undefined" && typeof event.target.id === "function") {
        this.props.onTapNode(event.target.id(), event.target);
      }
      if (this.props.onCanvasMove) {
        this.props.onCanvasMove();
      }
    });

    this.cy.on('cxttapstart', (event : any) => {
      if (typeof event.target !== "undefined" && typeof event.target.id === "function") {
        if (this.props.onSecondaryTapNode) {
          this.props.onSecondaryTapNode(event.target.id(), event.target);
        }
      }
    })
  }
  
  render() {
    return (
      <div className="graph" ref={(ref) => this.graphContainer = ref}>
        <CytoscapeComponent 
          elements={this.props.graph} 
          stylesheet={CytoscapeStylesheet}
          style={ { width: '100%', height: '100%' } } 
          cy={(_cy : any) => { this.cy = _cy; }} 
        />
      </div>
    );
  }
  
  componentDidUpdate(prevProps : GraphProperties) {
    if (prevProps.graph !== this.props.graph) {
      this.cy.layout(Object.assign(LAYOUT_OPTIONS, {name: this.props.layout})).run();
      this.cy.center();
    }
  }
}

export default Graph;
