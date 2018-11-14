import { RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_POTENTIAL_SESSION } from '../actions/session_actions';
import { merge } from 'lodash';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      const errors = {};
      action.errors.responseJSON.map(error => errors[errorFieldMap[error]] = error);
      return merge(newState, errors);

    case CLEAR_POTENTIAL_SESSION:
    case RECEIVE_CURRENT_USER:
      return newState;

    default:
      return newState;

  }

};

const errorFieldMap = {
  "Couldn't find your µTube Account": "search",
  "Wrong password. Try again or use the demo login.": "password",
  "Username can't be blank": "username",
  "First name can't be blank": "firstName",
  "Last name can't be blank": "lastName",
  "Email can't be blank": "email",
  "Username has already been taken": "username",
  "Email has already been taken": "email",
  "Password is too short (minimum is 6 characters)": "password",
  "Passwords do not match": "password"
};

export default errorsReducer;

// ["Incorrect username or password"],
