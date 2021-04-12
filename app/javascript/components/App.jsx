import React from 'react';
import Showcase from '../containers/Showcase';
import Header from './Header';
import SearchForm from '../containers/SearchForm';

const App = ({ loggedInStatus, userInfo }) => (
  <>
    <Header />
    <div className="stack">
      <SearchForm />
    </div>
    <Showcase loggedInStatus={loggedInStatus} userInfo={userInfo} />
  </>
);

export default App;
