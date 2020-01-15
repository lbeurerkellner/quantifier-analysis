import React from 'react';
import './css/editor.css';
import MonacoEditor from 'react-monaco-editor';
import State from './state'

class Editor extends React.Component {
  render() : React.ReactNode {
    return (
      <div className="editor">
        <MonacoEditor
          language="javascript"
          theme="vs-light"
          value={State.get("editorContent") as string}
          options={{}}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }

  editorDidMount(editor : any, monaco : any) {
    editor.focus();
    let content = State.get("editorContent") || "";
    State.store("editorContent", content);
  }
  onChange(newValue : any, e : any) {
    State.store("editorContent", newValue);
  }
}

export default Editor;
