import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Posts from './component/Posts';
import PostForm from './component/PostForm';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
