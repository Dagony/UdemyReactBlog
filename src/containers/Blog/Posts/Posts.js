import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    };

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/' + id});
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                        key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
                    //<Link to={'/' + post.id} key={post.id}>//</Link>
                    ;
            });
        }

        return <section className="Posts">
            {posts}
        </section>;
    }
}

export default Posts;
