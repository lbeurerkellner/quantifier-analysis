import { editor, MarkerSeverity } from 'monaco-editor';
import React from 'react';
import { ASTCytoscapeTransformer } from './ast/ast-cytoscape-transformer';
import { createMarker, createMarkerFromValidationError } from './ast/ast-utils';
import { AstNode, Parser, Root } from './ast/parser';
import { Validator } from './ast/validator';
import './css/app.css';
import { SyntaxError } from './def/pegjs';
import Editor from './Editor';
import Graph from './Graph';
import { InstantiationGraph, TermNode } from './instantiation-graph/instantiation-graph';
import { forwardStep, completeBindings, BackwardStepCandidate, backwardStep } from './instantiation-graph/operations';
import { InstantiationGraphCyTransformer } from './instantiation-graph/instantiation-graph-cy-transformer';
import State from './state';
import ActionPopup from './ActionPopup';
import { GraphOperationCandidate, GraphOperationType, ForwardStepCandidate } from './instantiation-graph/operations';


// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();

interface AppState {
  ast : Root|null
  astGraph: any[]
  traces : Map<string, AstNode>

  instantiationGraph : InstantiationGraph|null
  instantiationCyGraph : any[]
  instGraphTraces : Map<string, AstNode>
  
  markers: editor.IMarkerData[]

  popupAnchor : {x : number, y : number}|null
  operationCandidates : GraphOperationCandidate[]
}

class App extends React.Component<{}, AppState> {
  parser : Parser
  astTraces? : Map<string, AstNode>
  graphViewOffsetLeft : number = 0

  constructor(props : any) {
    super(props)
    
    this.parser = new Parser();
    
    this.state = {
      ast: null,
      astGraph: [],
      traces: new Map<string, AstNode>(),
      
      instantiationGraph: null,
      instantiationCyGraph: [],
      instGraphTraces: new Map<string, AstNode>(),
      
      markers: [],
      
      popupAnchor: null,
      operationCandidates: []
    }
  }

  // <Graph graph={this.state.astGraph} onTapNode={this.onTapNode.bind(this, "ast")} layout="breadthfirst"/>

  render() {
    return (
      <div className="app">
        <Editor markerData={this.state.markers}/>
        <Graph 
          graph={this.state.instantiationCyGraph} 
          onTapNode={this.onTapNode.bind(this, "inst")}
          onSecondaryTapNode={this.onSecondaryTapNode.bind(this, "inst")} 
          onCanvasMove={this.onGraphCanvasMove.bind(this)}
          layout="breadthfirst"
          ref={ref => {this.graphViewOffsetLeft = ref?.graphContainer?.offsetLeft || 0;}}/>
        <ActionPopup 
          anchorPoint={this.state.popupAnchor || undefined} 
          operationCandidates={this.state.operationCandidates}
          onApplyOperation={this.onApplyGraphOperation.bind(this)}
          />
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

  onGraphCanvasMove() {
    this.setState({popupAnchor: null});
  }

  onSecondaryTapNode(graph : string, nodeId : string, target : any) {
    if (target.data("graph-operation-candidates")) {
      const candidates = target.data("graph-operation-candidates");
      if (candidates.length > 0) {
        let pos = target.renderedPosition();
        pos = {x: this.graphViewOffsetLeft + pos.x, y: pos.y};
        this.setState({popupAnchor: pos, operationCandidates: candidates});
      }
    }
  }

  onApplyGraphOperation(operation : GraphOperationCandidate) {
    if (operation.type === GraphOperationType.FORWARD_STEP) {
      const fsc = operation as ForwardStepCandidate;
      forwardStep(this.state.instantiationGraph!, fsc.formula, fsc.bindings);
        
      if (this.state.ast) {
        this.setState({
          instantiationGraph: this.state.instantiationGraph,
            ...this.updateGraphRepresentation(this.state.instantiationGraph!, this.state.ast!)
        })
        console.log(this.state.instantiationGraph?.entryNodes);
      } else {
        throw new Error("Illegal Operation: Cannot perform a forward step if no AST (list of formula) is available.");
      }
    } else if(operation.type === GraphOperationType.BACKWARD_STEP) {
      const bsc = operation as BackwardStepCandidate;
      backwardStep(this.state.instantiationGraph!, bsc.formula, bsc.bodyBindings);

      if (this.state.ast) {
        this.setState({
          instantiationGraph: this.state.instantiationGraph,
            ...this.updateGraphRepresentation(this.state.instantiationGraph!, this.state.ast!)
        })
        console.log(this.state.instantiationGraph?.entryNodes);
      } else {
        throw new Error("Illegal Operation: Cannot perform a forward step if no AST (list of formula) is available.");
      }
    } else {
      console.error("Graph operation ", operation.type, " cannot be handled.");
    }
  }

  onTapNode(graph : string, nodeId : string, target : any) {
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

  updateGraphRepresentation(instantiationGraph : InstantiationGraph, ast : Root) {
    const {graphDescription: instGraphCyRepr,
      traces: instGraphTraces} = new InstantiationGraphCyTransformer().transform(instantiationGraph);
    
    return {instantiationCyGraph: instGraphCyRepr, instGraphTraces: instGraphTraces}
  }

  onStateUpdate(key : string, value : any) {
    if (key === "editorContent") {
      try {
        const validator = new Validator();

        const ast = this.parser.parse(value)
        validator.validate(ast);
        const errors = validator.errors;
        const {graphDescription, traces} = astTransformer.transform(ast);

        this.setState({ast: ast, astGraph: graphDescription, traces: traces, markers: []})

        if (errors.length > 0) {
          this.setState({markers: errors.map(e => createMarkerFromValidationError(e))});
        } else {
          const formula = ast.formulas[0];
          const bindings = new Map<string, TermNode>();
          const instantiationGraph : InstantiationGraph = new InstantiationGraph(ast.formulas);
          completeBindings(formula, bindings);
          instantiationGraph.instantiateFormula(formula, bindings);

          this.setState({
            instantiationGraph: instantiationGraph,
            ...this.updateGraphRepresentation(instantiationGraph, ast)
          });
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
