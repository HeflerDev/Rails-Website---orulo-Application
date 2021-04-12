import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import Navbar from './Navbar';
import Showcase from '../containers/Showcase';
import StateProfile from '../containers/StateProfile';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import NewUserForm from '../containers/NewUserForm';

const Routes = (props) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data.user,
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
          handleLogin(res);
        } else {
          handleLogout();
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => (<App loggedInStatus={state.isLoggedIn} /> )} />
        <Route exact path="/login" render={() => ( <Login handleLogin={handleLogin} loggedInStatus={state.isLoggedIn} /> )} />
        <Route exact path="/signup" render={() => ( <Signup handleLogin={handleLogin} loggedInStatus={state.isLoggedIn} /> )} />
        // <Route exact path="/user" component={NewUserForm} />
        <Route path="/profiles/:id" component={StateProfile} />
        <Route path="/query/:page" component={Showcase} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
