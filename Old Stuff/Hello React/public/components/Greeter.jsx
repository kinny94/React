var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({

    getDefaultProps: function(){
        return{
            name: 'React!!',
            message: 'Default message!!',
        }
    },

    getInitialState: function (){
        return { 
            name: this.props.name,
            message: this.props.message
        };
    },  

    handleUpdatedData: function (updastes) {
        this.setState(updates);
    },

    render: function(){

        var name = this.state.name;
        var message = this.state.message;

        return (
            <div> 
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleUpdatedData}/>
            </div>    
        );
    }
});

module.exports = Greeter;