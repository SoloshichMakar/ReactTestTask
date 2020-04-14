import React from 'react';
import { useHistory } from 'react-router-dom';

import { fakeAuth } from '../../helpers/authentication';
import { AppBar, Toolbar, Button } from '@material-ui/core';

function SignoutComponent() {
  const history = useHistory();

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Button
          color="inherit"
          onClick={() => {
            fakeAuth.signout();
            history.push('/');
          }}
        >
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default SignoutComponent;
