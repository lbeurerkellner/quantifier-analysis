import React from 'react';
import './css/action-popup.css';

import {GraphOperationCandidate, ForwardStepCandidate, GraphOperationType, BackwardStepCandidate} from "./instantiation-graph/operations"
import { instantiatedPath, TermNode, path, QuantifierInstantiationNode } from './instantiation-graph/instantiation-graph';
import { ExprNode } from './ast/parser';

export enum PopupContentType {
    InstantiationInfo = "INSTANTIATION_INFO",
    GraphOperations = "GRAPH_OPERATIONS"
}

export interface PopupContent {
    type : PopupContentType
}

export class InstantiationInfoPopupContent implements PopupContent {
    type = PopupContentType.InstantiationInfo;
    quantifierInstantiation : QuantifierInstantiationNode

    constructor(qi : QuantifierInstantiationNode) {
        this.quantifierInstantiation = qi;
    }
}

export class GraphOperationsPopupContent implements PopupContent {
    type = PopupContentType.GraphOperations;
    
    operationCandidates : GraphOperationCandidate[]

    constructor(ops : GraphOperationCandidate[]) {
        this.operationCandidates = ops;
    }
}

interface ActionPopupProps {
    anchorPoint? : {x : number, y : number}
    popupContent : PopupContent|null

    onApplyOperation? : (operation : GraphOperationCandidate) => void
}

class ActionPopup extends React.Component<ActionPopupProps, {}> {
    scrollTopAnchor? : HTMLElement
    popupElement? : HTMLElement|null

    onApplyAction(candidate : GraphOperationCandidate) {
        (this.props.onApplyOperation || ((a : any) => null))(candidate);
    }

    scrollToTop() {
        this.scrollTopAnchor?.scrollIntoView();
    }

    componentDidUpdate() {
        this.scrollToTop();

        // do actual popup positions when the total height of the popup is known
        if (this.props.anchorPoint && this.popupElement) {
            const estimatedHeight = this.popupElement!.offsetHeight;
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
            this.popupElement.style.top = anchorPoint.y + "px";
            this.popupElement.style.left = anchorPoint.x + "px";
        }
    }

    render() : React.ReactNode {
        if (this.props.anchorPoint && this.props.popupContent !== null) {
            return (
                <div className="action-popup" style={{"top": 0, "left": 0}} ref={ref => this.popupElement = ref}>
                    <div style={{ float:"left", clear: "both" }} ref={(el) => { this.scrollTopAnchor = el as HTMLElement; }}></div>
                    {this.renderPopupContent()}
                </div>  
            )
        } else {
            return (<div style={{display: "none"}}/>);
        }
    }

    renderPopupContent() {
        if(this.props.popupContent!.type === PopupContentType.GraphOperations) {
            const go = this.props.popupContent! as GraphOperationsPopupContent;
            return go.operationCandidates.map((c, idx) => {
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
            })
        } else if (this.props.popupContent!.type === PopupContentType.InstantiationInfo) {
            const infoContent = this.props.popupContent! as InstantiationInfoPopupContent;
            return (<ActionItem actions={[]} key={0}>
                <InstantiationInfoActionContent quantifierInstantiation={infoContent.quantifierInstantiation}/>
            </ActionItem>)
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

export const InstantiationInfoActionContent = (props : {quantifierInstantiation: QuantifierInstantiationNode}) => {
    const formula = props.quantifierInstantiation.formula;
    const formulaOffset = formula.location.start.offset
    const formulaLength = formula.location.end.offset - formulaOffset;
    const formulaString = formula.root?.inputText.substr(formulaOffset, formulaLength).trim();
    return (<div>
        <span className="code"><pre>{formulaString}</pre></span>
        Bindings:
        <span className="code"><pre>
        {getBindingDescription(props.quantifierInstantiation.bindings)}
        </pre></span>
        Blamed Terms:
        <span className="code"><pre>
        {Array.from(props.quantifierInstantiation.matched).map(term => instantiatedPath(term, false)).join(",")}
        </pre></span>
    </div>);
}

export default ActionPopup;