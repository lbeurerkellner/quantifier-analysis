import React from 'react';
import './css/editor.css';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
  render() : React.ReactNode {
    return (
      <div className="editor">
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={"abc"}
          options={{}}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }

  editorDidMount(editor : any, monaco : any) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue : any, e : any) {
    console.log('onChange', newValue, e);
  }
}

export default Editor;
