import React from 'react';
import './App.css';
import 'normalize.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <FriendsContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;