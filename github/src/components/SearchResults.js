import React, { Component } from 'react';

class SearchResults extends Component{

    formatData = () => {
        let userData = this.props.userData;

        console.log( userData );
    }
    render(){
        
        return (
            <h1>I'll show data</h1>
        )        
    }
}

export default SearchResults;