import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a well known library among developers'
    },
    {
        title: 'How do you use React?',
        content: 'We use react by developings components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={ () => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
            {
                showDropdown ?  <Dropdown selected={ selected } options={ options } onSelectionChange={ setSelected }/>: null 
            }
        </div>
    );
};