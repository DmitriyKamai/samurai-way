import React from 'react';
import './App.css';

import 'normalize.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  let state = props.store.getState();
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Friends state={state.sidebar} dispatch={props.store.dispatch.bind(props.store)} />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile store={props.store}/>} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;