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
		],
		otherState: 'some other value',
		showPersons: false
	}

	switchNameHandler = (newName) => {
		this.setState({
			person: [
				{ name: newName, age:28},
				{ name:"Manu", age: 26},
				{ name:"Stephanie", age: 29}
			]
		});
	}

	nameChangeHandler = (event) => {
		this.setState({
			person: [
				{ name: 'Max', age: 30 },
				{ name: event.target.value, age: 31 },
				{ name: 'Stephanie', age: 33 }
			]
		})
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if(this.state.showPersons){
			persons = (
				<div>
					{
						this.state.person.map(per => {
							return <Person name={per.name} age={per.age}/>
						}) 
					}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I am a react app</h1>
				<p>This is really working!</p>
				
				<button style={ style} onClick={this.togglePersonHandler}>Toggle Person</button>
				{persons}
			</div>
		);
	}
}

export default App;
