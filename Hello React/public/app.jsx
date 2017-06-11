var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('./components/Greeter');

var fullName = "Arjun Dass";

ReactDOM.render(
    <Greeter name={fullName}/>,
    document.getElementById('app')
);

