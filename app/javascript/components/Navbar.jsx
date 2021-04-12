import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import svgLogo from '../../assets/images/svg/logo.svg';

const Navbar = ({ history, userInfo, loggedInStatus, handleLogout }) => {
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        handleLogout();
        history.push('/');
      })
      .catch((error) => console.log(error));
  };

  const loggedIn = () => (loggedInStatus && userInfo.user.name ? (
    <>
      <Link to="/logout" className="btn-header" onClick={handleClick}>
        <p>Log Out</p>
      </Link>
      <Link to="/favorites" className="btn-header">
        <p>
          Olá,
          {' '}
          { userInfo.user.name }
        </p>
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="btn-header">
        Login
      </Link>
      <Link to="/signup" className="btn-header">
        Inscrever-se
      </Link>
    </>
  ));

  return (
    <nav className="board queue between">
      <Link to="/" className="col-l-3 queue">
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
        { loggedIn() }
      </div>
    </nav>
  );
};

export default Navbar;
