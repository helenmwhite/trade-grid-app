import React from 'react';
import { TradeGrid } from './features/tradeGrid/TradeGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>GloboBank Trading</h2>
        <TradeGrid />
      </header>
    </div>
  );
}

export default App;
