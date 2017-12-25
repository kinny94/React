import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props  ) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.person.length <= 2){
        assignedClasses.push( classes.red ); // classes = red
    }

    if(props.person.length <= 1){
        assignedClasses.push( classes.bold ); // classes are red and bold
    }

    return (
        <div className={ classes.Cockpit }>
            <h1>Hi, I am a react app</h1>
            <p className={ assignedClasses.join(' ') }>This is really working.! Yes till now</p>
            
            <button 
            className = { btnClass }
            onClick={props.clicked}>Toggle Person</button>  
        </div>
    );
};

export default cockpit;