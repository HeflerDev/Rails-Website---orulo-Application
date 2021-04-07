import React from 'react';
import { render } from 'react-dom';
import Routes from './components/Routes';
import 'csstack';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Routes />,
    document.body.appendChild(document.createElement('div'))
  )
});
