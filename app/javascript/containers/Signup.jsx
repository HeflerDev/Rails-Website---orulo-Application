import React, { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {
  const [state, setState] = useState({
    name: '',
    password: '',
    password_confirmation: '',
    errors: '',
  });

  const redirect = () => {
    props.history.push('/login');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state, [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, password, password_confirmation,
    } = state;
    const user = {
      name,
      password,
      password_confirmation,
    };
    axios.post('http://localhost:3001/api/v1/users/create', { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === 'created') {
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

  const { name, password, password_confirmation } = state;
  return (
    <div>
      <h1>Sign Up</h1>
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
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>

      </form>
      <div>
        {
            state.errors ? handleErrors() : null
          }
      </div>
    </div>
  );
};
export default Signup;
