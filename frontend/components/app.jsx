import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Main from './main/main_container';
import Login from './session/login_form_container';
import Signup from './session/signup_form_container';

export default () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/login' component={ Login } />
        <Route path='/' component={ Main } />
      </Switch>
    </div>
  );
};
// <AuthRoute exact path='/signup' component={ Signup } />
