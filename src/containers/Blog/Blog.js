import React, { Component } from 'react';
import {Route} from 'react-router';

import './Blog.css';
import Posts from "./Posts/Posts";

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/new-post"}>New Post</a></li>
                        </ul>
                    </nav>
                </header>

                <Route path={"/"} exact render={() => <h1>Home</h1>}/>
                <Route path={"/"} exact render={() => <h1>Home 2</h1>}/>
                {/*<Posts />*/}
            </div>
        );
    }
}

export default Blog;
