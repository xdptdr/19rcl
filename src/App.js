import React, { Component } from 'react';
import belle from 'belle';
import { Button as RTButton } from 'react-toolbox/lib/button';
import { Button as ElementalButton } from 'elemental' 
import { Button as RDButton } from 'react-desktop/macOs';
import { Button as RebassButton } from 'rebass';
import { Button as BootstrapButton} from 'react-bootstrap';

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
		<div><ElementalButton>Elemental UI Button</ElementalButton></div>
		<div><RDButton>React Desktop Button</RDButton></div>
		<div><RebassButton>Rebass Button</RebassButton></div>
		<div><BootstrapButton>Bootstrap Button</BootstrapButton></div>
      </div>
    );
  }
}

export default App;
