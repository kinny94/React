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
		
	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hi, I am a react app</h1>
				<p>This is really working!</p>
				
				<button
					style={ style} 
					onClick={this.togglePersonHandler}>Switch Name</button>
				
				<div>
					<Person 
						name={ this.state.person[0].name } 
						age={ this.state.person[0].age } 
					/>
					
					<Person 
						name={ this.state.person[1].name } 
						age={ this.state.person[1].age }
						click={ this.switchNameHandler.bind(this, 'Maximoffer')}
						change={ this.nameChangeHandler }
						>
							My Hobbies : Racing
					</Person>
					
					<Person 
						name={ this.state.person[2].name } 
						age={ this.state.person[2].age } 
					/>	
				</div>
			</div>
		);
	}
}

export default App;
