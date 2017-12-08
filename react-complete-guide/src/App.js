import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
	

	//Whereas props are set and passed by outside, state is changed by inside the component.
	// state is only provided by component and is a reserved word
	state = {
		person: [
			{ name:"Max", age:28},
			{ name:"Manu", age: 26},
			{ name:"Stephanie", age: 27}
		]
	}

	switchNameHandler = () => {
		this.setState({
			person: [
				{ name:"Maximoff", age:28},
				{ name:"Manu", age: 26},
				{ name:"Stephanie", age: 29}
			]
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Hi, I am a react app</h1>
				<p>This is really working!</p>

				<button onClick={ this.switchNameHandler }>Switch Name</button>

				<Person name={ this.state.person[0].name } age={ this.state.person[0].age } />
				<Person name={ this.state.person[1].name } age={ this.state.person[1].age }>My Hobbies : Racing</Person>
				<Person name={ this.state.person[2].name } age={ this.state.person[2].age } />	

			</div>
		);
	}
}

export default App;
