import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validateNewUserInput from '../logic/validateNewUserInput';

const NewUserForm = (props) => {
  const [state, setState] = useState({
    name: '',
    password: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = '/api/v1/users/create';
    const { name, password } = state;

    if (!validateNewUserInput(name, password)) {
      return;
    }

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Terminated');
          console.log(name);
          return res.json();
        }
        throw new Error('Network Response Failed');
      })
      .then(() => props.history.push('/login'))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="stack">
      <form onSubmit={handleSubmit} className="signup-form stack">
        <h2>Nome de Usuario</h2>
        <label htmlFor="user">
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <h2>Senha</h2>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewUserForm;
