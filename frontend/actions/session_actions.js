import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_POTENTIAL_LOGIN = 'RECEIVE_POTENTIAL_LOGIN';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const receiveSessionErrors = errors => {
  console.log(errors);
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

const removeCurrentUser = user => {
  return {
    type: REMOVE_CURRENT_USER,
    user,
  };
};

const receivePotentialLogin = user => {
  return {
    type: RECEIVE_POTENTIAL_LOGIN,
    user,
  };
};

export const login = user => dispatch => {
  return SessionAPI.login(user).then(
    payload => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

export const signup = user => dispatch => {
  return SessionAPI.signup(user).then(
    payload => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

export const logout = () => dispatch => {
  return SessionAPI.logout().then(
    payload => dispatch(removeCurrentUser(payload))
  );
};

export const searchUser = (user) => dispatch => {
  return SessionAPI.searchUser(user).then(
    payload => dispatch(receivePotentialLogin(payload)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

export const demoLogin = () => dispatch => {
  const user = {
    username: 'demo',
    password: 'password',
  };
  return dispatch(login(user));
};
