import React from 'react';
import logo from './logo.svg';
import './App.css';
import { displayNotificationDirectly, getPermission } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getPermission}>Get Permission</button>
        <button onClick={displayNotificationDirectly}>Notify</button>
      </header>
    </div>
  );
}

export default App;
