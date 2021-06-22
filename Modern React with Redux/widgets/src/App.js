import React from 'react';
import Accordion from './components/Accordion';
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
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <Search></Search>
        </div>
    );
};