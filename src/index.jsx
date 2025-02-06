import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import storage from './redux/storage';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App storage={storage}/>
      </BrowserRouter>, document.getElementById('root')
    );
  }

rerenderEntireTree(storage.state);

storage.subscribe(rerenderEntireTree);