import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((per, index) => {
        return <Person 
            name={per.name} 
            age={per.age} 
            click={() => props.clicked(index)} 
            key={per.id} 
            changed={(event) => props.changed(event, per.id)}
        />
    });
  // default ES6  return statement structure

export default persons;