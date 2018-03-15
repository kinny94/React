import React, { Component } from 'react';

class Search extends Component{
    render(){
        return(
            <div>
                <form>
                    <div className="input-group">
                        <input className="form-control form-control-lg" placeholder="Search for a user....!!" type="text" value="" onChange=""/>
                        <span className="input-group-btn">
                            <button className="btn btn-outline-secondary" type="submit">
                                <i className="fas fa-2x fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;