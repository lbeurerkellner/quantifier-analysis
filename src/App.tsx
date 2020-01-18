import React from 'react';
import './css/App.css';
import Editor from './Editor'
import Graph from './Graph'
import State from './state'
import { Parser, AstNode} from './ast/parser';
import { ASTCytoscapeTransformer } from './ast/ast-cytoscape-transformer';
import { SyntaxError } from './def/pegjs';
import { editor, MarkerSeverity } from 'monaco-editor';
import { createMarker, createMarkerFromValidationError } from './ast/ast-utils';
import { Validator } from './ast/validator';

// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();

class App extends React.Component<{}, {graph: any, markers: editor.IMarkerData[], traces : Map<string, AstNode>}> {
  parser : Parser
  astTraces? : Map<string, AstNode>

  constructor(props : any) {
    super(props)
    
    this.parser = new Parser();
    
    this.state = {
      graph: [],
      markers: [],
      traces: new Map<string, AstNode>()
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
    if (this.state.traces) {
      console.log(nodeId);
      if (this.state.traces.has(nodeId)) {
        let node = this.state.traces?.get(nodeId);
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
        const validator = new Validator();

        const ast = this.parser.parse(value)
        validator.validate(ast);
        const errors = validator.errors;
        const {graphDescription, traces} = astTransformer.transform(ast);

        console.log(ast);
        this.setState({graph: graphDescription, traces: traces, markers: []})

        if (errors.length > 0) {
          this.setState({markers: errors.map(e => createMarkerFromValidationError(e))});
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
