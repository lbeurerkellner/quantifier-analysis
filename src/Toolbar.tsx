import React, { ChangeEvent } from 'react';
import './css/toolbar.css';
import { Formula } from './ast/parser';

interface ToolbarProps {
    onReset : (formula : Formula) => void
    formulas : Formula[]

    isFresh : boolean
}
  
export class Toolbar extends React.Component<ToolbarProps, {selectedFormula: number}> {
    constructor(props : any) {
        super(props);
        this.state = {
          selectedFormula: 0
        };
      }
    
    render() {
        return <div className="toolbar">
            <button 
                className="primary" 
                onClick={() => this.props.onReset(this.props.formulas[this.state.selectedFormula])}>
                {this.props.isFresh ? "Create Graph" : "Reset Graph"}
            </button>
            {this.renderFormulaSelect()}
            <div style={{flex: "1"}}/>
            <button onClick={() => window.open("help.html", "blank")}>Help</button>
        </div>
    }
    // <button>Export as .png</button>

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


    onChangeFormulaSelection(event : ChangeEvent) {
        //this.setState({
          //selectedFormula: this.props.formulas[parseInt(event.target.nodeValue)]
        //})
        let updatedFormulaIndex = parseInt((event.target as any).value);
        if (updatedFormulaIndex >= 0 && updatedFormulaIndex < this.props.formulas.length) {
          this.setState({selectedFormula: updatedFormulaIndex});
        }
      }
}