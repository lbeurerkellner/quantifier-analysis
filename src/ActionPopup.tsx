import React from 'react';
import './css/action-popup.css';

interface ActionPopupProps {
    anchorPoint? : {x : number, y : number}
}

class ActionPopup extends React.Component<ActionPopupProps, {content: string[]}> {
    render() : React.ReactNode {
        if (this.props.anchorPoint) {
            let anchorPoint = {
                x: this.props.anchorPoint.x > window.innerWidth - 310 ? this.props.anchorPoint.x - 310 : this.props.anchorPoint.x,
                y: this.props.anchorPoint.y > window.innerHeight - 180 ? this.props.anchorPoint.y - 190 : this.props.anchorPoint.y,
            }
            anchorPoint = {
                x: Math.max(0, Math.min(
                    this.props.anchorPoint.x - 320, 
                    window.innerWidth - 320)),
                y: Math.max(0, Math.min(
                    this.props.anchorPoint.y - 190, 
                    window.innerHeight - 190)),
            }

            return (
                <div className="action-popup" style={{"top": anchorPoint.y, "left": anchorPoint.x}}>
                    <ActionItem actions={[{title: "Apply Forward Step", action: () => console.log("Apply Forward Step")}]} >
                        <ForwardStepActionContent/>
                    </ActionItem>
                    <ActionItem actions={[{title: "Apply Forward Step", action: () => console.log("Apply Forward Step")}]} >
                        <ForwardStepActionContent/>
                    </ActionItem>
                </div>
            )
        } else {
            return (<div/>);
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
                <a className="action" key={idx} href="#" onClick={a.action}>{a.title}</a>
            )}
        </div>
        </div>);
    }
}

export const ForwardStepActionContent = (props : any) => (<div><span className="code">forall x, y {"{"}f(x), g(y){"}"} f(h(k(x))) = g(y);</span>
matches with binding
<span className="code">
    x = h(x)<br/>
    y = h(y)
</span></div>);

export default ActionPopup;