import React from 'react';
import ReactDOM from 'react-dom';

const App = () => { 

    const buttonText = "Click  Me!";
    const style = { backgroundColor: 'red', color: 'white' };
    return (
        <div>
            <label class="label" for="name">Enter name: </label>
            <input id="name" type="text" />
            <button style={ style }>{ buttonText }</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);