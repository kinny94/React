import React, { Component } from 'react';
import Main from './components/Main';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					<Main  />
				</p>
			</div>
		);
	}
}

export default App;
