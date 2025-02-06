import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import storage from './redux/storage';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App state={storage.getState()} storage={storage}/>
      </BrowserRouter>, document.getElementById('root')
    );
  }

rerenderEntireTree(storage.getState());

storage.subscribe(rerenderEntireTree);