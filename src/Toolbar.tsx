import React, { ChangeEvent } from 'react';
import { Formula } from './ast/parser';
import './css/app.css';

interface ToolbarProps {
    isFresh : boolean
    isDirty : boolean
    onReset : (formula : Formula) => void
  
    formulas : Formula[]
  }
  
export class Toolbar extends React.Component<ToolbarProps, {selectedFormula : number}> {
    constructor(props : any) {
      super(props);
      this.state = {
        selectedFormula: 0
      };
    }
  
    onChangeFormulaSelection(event : ChangeEvent) {
      //this.setState({
        //selectedFormula: this.props.formulas[parseInt(event.target.nodeValue)]
      //})
      let updatedFormulaIndex = parseInt((event.target as any).value);
      if (updatedFormulaIndex >= 0 && updatedFormulaIndex < this.props.formulas.length) {
        this.setState({selectedFormula: updatedFormulaIndex});
      }
    }
  
    render() {
      return (
        <div className="reset-graph-panel">
          {this.props.isDirty ? (
            this.props.isFresh ? 
            (<div className="message"></div>) :
            (<div className="message">Changes to the formula definitions only take effect in new graphs.</div>)
          ) : <div className="message"></div>}
          
          <div className="controls">
          {this.renderFormulaSelect()}
            <button onClick={() => this.props.onReset(this.props.formulas[this.state.selectedFormula])}>
                {this.props.isFresh ? "New Graph" : "Reset Graph"}
            </button>
          </div>
        </div>
        )
    }
  
    renderFormulaSelect() {
      return <select onChange={this.onChangeFormulaSelection.bind(this)} value={this.state.selectedFormula}>
      {this.props.formulas.map((f, idx) => {
        const formulaOffset = f.location.start.offset
        const formulaLength = f.location.end.offset - formulaOffset;
        const formulaString = f.root?.inputText.substr(formulaOffset, formulaLength).trim();
        return (<option key={idx} value={idx}>{formulaString}</option>);
      })}
    </select>;
    }
  }
  