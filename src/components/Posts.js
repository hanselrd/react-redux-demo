import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  render() {
    const { posts, getAll } = this.props;
    return (
      <div className="Posts">
        {posts.length === 0 && (
          <button onClick={() => getAll()}>Load Posts</button>
        )}
        {posts.length > 0 && (
          <ul>
            {posts.map(post => {
              return <li key={post.id}>{post.body}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  getAll: PropTypes.func.isRequired
};

export default Posts;
