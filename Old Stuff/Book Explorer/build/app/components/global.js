//components in react refers to independednt pieces of code 
import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './gallery/gallery'

class Global extends Component {

    constructor(props){     //props is very similar to state, but refer to the parent state rather than the local state of the application
        super(props);   //components receive prop from parents components passing them through attributes
        this.state = {
            query: '',
            items: []
        }
    }

    search(){
        const base_url ='https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${base_url}${this.state.query}`, {method: 'GET'})
            .then((response) => {
               return response.json();
            }).then((json) => {
                let { items } = json;
                this.setState({items})
            });
    }

    render(){
        return(                //mkae sure to have this return 
            <div className="global container">
                <h2>Book Explorer!!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text" 
                            placeholder="Search for a book" 
                            onChange = {event => this.setState({query: event.target.value})}
                            onKeyPress = {event => {
                                if(event.key === 'Enter'){
                                    this.search(); 
                                }
                            }}>
                        </FormControl>
                        <InputGroup.Addon onClick = {() => this.search()}>
                            <Glyphicon glyph="search">

                            </Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="row">
                    <Gallery
                    items={this.state.items}
                    >
                    </Gallery>
                </div>
            </div>
        )
    }
} 

export default Global;