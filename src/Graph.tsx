import React from 'react';
import './css/graph.css';
import CytoscapeComponent from 'react-cytoscapejs';

const CytoscapeStylesheet = [{
  selector: 'node',
  style: {
    'label': 'data(label)',
    'font-size': '10pt',
    'text-valign': 'center',
    'color': '#000000',
    'background-color': (e : any) => e.data("background-color") || '#bdc5f2'
  }
},

{
  selector: 'edge',
  style: {
    'width': 2,
    'line-color': 'black',
    'opacity': 0.5,
    'label': 'data(label)',
    'target-arrow-shape': 'triangle',
    'curve-style': 'bezier'
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
};

class Graph extends React.Component<{graph: any[], onTapNode: (nodeId : string) => void}, {}> {
  // cytoscape global object handle
  cy : any

  componentDidMount() {
    this.cy.center();
    this.cy.layout(LAYOUT_OPTIONS);

    this.cy.on('tapstart', (event : any) => {
      this.props.onTapNode(event.target.id());
    });
  }
  
  render() {
    return (
      <div className="graph">
        <CytoscapeComponent 
          elements={this.props.graph} 
          stylesheet={CytoscapeStylesheet}
          style={ { width: '100%', height: '100%' } } 
          cy={(_cy : any) => { this.cy = _cy; }} 
        />
      </div>
    );
  }

  componentDidUpdate() {
    this.cy.layout(LAYOUT_OPTIONS).run();
    this.cy.center();
  }
}

export default Graph;
