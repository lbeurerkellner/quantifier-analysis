import { editor, MarkerSeverity, Range } from 'monaco-editor';
import React from 'react';
import ActionPopup, { GraphOperationsPopupContent, InstantiationInfoPopupContent, PopupContent } from './ActionPopup';
import { ASTCytoscapeTransformer } from './ast/ast-cytoscape-transformer';
import { createMarker, createMarkerFromValidationError } from './ast/ast-utils';
import { AstNode, Formula, Parser, Root } from './ast/parser';
import { Validator } from './ast/validator';
import './css/app.css';
import { SyntaxError } from './def/pegjs';
import Editor from './Editor';
import Graph from './Graph';
import { InstantiationGraph, InstantiationNodeType, QuantifierInstantiationNode, TermNode } from './instantiation-graph/instantiation-graph';
import { InstantiationGraphCyTransformer } from './instantiation-graph/instantiation-graph-cy-transformer';
import { InstantiationGraphDotTransformer } from './instantiation-graph/instantiation-graph-dot-transformer';
import { InstantiationGraphLayout, NodePosition } from './instantiation-graph/instantiation-graph-layout';
import { backwardStep, BackwardStepCandidate, completeBindings, forwardStep, ForwardStepCandidate, GraphOperationCandidate, GraphOperationType } from './instantiation-graph/operations';
import State from './state';
import { StatusBar } from "./StatusBar";
import { Toolbar } from './Toolbar';


// parser components and transformers
const astTransformer = new ASTCytoscapeTransformer();
// simple hash function to compute string hashes
const strHasher = (s : string) : string => { return "" + s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0) };

interface AppState {
  ast : Root|null
  astGraph: any[]
  traces : Map<string, AstNode>

  instantiationGraph : InstantiationGraph|null
  layout : InstantiationGraphLayout|null,
  instantiationCyGraph : any[]
  instantiationDotGraph : string
  instGraphTraces : Map<string, AstNode>
  // ast inputText hash based on which the current
  // graph has been generated
  graphHash : string

  editorDecorations: editor.IModelDeltaDecoration[]
  markers: editor.IMarkerData[]

  popupAnchor : {x : number, y : number}|null
  popupContent : PopupContent|null
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
      layout: null,
      instantiationCyGraph: [],
      instantiationDotGraph: "",
      instGraphTraces: new Map<string, AstNode>(),
      graphHash : "",
      
      editorDecorations: [],
      markers: [],
      
