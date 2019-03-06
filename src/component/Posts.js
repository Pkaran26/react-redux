import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nexProps){
    if(nexProps.newpost){
      this.props.posts.unshift(nexProps.newpost);
    }
  }

  render(){
    const postsItems = this.props.posts.map(post =>(
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return(
      <div>
        <h1>Posts</h1>
        {postsItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  post: PropTypes.object
}

const mapStateToProps = state =>({
  posts: state.posts.items,
  newpost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
