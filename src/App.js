import React, { Component } from 'react';
import madspout from './madslibs-pout.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={madspout} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Madslibs</h1>
        </header>
        <p className="App-intro">
          Fill the list below to get your Madslibs!
        </p>
      </div>
    );
  }
}

export default App;
