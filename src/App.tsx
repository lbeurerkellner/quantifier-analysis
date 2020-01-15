import React from 'react';
import './css/App.css';
import Editor from './Editor'
import Graph from './Graph'
import State from './state'
import { Parser, ASTPreprocessor } from './ast/parser';
import Console from './Console';

class App extends React.Component {
  parser : Parser

  constructor(props : any) {
    super(props)
    this.parser = new Parser();
  }

  render() {
    return (
      <div className="App">
        <div className="vsplit">
          <Editor/>
          <Console/>
        </div>
        <Graph/>
      </div>
    );
  }

  componentDidMount() {
    State.register(this.onStateUpdate.bind(this));
  }

  componentWillUnmount() {
    State.unregister(this.onStateUpdate.bind(this));
  }

  onStateUpdate(key : string, value : any) {
    if (key === "editorContent") {
      try {
        console.log("Parsing...");
        const rawAst = this.parser.parse(value)
        const preprocessors = new ASTPreprocessor();
        const ast = preprocessors.process(rawAst);
        window.log("AST: " + JSON.stringify(ast));
        console.log("Processed: ", ast.formulas[0].body);
        //console.log(rawAst.formulas[0].body);
      } catch (error) {
        window.log("Failed to parse:" + error);
        throw error;
      }
    }
  }
}

export default App;
