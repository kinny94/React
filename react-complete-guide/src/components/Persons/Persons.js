import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render(){
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