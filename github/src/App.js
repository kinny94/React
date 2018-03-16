import React, { Component } from 'react';
import Main from './components/Main';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<div className="Container">
				<Main  />
			</div>
		);
	}
}

export default App;
