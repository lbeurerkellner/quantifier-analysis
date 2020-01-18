import React from 'react';
import './css/App.css';
import Editor from './Editor'
import Graph from './Graph'
import State from './state'
import { Parser, AstNode, FunctionApplicationExpr, Variable, Formula} from './ast/parser';
import { ASTCytoscapeTransformer } from './ast/ast-cytoscape-transformer';
import { SyntaxError } from './def/pegjs';
import { editor, MarkerSeverity } from 'monaco-editor';
import { createMarker, createMarkerFromValidationError } from './ast/ast-utils';
import { Validator } from './ast/validator';
import { QuantifierInstantiationNode, FunctionApplicationNode, VariableNode, InstantiationNodeType } from './instantiation-graph/instantiation-graph';
import { InstantiationGraphCyTransformer } from './instantiation-graph/instantiation-graph-cy-transformer';


// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();

interface AppState {
  astGraph: any[]
  instantiationGraph : any[]
  markers: editor.IMarkerData[]
  traces : Map<string, AstNode>
}

class App extends React.Component<{}, AppState> {
  parser : Parser
  astTraces? : Map<string, AstNode>

  constructor(props : any) {
    super(props)
    
    this.parser = new Parser();
    
    this.state = {
      astGraph: [],
      instantiationGraph: new InstantiationGraphCyTransformer().transform(createDummyIG()).graphDescription,
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
        <Graph graph={this.state.astGraph} onTapNode={this.onTapNode.bind(this)} layout="breadthfirst"/>
        <Graph graph={this.state.instantiationGraph} onTapNode={this.onTapNode.bind(this)} layout="breadthfirst"/>
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
        this.setState({astGraph: graphDescription, traces: traces, markers: []})

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

function createDummyIG() : QuantifierInstantiationNode[] {
  let f_of_x : FunctionApplicationNode = {
    arguments: [
      {
        name: "x",
        equivalenceClass: [],
        type: InstantiationNodeType.VARIABLE,
        variable: null as unknown as Variable
      } as VariableNode
    ],
    equivalenceClass: [],
    functionApplication: {
      args: [],
      name: "f"
    } as unknown as FunctionApplicationExpr,
    instantiator: [],
    matches: [],
    type: InstantiationNodeType.FUNC_APPL
  }

  let g_of_x : FunctionApplicationNode = {
    arguments: [],
    equivalenceClass: [],
    functionApplication: {
      args: [],
      name: "g"
    } as unknown as FunctionApplicationExpr,
    instantiator: [],
    matches: [],
    type: InstantiationNodeType.FUNC_APPL
  }
  
  let n1 : QuantifierInstantiationNode = {
    name: "a1:F1",
    type: InstantiationNodeType.QUANTIFIER,
    formula: null as unknown as Formula,
    matched: [
      g_of_x
    ],
    instantiated: [
      f_of_x
    ]
  }
  f_of_x.instantiator.push(n1);
  g_of_x.matches.push(n1);
  g_of_x.arguments.push(f_of_x.arguments[0]);

  return [
    n1
  ];
}

export default App;
