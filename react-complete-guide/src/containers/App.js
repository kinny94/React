import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilary';
import withClass2 from '../hoc/WithClass2';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	
	constructor(props){
		super(props);
		console.log("[App.js] Inside contructor", props);
		this.state = {
			person: [
				{ id: '1', name:"Max", age:28},
				{ id: '2', name:"Manu", age: 26},
				{ id: '3', name:"Stephanie", age: 27}
			],
			otherState: 'some other value',
			showPersons: false,
			toggelClicked: 0
		}
	}

	componentWillMount(){
		console.log('[App.js] Inside Componenet Will mount1!');
	}

	componentDidMount(){
		console.log('[App.js] Inside ComponentDidMount()');
	}

	shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
        //return true; // false will stop the update
		return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
	}

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }

	//Whereas props are set and passed by outside, state is changed by inside the component.
	// state is only provided by component and is a reserved word

	nameChangeHandler = (event, id) => {

		// Create as less functional components as you can. Because these components has a clear responsibility - 
		// They are only responsible for presenting something
		// They mainly contain code to display jsx and their logic
		 
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
		/*
			This works but The following method is the incorrect way of doing that
				this.setState({
				showPersons: !doesShow,
				toggelClicked: this.state.toggelClicked + 1
			});
		*/

		// This is the best way to change to state to rely on the previou state
		this.setState((prevState, props) => {
			return {
				showPersons: !doesShow,
				toggelClicked: prevState.toggelClicked + 1
			}
		});
	}

	render() {

		console.log('[App.js] inside render!');
		let persons = null;

		if(this.state.showPersons){
			persons = <Persons 
				persons={this.state.person } 
				clicked={ this.deletePersonHandler }
				changed = { this.nameChangeHandler } 
			/>
		}

		return (
			<Aux>
				<button onClick={ () => {this.setState({showPersons: true})}}>Show Persons</button>
				<Cockpit 
					showPersons={this.state.showPersons}
					person={this.state.person} 
					clicked={ this .togglePersonHandler }
				/>
				{persons}
			</Aux>	
		);
	}
}

export default withClass2(App, classes.App);
