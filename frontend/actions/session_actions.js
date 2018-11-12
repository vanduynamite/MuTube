import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const loginUser = (user) => dispatch => {
  return SessionAPI.loginUser(user)
    .then(payload => dispatch(receiveCurrentUser(payload)));
};
