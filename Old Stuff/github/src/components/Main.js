import React, { Component } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import { fetchData } from '../api/fetchData';

class Main extends Component {

    constructor( props ){
        super( props );

        this.state = {
            'isValue': '',
            'userData': '',
            'heading': 'Seaching for any github user!!!',
            'initialState': true
        }
    }


    handleSearch = ( username ) => {
        this.setState({
            isLoading: true
        });

        fetchData( username ).then(( response ) => {

            this.setState({
                userData: response,
                isLoading: false,
                initialState: false
            });
            console.log( this.state.userData );
        },( errorMessage ) => {
            this.setState({
                isLoading: false
            });
            console.log( errorMessage );
        });
    }

    changeHeading = ( username ) => {
        this.setState({
            'heading': `Showing Results for ${ username }`
        });
    }


    render(){

        let { isLoading, userData, initialState } = this.state; 

        function renderMessage(){
            if( isLoading ){
                return <h1>Fetching data....</h1>
            }else{
                console.log( userData );
                if( userData !== undefined  ){
                    return <SearchResults userData={ userData } />;
                }else{
                    return <h1>No Results found!!</h1>
                }
            }
        }

        return(
            <div className="container">
                <div className="col-md-12">
                    <h1>I am from Main Class</h1>
                    <Search onSearch={ this.handleSearch } handleHeading={ this.changeHeading }/>
                </div>
                <div className="col-md-12">
                    { renderMessage() }
                </div>
            </div>
        )
    }
}

export default Main;