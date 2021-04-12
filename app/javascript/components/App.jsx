import React from 'react';
import Showcase from '../containers/Showcase';
import Header from './Header';
import SearchForm from '../containers/SearchForm';

const App = () => (
  <>
    <Header />
    <div className="stack">
      <SearchForm />
    </div>
    <Showcase />
  </>
);

export default App;
