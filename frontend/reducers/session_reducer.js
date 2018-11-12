import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case (RECEIVE_CURRENT_USER):
      return merge(newState, {
        id: action.user.id,
      });

    case (REMOVE_CURRENT_USER):
      return merge(newState, {
        id: null,
      });

    default:
      return newState;

  }

};

export default sessionReducer;


// currentUserId: 1
