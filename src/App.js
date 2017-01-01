import React, { Component } from 'react';
import belle from 'belle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <belle.Button>Belle Button</belle.Button>
      </div>
    );
  }
}

export default App;
