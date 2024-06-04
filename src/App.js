import React from 'react';
import logo from './logo.svg';
import './App.css';
import { displayNotificationDirectly, getPermission } from './utils';

function App() {
  const sendNotif = () => {
    setInterval(displayNotificationDirectly, 5000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getPermission}>Get Permission</button>
        <button onClick={sendNotif}>Notify</button>
      </header>
    </div>
  );
}
// add

export default App;
