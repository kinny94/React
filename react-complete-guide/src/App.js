import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi, I am a react app</h1>
				<p>This is really working!</p>
				<Person name="Max" age="28"/>
				<Person name="Manu" age="19">My Hobbies : Racing</Person>
				<Person name="Stephanie" age="27"/>	
			</div>
		);
	}
}

export default App;
