import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import pngBg from '../../assets/images/png/login_background.png';

const Login = (props) => {
  const [state, setState] = useState({
    name: '',
    password: '',
    errors: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state, [name]: value,
    });
  };

  const redirect = () => {
    props.history.push('/');
  };

  useEffect(() => {
    return props.loggedInStatus ? redirect() : null
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, password } = state;
    const user = {
      name,
      password,
    };

    axios.post('http://localhost:3001/login', { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          props.handleLogin(response.data);
          redirect();
        } else {
          setState({
            ...state, errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log('api errors:', error));
  };

  const handleErrors = () => (
    <div>
      <ul>
        {state.errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    </div>
  );

  const picStyle = {
    background: `
      url(${pngBg})
      no-repeat
      center
    `,
    backgroundSize: 'cover',
    height: '85vh',
  }

  const { name, password } = state;
  return (
    <div style={picStyle}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="signup-form stack">
        <input
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <div>
          or
          {' '}
          <Link to="/signup">sign up</Link>
        </div>

      </form>
      <div>
        {
            state.errors ? handleErrors() : null
          }
      </div>
    </div>
  );
};
export default Login;
