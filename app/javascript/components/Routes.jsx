import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Showcase from '../containers/Showcase';
import StateProfile from '../containers/StateProfile';
import NewUserForm from '../containers/NewUserForm';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/user" component={NewUserForm} />
      <Route path="/profiles/:id" component={StateProfile} />
      <Route path="/query/:page" component={Showcase} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
