import React from 'react';
import './css/editor.css';
import MonacoEditor from 'react-monaco-editor';
import State from './state'
import {editor, languages} from "monaco-editor"

languages.register({
  id: "plain"
})

interface EditorProps {
  markerData : editor.IMarkerData[]
  decorations : editor.IModelDeltaDecoration[]
}

class Editor extends React.Component<EditorProps, {}> {
  public static defaultProps = {
    decorations: []
  }
  
  editorHandle : editor.ICodeEditor | null
  previousDecorationHandles : string[] = []

  constructor(props: any) {
    super(props);
    this.editorHandle = null;
  }

  render() : React.ReactNode {
    return (
      <div className="editor">
        <MonacoEditor
          language="javascript"
          theme="vs-light"
          value={State.get("editorContent") as string}
          options={{}}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount.bind(this)}
        />
      </div>
    );
  }

  editorDidMount(monacoEditor : any, monaco : any) {
    monacoEditor.focus();
    let content = State.get("editorContent") || "";
    State.store("editorContent", content);
    
    this.editorHandle = monacoEditor;
  }

  onChange(newValue : any, e : any) {
    State.store("editorContent", newValue);
  }

  componentDidUpdate(prevProps: EditorProps, prevState: {}, snapshot?: any) {
    if (this.editorHandle) {
      // update markers
      const model = this.editorHandle.getModel() as editor.ITextModel
      editor.setModelMarkers(model, "errors", this.props.markerData);
      editor.setModelLanguage(model, "plain")
      this.editorHandle.setModel(model);

      // update decorations
      this.previousDecorationHandles = this.editorHandle.deltaDecorations(
        this.previousDecorationHandles, this.props.decorations);
    }
  }
}

export default Editor;
