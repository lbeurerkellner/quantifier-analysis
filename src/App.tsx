import React from 'react';
import './css/App.css';
import Editor from './Editor'
import Graph from './Graph'
import State from './state'
import { Parser, ASTPreprocessor} from './ast/parser';
import Console from './Console';
import {ASTCytoscapeTransformer} from './ast/ast-cytoscape-transformer';

// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();
const preprocessors = new ASTPreprocessor();

class App extends React.Component<{}, {graph: any}> {
  parser : Parser

  constructor(props : any) {
    super(props)
    this.parser = new Parser();

    this.state = {
      graph: [
        { data: { id: 'f', label: 'Node 1' }, position: { x: 0, y: 0 } },
        { data: { id: 'g', label: 'Node 2' }, position: { x: 100, y: 0 } },
        { data: { source: 'f', target: 'g', label: 'Edge from Node1 to Node2' } }
     ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="vsplit">
          <Editor/>
          <Console/>
        </div>
        <Graph graph={this.state.graph}/>
      </div>
    );
  }

  componentDidMount() {
    State.register(this.onStateUpdate.bind(this));

    let content = State.get("editorContent");
    this.onStateUpdate("editorContent", content);
  }

  componentWillUnmount() {
    State.unregister(this.onStateUpdate.bind(this));
  }

  onStateUpdate(key : string, value : any) {
    if (key === "editorContent") {
      try {
        const rawAst = this.parser.parse(value)
        const ast = preprocessors.process(rawAst);
        
        window.log("AST: " + JSON.stringify(ast));
        this.setState({graph: astTransformer.tranformASTToCy(ast)})
      } catch (error) {
        window.log("Failed to parse:" + error);
        throw error;
      }
    }
  }
}

export default App;
