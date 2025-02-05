import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { setNewPostText } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} setNewPostText={setNewPostText} />
      </BrowserRouter>, document.getElementById('root')
    );
  }

  export default rerenderEntireTree