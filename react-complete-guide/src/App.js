import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	

	//Whereas props are set and passed by outside, state is changed by inside the component.
	// state is only provided by component and is a reserved word
	state = {
		person: [
			{ id: '1', name:"Max", age:28},
			{ id: '2', name:"Manu", age: 26},
			{ id: '3', name:"Stephanie", age: 27}
		],
		otherState: 'some other value',
		showPersons: false
	}

	nameChangeHandler = (event, id) => {

		const personIndex = this.state.person.findIndex(p => {
			return p.id === id;
		}); 

		const person = { ...this.state.person[personIndex] } ;
		person.name = event.target.value;  
		const persons = [...this.state.person];
		persons[personIndex] = person;

		this.setState({
			person: persons
		});
	}

	deletePersonHandler = (personIndex) => {
		//const person = this.state.person.slice();	// if you dont use slice it will use the actual array which is a bad practice
		// slice methods creates a new array and use the new one 
		// or you can use 
		// Always update the state in an unmutable fashion  - create a copy and then change
		const person = [...this.state.person]
		person.splice(personIndex, 1);
		this.setState({
			person: person
		}); 
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
 			showPersons: !doesShow
		});
	}

	render() {

		let persons = null;
		let btnClass = '';


		if(this.state.showPersons){
			persons = (
				<div>
					{
						this.state.person.map((per, index) => {
							return <ErrorBoundary key={per.id}>
								<Person 
									name={per.name} 
									age={per.age} 
									click={() => this.deletePersonHandler(index)} 
									key={per.id} 
									changed={(event) => this.nameChangeHandler(event, per.id)
								}/>
							</ErrorBoundary>
						}) 
					}
				</div>
			);

			btnClass = classes.Red; 
		}

		const assignedClasses = [];
		if (this.state.person.length <= 2){
			assignedClasses.push( classes.red ); // classes = red
		}

		if(this.state.person.length <= 1){
			assignedClasses.push( classes.bold ); // classes are red and bold
		}

		return (
			<div className={ classes.App }>
				<h1>Hi, I am a react app</h1>
				<p className={ assignedClasses.join(' ') }>This is really working.! Yes till now</p>
				
				<button 
				className = { btnClass }
				onClick={this.togglePersonHandler}>Toggle Person</button>  
				{persons}
			</div>
		);
	}
}

export default App;
