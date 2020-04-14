import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { fakeAuth } from '../../helpers/authentication';
import lock from '../../assets/lock.svg';

import './LoginComponent.css';

const LoginComponent = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const loginUser = () => {
    fakeAuth.authenticate(email, password);
    if (fakeAuth.isAuthenticated) {
      setError(false);
      history.push('/protected');
    } else {
      setError(true);
    }
  };

  return (
    <Box className="login">
      <img src={lock} alt="lock" height="60" />
      <h1 className="login__header">Sign in</h1>
      <form
        name="login-form"
        method="post"
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
        <TextField
          fullWidth
          label="Your email"
          onChange={(event) => setEmail(event.target.value)}
          error={error}
        />
        <TextField
          fullWidth
          label="Your password"
          onChange={(event) => setPassword(event.target.value)}
          error={error}
        />
        {error && <p className="error">Invalid credentials!</p>}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          className="login__button"
        >
          Sign in
        </Button>
      </form>
    </Box>
  );
};

export default LoginComponent;
