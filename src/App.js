import React, { Component } from 'react';
import belle from 'belle';
import { Button as RTButton } from 'react-toolbox/lib/button';
import { Button as ElementalButton } from 'elemental' 
import { Button as RDButton } from 'react-desktop/macOs';
import { Button as RebassButton } from 'rebass';
import { Button as BootstrapButton} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton  from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropdownList from 'react-widgets/lib/DropdownList';
import { Button as MuiButton } from 'muicss/react';

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
		<div>
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<RaisedButton label="Material UI Button" />
			</MuiThemeProvider>
		</div>
		<div><DropdownList data={['react-widgets','orange','red','blue']} /></div>
		<div><MuiButton >MUI Button</MuiButton></div>
      </div>
    );
  }
}

export default App;
