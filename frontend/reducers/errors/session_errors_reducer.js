import { RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_POTENTIAL_SESSION } from '../../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = {}, action) => {
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
  "First name can't be blank": "firstName",
  "Last name can't be blank": "lastName",
  "Username can't be blank": "username",
  "Username has already been taken": "username",
  "Email can't be blank": "email",
  "Email has already been taken": "email",
  "Email address is invalid" : "email",
  "Wrong password. Try again or use the demo login.": "password",
  "Password is too short (minimum is 6 characters)": "password",
  "Passwords do not match": "password",
};

export default sessionErrorsReducer;

// ["Incorrect username or password"],
