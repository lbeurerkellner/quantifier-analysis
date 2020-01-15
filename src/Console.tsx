import React from 'react';
import './css/console.css';

declare global {
  interface Window { log: (msg : any) => void }
}

class Console extends React.Component<{}, {content: string[]}> {
  consoleEndAnchor? : HTMLElement
  
  constructor(prop : any) {
    super(prop);

    this.state = {
      content: ["Console opened " + new Date().toLocaleString()]
    }
  }

  componentDidMount() {
    window.log = (msg) => {
      let newContent = this.state.content;
      newContent.push("" + msg);
      this.setState({content: newContent})
      this.scrollToBottom();
    }
  }

  componentWillUnmount() {
    window.log = (msg) => {};
  }

  scrollToBottom() {
    this.consoleEndAnchor?.scrollIntoView();
  }
  
  render() : React.ReactNode {
    return (
      <div className="console">
        <h1>Console</h1>
        <div className="content">
          {this.state.content.map((line, idx) => 
            (<div key={"line"+idx} className="line">{line}</div>)
          )}
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.consoleEndAnchor = el as HTMLElement; }}>
        </div>
        </div>
      </div>
    );
  }
}

export default Console;
