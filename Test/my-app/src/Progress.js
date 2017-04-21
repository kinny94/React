import React, { Component } from 'react';

class Progress extends Component{
    getInitialState = () => {
        return {
            value : 25
        };
    };

    setValue = () => {
        this.setState({ value: this.refs.range.getDOMNode().value});
    };

    render(){
        
    }
}

export default Progress;