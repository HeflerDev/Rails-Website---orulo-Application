import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validateNewUserInput from '../logic/validateNewUserInput';

const NewUserForm = props => {
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
          console.log(name)
          return res.json();
        }
        throw new Error('Network Response Failed');
      })
      .then((data) => props.history.push(`/users/${data.id}`))
      .catch((error) => console.log(error.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">
        Username:
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
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
  );
};

export default NewUserForm;
