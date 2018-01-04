import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="my-active" 
                                activeStyle={ {color: '#fa923f', textDecoration: 'underline'} }
                                to="/" exact>Posts</NavLink></li> 
                            {/* If you dont use activeClassName="active" it will be taken as default, add other class name instead 
                                of active for custom styling.
                            */}
                            <li><NavLink to={{ 
                                pathname: '/new-post', // relative path would be this.props.match.url + './new-posts';
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                { /* <Route path="/" exact render={ () => <h1>Home</h1>  } />
                <Route path="/" exact render={ () => <h1>Home 2</h1>  } /> */  }
                
                <Switch>
                    <Route path="/new-post" component={ NewPost } />
                    <Route path="/" component={ Posts } />    
                    
                </Switch>
                {/*
                    Order is important with Switch
                */}
                
            </div>
        );
    }
}

export default Blog;