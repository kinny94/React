import React, { Component } from 'react';
import Search from './Search';

class Main extends Component {
    render(){
        return(
            <div>
                <h1>I am from Main Class</h1>
                <Search />
            </div>
        )
    }
}

export default Main;