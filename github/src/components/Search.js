import React, { Component } from 'react';

class Search extends Component{

    constructor( props ){
        super( props );
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit( event ){
        this.setState({
            value: ''
        });
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="input-group">
                        <input className="form-control form-control-lg" placeholder="Search for a user....!!" type="text" value={ this.state.value } onChange={ this.handleChange }/>
                        <span className="input-group-btn">
                            <button className="btn btn-outline-secondary" type="submit">
                                <i className="fas fa-2x fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                <div>
                    <p>{ this.state.value }</p>
                </div>
            </div>
        )
    }
}

export default Search;