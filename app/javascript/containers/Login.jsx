import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      [name]: value,
    });
  };

  const redirect = () => {
    props.history.push('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = state;
    const user = {
      username,
      password,
    };

    axios.post('http://localhost:3001/login', { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          props.handleLogin(response.data);
          redirect();
        } else {
          setState({
            errors: response.data.errors,
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

  const { username, password } = state;
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="signup-form stack">
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
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
