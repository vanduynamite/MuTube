import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main/main_container';
import Login from './session/login_form_container';
import Signup from './session/signup_form_container';

export default () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={ Main } />
      </Switch>
    </div>
  );
};


// <Route exact path='/login' component={ Login } />
// <Route exact path='/signup' component={ Signup } />
// TODO: switch path to /login and /signup to be AuthRoutes
