import React from 'react';
import './css/App.css';
import Editor from './Editor'
import Graph from './Graph'
import State from './state'
import { Parser, ASTPreprocessor, AstNode} from './ast/parser';
import {ASTCytoscapeTransformer} from './ast/ast-cytoscape-transformer';
import { SyntaxError } from './def/pegjs';
import { editor, MarkerSeverity } from 'monaco-editor';
import { createMarker } from './ast/ast-utils';

// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();
const preprocessors = new ASTPreprocessor();

class App extends React.Component<{}, {graph: any, markers: editor.IMarkerData[]}> {
  parser : Parser
  astTraces? : Map<string, AstNode>

  constructor(props : any) {
    super(props)
    this.parser = new Parser();

    this.state = {
      graph: [],
      markers: []
    }
  }

  render() {
    return (
      <div className="app">
        <div className="vsplit">
          <Editor markerData={this.state.markers}/>
        </div>
        <Graph graph={this.state.graph} onTapNode={this.onTapNode.bind(this)}/>
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

  onTapNode(nodeId : string) {
    if (this.astTraces) {
      if (this.astTraces.has(nodeId)) {
        let node = this.astTraces?.get(nodeId);
        console.log(node);
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
        const rawAst = this.parser.parse(value)
        const ast = preprocessors.process(rawAst);
        const cytoscapeGraph = astTransformer.tranformASTToCy(ast);
        // save traces of transformation
        this.astTraces = astTransformer.traces;
        
        this.setState({graph: cytoscapeGraph, markers: []})
      } catch (error) {
        let syntaxError = error as SyntaxError;
        // construct IMarkerData from peg.SyntaxError
        const marker = createMarker(syntaxError.location, syntaxError.message,
          "syntax.error", MarkerSeverity.Error);
        this.setState({markers: [marker]})

        throw error;
      }
    }
  }
}

export default App;
