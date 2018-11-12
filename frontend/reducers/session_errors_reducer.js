import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = [];

  switch (action.type) {
    case (RECEIVE_SESSION_ERRORS):
      const errors = action.errors.responseJSON;
      return newState.concat(errors);

    default:
      return newState;

  }

};

export default errorsReducer;

// ["Incorrect username or password"],
