import React from 'react';
import './App.css';

import 'normalize.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Friends storage={props.storage} />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile storage={props.storage} />} />
        <Route path='/dialogs' render={() => <Dialogs storage={props.storage} />} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;