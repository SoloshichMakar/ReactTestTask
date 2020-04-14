import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { fakeAuth } from './helpers/authentication';
import AirportsPage from './components/AirportsPage/AirportsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/protected">
            <AirportsPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/">
            {fakeAuth.isAuthenticated ? <AirportsPage /> : <LoginComponent />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
