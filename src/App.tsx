import { editor, MarkerSeverity } from 'monaco-editor';
import React from 'react';
import { ASTCytoscapeTransformer } from './ast/ast-cytoscape-transformer';
import { createMarker, createMarkerFromValidationError } from './ast/ast-utils';
import { AstNode, Parser } from './ast/parser';
import { Validator } from './ast/validator';
import './css/App.css';
import { SyntaxError } from './def/pegjs';
import Editor from './Editor';
import Graph from './Graph';
import { InstantiationGraphCyTransformer } from './instantiation-graph/instantiation-graph-cy-transformer';
import * as GraphOperations from "./instantiation-graph/operations";
import State from './state';
import { TermNode } from './instantiation-graph/instantiation-graph';


// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();

interface AppState {
  astGraph: any[]
  traces : Map<string, AstNode>

  instantiationGraph : any[]
  instGraphTraces : Map<string, AstNode>
  
  markers: editor.IMarkerData[]
}

class App extends React.Component<{}, AppState> {
  parser : Parser
  astTraces? : Map<string, AstNode>

  constructor(props : any) {
    super(props)
    
    this.parser = new Parser();
    
    this.state = {
      astGraph: [],
      instantiationGraph: [],
      markers: [],
      traces: new Map<string, AstNode>(),
      instGraphTraces: new Map<string, AstNode>()
    }
  }

  // <Graph graph={this.state.astGraph} onTapNode={this.onTapNode.bind(this, "ast")} layout="breadthfirst"/>

  render() {
    return (
      <div className="app">
        <div className="vsplit">
          <Editor markerData={this.state.markers}/>
        </div>
        <Graph graph={this.state.instantiationGraph} onTapNode={this.onTapNode.bind(this, "inst")} layout="breadthfirst"/>
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

  onTapNode(graph : string, nodeId : string) {
    if (this.state.traces) {
      const traces = graph === "ast" ? this.state.traces : this.state.instGraphTraces;
      if (traces.has(nodeId)) {
        let node = traces?.get(nodeId);
        if (node) {
          // visualise trace links as INFO markers
          const marker = createMarker(node.location, "Node Location",
          "ast.trace.link", MarkerSeverity.Info);
          this.setState({markers: [marker]})
        }
      }
    }
  }

  onStateUpdate(key : string, value : any) {
    if (key === "editorContent") {
      try {
        const validator = new Validator();

        const ast = this.parser.parse(value)
        validator.validate(ast);
        const errors = validator.errors;
        const {graphDescription, traces} = astTransformer.transform(ast);

        this.setState({astGraph: graphDescription, traces: traces, markers: []})

        if (errors.length > 0) {
          this.setState({markers: errors.map(e => createMarkerFromValidationError(e))});
        } else {
          const formula = ast.formulas[0];
          const bindings = new Map<string, TermNode>();
          const instGraphNodes = [GraphOperations.instantiateFormula(formula, bindings)] //, GraphOperations.instantiateFormula(formula, bindings)];
          console.log(instGraphNodes);
          
          const {graphDescription: instGraphCyRepr,
            traces: instGraphTraces} = new InstantiationGraphCyTransformer().transform(instGraphNodes);
          
          this.setState({instantiationGraph: instGraphCyRepr, instGraphTraces: instGraphTraces});
        }
      } catch (error) {
        // construct IMarkerData from peg.SyntaxError
        let syntaxError = error as SyntaxError;
        
        if (typeof syntaxError.location !== "undefined") {
          const marker = createMarker(syntaxError.location, syntaxError.message,
            "syntax.error", MarkerSeverity.Error);
          
          this.setState({markers: [marker]})
        } else {
          console.error(error);
        }
      }
    }
  }
}

export default App;
