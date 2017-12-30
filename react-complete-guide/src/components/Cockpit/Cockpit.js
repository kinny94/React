import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxilary';
const cockpit = ( props  ) => {

    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(" ");
    }

    if (props.person.length <= 2){
        assignedClasses.push( classes.red ); // classes = red
    }

    if(props.person.length <= 1){
        assignedClasses.push( classes.bold ); // classes are red and bold
    }

    return (
        <Aux>
            <h1>Hi, I am a react app</h1>
            <p className={ assignedClasses.join(' ') }>This is really working.! Yes till now</p>
        
            <button 
                className = { btnClass }
                onClick={props.clicked}>Toggle Person</button>  
        </Aux>
    );
};

export default cockpit;