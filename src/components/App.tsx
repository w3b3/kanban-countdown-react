import React from 'react';
import './App.css';
import Column from "./Column/Column";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Countdown app</h1>
      <Column name='red'>
        <h3>Child</h3>
      </Column>
    </div>
  );
};

export default App;
