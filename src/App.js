import React from 'react';
import logo from './logo.svg';
import { TradeGrid } from './features/tradeGrid/TradeGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TradeGrid />
      </header>
    </div>
  );
}

export default App;
