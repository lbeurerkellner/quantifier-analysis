import React, { ChangeEvent } from 'react';
import './css/toolbar.css';
import { Formula } from './ast/parser';

interface ToolbarProps {
    onReset : (formula : Formula) => void
    formulas : Formula[]

    isFresh : boolean
    graphDotEncoded : string
}

interface ToolbarState {
  popupVisible : boolean  
  popupOffset : number
  
  selectedFormula : number
}
  
export class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
    constructor(props : any) {
        super(props);
        this.state = {
          selectedFormula: 0,
          popupVisible : false,
          popupOffset : 100
        };
      }
    
    render() {
        return <div className="toolbar">
            <button 
                className="primary toolbar-button" 
                onClick={() => this.props.onReset(this.props.formulas[this.state.selectedFormula])}>
                {this.props.isFresh ? "Create Graph" : "Reset Graph"}
            </button>
            <span style={{paddingLeft: "2pt", paddingRight: "2pt"}}>with</span>
            {this.renderFormulaSelect()}
            <div className="separator">
              {window.location.host.startsWith("localhost:") ? <div className="devbuild">Local Build</div> : ""}
            </div>
            <button 
              className="toolbar-button" 
              disabled={this.props.graphDotEncoded.length === 0}
              onClick={this.onTapExportAsDot.bind(this)}>
                Export as .dot
            </button>
            <button className="toolbar-button" onClick={() => window.open("help.html", "blank")}>Help</button>
            
            {this.state.popupVisible ? <div 
              className="toolbar-popup"
              style={{left: this.state.popupOffset}}
            ><ExportPopupContent 
              onClose={() => this.setState({popupVisible: false})}
              graphDotEncoded={this.props.graphDotEncoded}
            /></div> : <div/>}
        </div>
    }
    // <button>Export as .png</button>

    onTapExportAsDot(event : any) {
      const target = event.nativeEvent.target;
      this.setState({
        popupVisible: true,
        popupOffset: target.offsetLeft - 110 - (target.offsetWidth / 2.0)
      })
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

const ExportPopupContent = (props : {graphDotEncoded : string, onClose: () => void}) => {
  return (<div className="content">
      <textarea 
        disabled
        onClick={(e) => (e.nativeEvent.target as any).selectAll()}
        value={props.graphDotEncoded}
      />
      Recommended GraphViz command-line options: "dot -Kneato -n file.dot -Tpdf".
      <button onClick={props.onClose}>Done</button>
  </div>);
}