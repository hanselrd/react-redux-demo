import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as postsActions from './actions/posts';
import * as userActions from './actions/user';
import Posts from './components/Posts';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.changeName('React'));
    dispatch(userActions.changeAge(99));
  }
  render() {
    const { posts, user, dispatch } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <Posts posts={posts} getAll={() => dispatch(postsActions.getAll())} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.data,
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
