import React, { Component } from 'react';
import belle from 'belle';
import { Button as RTButton } from 'react-toolbox/lib/button';

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
        <div><belle.Button>Belle Button</belle.Button></div>
		<div><RTButton label="React Toolbox Button"></RTButton></div>
      </div>
    );
  }
}

export default App;
