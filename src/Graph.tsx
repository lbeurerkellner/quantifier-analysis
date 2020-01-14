import React from 'react';
import './css/graph.css';
import CytoscapeComponent from 'react-cytoscapejs';

const CytoscapeStylesheet = [{
  selector: 'node',
  style: {
    'label': 'data(id)',
    'text-valign': 'center',
    'color': '#000000',
    'background-color': '#3a7ecf'
  }
},

{
  selector: 'edge',
  style: {
    'width': 2,
    'line-color': '#3a7ecf',
    'opacity': 0.5
  }
}]

class Graph extends React.Component {
  // cytoscape global object handle
  cy : any

  componentDidMount() {
    this.cy.center();
  }
  
  render() {
    const elements = [
      { data: { id: 'f', label: 'Node 1' }, position: { x: 0, y: 0 } },
      { data: { id: 'g', label: 'Node 2' }, position: { x: 100, y: 0 } },
      { data: { source: 'f', target: 'g', label: 'Edge from Node1 to Node2' } }
   ];
    return (
      <div className="graph">
        <CytoscapeComponent 
          elements={elements} 
          stylesheet={CytoscapeStylesheet}
          style={ { width: '100%', height: '100%' } } 
          cy={(_cy : any) => { this.cy = _cy; }} 
        />
      </div>
    );
  }
}

export default Graph;
