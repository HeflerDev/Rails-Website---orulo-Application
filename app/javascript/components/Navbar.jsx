import React from 'react';
import { Link } from 'react-router-dom';

import svgLogo from '../../assets/images/svg/logo.svg';

const Navbar = () => (
  <nav className="board queue between">
    <Link to="/" className= "col-l-3 queue">
      <img className="logo" src={svgLogo} alt="" />
      <h1 className="queue column center">Imobiliária Fulano</h1>
    </Link>
    <div className="col-4 queue around">
      <Link to="/about" className="btn-header">
        Sobre
      </Link>
      <Link to="/contact" className="btn-header">
        Contato
      </Link>
      <Link to="/login" className="btn-header">
        Login
      </Link>
    </div>
  </nav>
);

export default Navbar;
