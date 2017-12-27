import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props){
		super(props);
		console.log("[Persons.js] Inside contructor", props);
	}

	componentWillMount(){
		console.log('[Persons.js] Inside Componenet Will mount1!');
	}

	componentDidMount(){
		console.log('[Persons.js] Inside ComponentDidMount()');
    }
    

    render(){

        console.log('[Persons.js] Inside render()'); 
        return this.props.persons.map((per, index) => {
            return <Person
                click={ () => this.props.clicked(index)}
                name = {per.name}
                age = {per.age}
                key = {per.id}
                changed = {(event) => this.props.changed(event, per.id)}
            /> 
        });
    }
}

export default Persons;