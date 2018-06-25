import React, { Component } from 'react';
import madspout from '../madslibs-pout.png';
import './App.css';
import Madslibs from './Madslibs/Madslibs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={madspout} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Madslibs!</h1>
        </header>
        <Madslibs />
      </div>
    );
  }
}

export default App;
