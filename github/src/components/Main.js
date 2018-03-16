import React, { Component } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

class Main extends Component {
    render(){
        return(
            <div className="container">
                <h1>I am from Main Class</h1>
                <Search />
                <SearchResults />
            </div>
        )
    }
}

export default Main;