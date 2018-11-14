import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Main from './main/main_container';
import Login from './session/login_form_container';
import Signup from './session/signup_form_container';

export default () => {
  return (
    <>
      <Switch>
        <AuthRoute exact path='/login' component={ Login } />
        <AuthRoute exact path='/signup' component={ Signup } />
        <Route path='/' component={ Main } />
      </Switch>
    </>
  );
};
