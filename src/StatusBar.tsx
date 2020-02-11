import React, { ChangeEvent } from 'react';
import { Formula } from './ast/parser';
import './css/app.css';

interface StatusBarProps {
    isFresh : boolean
    isDirty : boolean
  }
  
export class StatusBar extends React.Component<StatusBarProps, {}> {
    render() {
      return (
        <div className="reset-graph-panel">
          {this.props.isDirty ? (
            this.props.isFresh ? 
            (<div className="message"></div>) :
            (<div className="message">Changes to the formula definitions only take effect in new graphs.</div>)
          ) : <div className="message"></div>}
        </div>
        )
    }
  }
  