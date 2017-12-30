import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component{

    constructor(props){
		super(props);
		console.log("[Person.js] Inside contructor", props);
	}

	componentWillMount(){
		console.log('[Person.js] Inside Componenet Will mount1!');
	}

	componentDidMount(){
        console.log('[Person .js] Inside ComponentDidMount()');
        if(this.props.position === 0){
            this.inputElement.focus();
        }
    }

    render(){
        return (
            <WithClass classes={ classes.Person } >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={ (inp) => { this.inputElement = inp }}
                    type="text"  
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </WithClass> 
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;