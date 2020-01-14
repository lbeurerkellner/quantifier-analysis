import React from 'react';
import './css/App.css';
import Editor from './Editor'
import Graph from './Graph'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header"/>
      <Editor/>
      <Graph/>
    </div>
  );
}

export default App;
