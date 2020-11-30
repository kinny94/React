import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

const App = () => {

  const buttonText = 'Click Me!';

  return <div>
    <label className="label" htmlFor="name">
      Enter name:
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>{ getButtonText() }</button>
  </div>
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);