      popupAnchor: null,
      popupContent: null
    }
  }

  // <Graph graph={this.state.astGraph} onTapNode={this.onTapNode.bind(this, "ast")} layout="breadthfirst"/>

  render() {
    return (
      <div className="app">
        <Toolbar
          isFresh={this.state.instantiationCyGraph.length === 0}
          formulas={this.state.ast?.formulas ?? []}
          onReset={this.initialiseGraph.bind(this)}
          graphDotEncoded={this.state.instantiationDotGraph}
        />
        <div className="content">
          <div className="editor-pane">
            <Editor markerData={this.state.markers} decorations={this.state.editorDecorations}/>
            <StatusBar isFresh={this.state.instantiationCyGraph.length === 0}
              isDirty={this.state.markers.length === 0 && this.state.graphHash !== strHasher(this.state.ast?.inputText ?? "")}
            />
          </div>
          <Graph 
            graphHash={this.state.graphHash}
            graph={this.state.instantiationCyGraph} 
            onTapNode={this.onTapNode.bind(this, "inst")}
            onSecondaryTapNode={this.onSecondaryTapNode.bind(this, "inst")} 
            onCanvasMove={this.onGraphCanvasMove.bind(this)}
            onNodePositionChange={this.onNodePositionChange.bind(this)}
            layout="preset"
            ref={ref => {this.graphViewOffsetLeft = ref?.graphContainer?.offsetLeft || 0;}}/>
          <ActionPopup 
            anchorPoint={this.state.popupAnchor || undefined} 
            popupContent={this.state.popupContent}
            onApplyOperation={this.onApplyGraphOperation.bind(this)}
          />
        </div>
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

  // TODO: not only secondary taps only, also triggered on regular node taps
  onSecondaryTapNode(graph : string, nodeId : string, target : any) {
    if (target.data("graph-operation-candidates")) {
      const candidates = target.data("graph-operation-candidates");
      if (candidates.length > 0) {
        let pos = target.renderedPosition();
        pos = {x: this.graphViewOffsetLeft + pos.x, y: pos.y};
        this.setState({
          popupAnchor: pos, 
          popupContent: new GraphOperationsPopupContent(candidates)
        });
      }
    } 
    if (target.data("instantiationNode")) {
      const node = target.data("instantiationNode");

      if (node.type === InstantiationNodeType.QUANTIFIER) {
        const qi = node as QuantifierInstantiationNode;
        let pos = target.renderedPosition();
        pos = {x: this.graphViewOffsetLeft + pos.x, y: pos.y};
        this.setState({
          popupAnchor: pos, 
          popupContent: new InstantiationInfoPopupContent(qi)
        });
      }
    }
  }

  onApplyGraphOperation(operation : GraphOperationCandidate) {
    if (operation.type === GraphOperationType.FORWARD_STEP) {
      const fsc = operation as ForwardStepCandidate;
      forwardStep(this.state.instantiationGraph!, fsc.formula, fsc.existingTriggerTerms, fsc.bindings);

      if (this.state.ast) {
        // update layout
        this.state.layout!.processDelta(this.state.instantiationGraph!);
        // update state
        this.setState({
          instantiationGraph: this.state.instantiationGraph,
            ...this.updateGraphRepresentation(this.state.instantiationGraph!, 
              this.state.layout!, this.state.ast!)
        })
      } else {
        throw new Error("Illegal Operation: Cannot perform a forward step if no AST (list of formula) is available.");
      }
    } else if(operation.type === GraphOperationType.BACKWARD_STEP) {
      const bsc = operation as BackwardStepCandidate;
      backwardStep(this.state.instantiationGraph!, bsc.formula, bsc.bodyBindings);

      if (this.state.ast) {
        // update layout
        this.state.layout!.processDelta(this.state.instantiationGraph!);
        // update state
        this.setState({
          instantiationGraph: this.state.instantiationGraph,
            ...this.updateGraphRepresentation(this.state.instantiationGraph!, 
              this.state.layout!, this.state.ast!)
        })
      } else {
        throw new Error("Illegal Operation: Cannot perform a forward step if no AST (list of formula) is available.");
      }
    } else {
      console.error("Graph operation ", operation.type, " cannot be handled.");
    }

    // hide action popup
    this.setState({popupAnchor: null})
  }

  onTapNode(graph : string, nodeId : string, target : any) {
    // highlight corresponding AST/editor text when an instantiation
    // node is tapped in the graph
    if (this.state.traces) {
      const traces = graph === "ast" ? this.state.traces : this.state.instGraphTraces;
      if (traces.has(nodeId)) {
        let node = traces?.get(nodeId);
        if (node) {
          // visualise trace links as editor decorations
          this.setState({editorDecorations: [{
              range: new Range(node.location.start.line, 
                node.location.start.column,
                node.location.end.line, 
                node.location.end.column),
              options: { inlineClassName: "trace-link-line-decoration" }
            }]})
        }
      }
    }
  }

  onNodePositionChange(node : any, position : NodePosition) {
    // register user changes of node positions with the 
    // used layout, to make sure user position changes are not
    // done when evolving through forward/backward steps
    const iNode = node.data("instantiationNode");
    if (iNode && this.state.layout) {
      this.state.layout?.updatePosition(iNode, position);
      this.setState({
        instantiationDotGraph: new InstantiationGraphDotTransformer().transform(this.state.instantiationCyGraph)
      })
    }
  }

  updateGraphRepresentation(instantiationGraph : InstantiationGraph, layout : InstantiationGraphLayout, ast : Root) {
    const {graphDescription: instGraphCyRepr,
      traces: instGraphTraces} = new InstantiationGraphCyTransformer().transform(instantiationGraph, layout);
    const dotEncoded = new InstantiationGraphDotTransformer().transform(instGraphCyRepr);
    
    return {
      instantiationCyGraph: instGraphCyRepr, 
      instGraphTraces: instGraphTraces,
      instantiationDotGraph: dotEncoded
    }
  }

  onStateUpdate(key : string, value : any) {
    // invoked whenever the editor content changes
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

  initialiseGraph(formula : Formula) {
    if (!this.state.ast) {
      return;
    }
    const bindings = new Map<string, TermNode>();
    const instantiationGraph : InstantiationGraph = new InstantiationGraph(this.state.ast.formulas);
    const layout = new InstantiationGraphLayout();

    completeBindings(formula, bindings);
    instantiationGraph.instantiateFormula(formula, bindings);

    // compute initial layout
    layout.processDelta(instantiationGraph);

    this.setState({
      instantiationGraph: instantiationGraph,
      layout: layout,
      ...this.updateGraphRepresentation(instantiationGraph, layout, this.state.ast),
      graphHash: strHasher(this.state.ast?.inputText ?? "")
    });
  }
}

export default App;
