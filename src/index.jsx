import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { setNewPostText } from './redux/state';
import { addMessage } from './redux/state';
import { setNewMessage } from './redux/state';
import state from './redux/state';
import { subscribe } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App
        state={state}
        addPost={addPost}
        setNewPostText={setNewPostText}
        addMessage={addMessage}
        setNewMessage={setNewMessage}/>
      </BrowserRouter>, document.getElementById('root')
    );
  }

rerenderEntireTree(state);

subscribe(rerenderEntireTree);