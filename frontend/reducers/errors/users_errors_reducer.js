import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USERS_ERRORS,
} from '../../actions/user_actions';
import { merge } from 'lodash';

const usersErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = [];

  switch (action.type) {
    case RECEIVE_USERS_ERRORS:
      return merge(newState, action.errors.responseJSON);

    case RECEIVE_USER:
    case RECEIVE_USERS:
      return newState;

    default:
      return newState;

  }

};

export default usersErrorsReducer;
