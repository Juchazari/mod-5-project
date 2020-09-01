import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './Auth/ProtectedRoute';

import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import auth from './Auth/auth';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {auth.isAuthenticated() ? <Redirect to='/dashboard' /> : null}
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </>
  );
};

export default App;
