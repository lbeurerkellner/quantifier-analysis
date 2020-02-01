import React from 'react';
import './css/action-popup.css';

import {GraphOperationCandidate, ForwardStepCandidate, GraphOperationType, BackwardStepCandidate} from "./instantiation-graph/operations"
import { instantiatedPath, TermNode, path } from './instantiation-graph/instantiation-graph';
import { ExprNode } from './ast/parser';

interface ActionPopupProps {
    anchorPoint? : {x : number, y : number}
    operationCandidates : GraphOperationCandidate[]

    onApplyOperation? : (operation : GraphOperationCandidate) => void
}

class ActionPopup extends React.Component<ActionPopupProps, {}> {
    scrollTopAnchor? : HTMLElement 

    onApplyAction(candidate : GraphOperationCandidate) {
        (this.props.onApplyOperation || ((a : any) => null))(candidate);
    }

    scrollToTop() {
        this.scrollTopAnchor?.scrollIntoView();
    }

    componentDidUpdate() {
        this.scrollToTop();
    }

    render() : React.ReactNode {
        if (this.props.anchorPoint && this.props.operationCandidates.length > 0) {
            const estimatedHeight = 320;
            let anchorPoint = {
                x: this.props.anchorPoint.x > window.innerWidth - 310 ? this.props.anchorPoint.x - 310 : this.props.anchorPoint.x,
                y: this.props.anchorPoint.y > window.innerHeight - estimatedHeight ? this.props.anchorPoint.y - estimatedHeight : this.props.anchorPoint.y,
            }
            anchorPoint = {
                x: Math.max(0, Math.min(
                    this.props.anchorPoint.x - 320, 
                    window.innerWidth - 320)),
                y: Math.max(0, Math.min(
                    this.props.anchorPoint.y, 
                    window.innerHeight - estimatedHeight)),
            }

            return (
                <div className="action-popup" style={{"top": anchorPoint.y, "left": anchorPoint.x}}>
                    <div style={{ float:"left", clear: "both" }} ref={(el) => { this.scrollTopAnchor = el as HTMLElement; }}></div>
                    {this.props.operationCandidates.map((c, idx) => {
                        if (c.type === GraphOperationType.FORWARD_STEP) {
                            const actions = [{title: "Apply Forward Step", action: this.onApplyAction.bind(this, c)}];
                            return (<ActionItem actions={actions} key={idx}>
                                <ForwardStepActionContent candidate={c as ForwardStepCandidate}/>
                            </ActionItem>)
                        } else {
                            const actions = [{title: "Apply Backward Step", action: this.onApplyAction.bind(this, c)}];
                            return (<ActionItem actions={actions} key={idx}>
                                <BackwardStepActionContent candidate={c as BackwardStepCandidate}/>
                            </ActionItem>)
                        }
                    })}
                </div>
            )
        } else {
            return (<div style={{display: "none"}}/>);
        }
    }
  }
  
interface ActionItemProps {
    actions : ({title : string, action: () => void})[]
}

export class ActionItem extends React.Component<ActionItemProps, {}> {
    render() { 
    return(<div className="action-item">
        <div className="content">
            {this.props.children}
        </div>
        <div className="actions">
            {this.props.actions.map((a, idx) => 
                <button className="action" key={idx} onClick={a.action} >
                    {a.title}
                </button>
            )}
        </div>
        </div>);
    }
}

function makeLocalName(globalName : string) {
    const components = globalName.split(".");
    return components[components.length - 1];
}

function getBindingDescription(binding : Map<string, TermNode>) {
    return Array.from(binding.entries())
        .map(e => makeLocalName(e[0]) + " -> " + instantiatedPath(e[1], false))
        .sort()
        .join("\n");
}

function getBodyBindingDescription(bodyBinding : Map<TermNode, ExprNode>) {
    return Array.from(bodyBinding.entries())
        .map(e => instantiatedPath(e[0], false) + " -> " + path(e[1] as any, new Map<string, TermNode>(), false))
        .sort()
        .join("\n");
}

export const BackwardStepActionContent = (props : {candidate: BackwardStepCandidate}) => {
    const formula = props.candidate.formula;
    const formulaOffset = formula.location.start.offset
    const formulaLength = formula.location.end.offset - formulaOffset;
    const formulaString = formula.root?.inputText.substr(formulaOffset, formulaLength).trim();
    return (<div>
        <span className="code"><pre>{formulaString}</pre></span>
        can be used to produce this term using graph replacements
        <span className="code"><pre>
        {getBodyBindingDescription(props.candidate.bodyBindings)}
        </pre></span>
    </div>);
}


export const ForwardStepActionContent = (props : {candidate: ForwardStepCandidate}) => {
    const formula = props.candidate.formula;
    const formulaOffset = formula.location.start.offset
    const formulaLength = formula.location.end.offset - formulaOffset;
    const formulaString = formula.root?.inputText.substr(formulaOffset, formulaLength).trim();
    return (<div>
        <span className="code"><pre>{formulaString}</pre></span>
        matches with binding
        <span className="code"><pre>
        {getBindingDescription(props.candidate.bindings)}
        </pre></span>
    </div>);
}

export default ActionPopup;