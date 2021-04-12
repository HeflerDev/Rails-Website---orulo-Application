/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import Navbar from './Navbar';
import Showcase from '../containers/Showcase';
import StateProfile from '../containers/StateProfile';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Favorites from '../containers/Favorites';

const Routes = (props) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data,
    });
  };

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: {},
    });
  };

  useEffect(() => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in) {
          handleLogin(res.data);
        } else {
          handleLogout();
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar loggedInStatus={state.isLoggedIn} handleLogout={handleLogout} userInfo={state.user} />
      <Switch>
        <Route exact path="/" render={(props) => (<App {...props} loggedInStatus={state.isLoggedIn} userInfo={state.user} />)} />
        <Route exact path="/login" render={(props) => (<Login {...props} handleLogin={handleLogin} loggedInStatus={state.isLoggedIn} />)} />
        <Route exact path="/signup" render={(props) => (<Signup {...props} handleLogin={handleLogin} loggedInStatus={state.isLoggedIn} />)} />
        <Route path="/profiles/:id" component={StateProfile} />
        <Route path="/query/:page" render={(props) => (<Showcase loggedInStatus={state.isLoggedIn} userInfo={state.user} { ...props } />)} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
