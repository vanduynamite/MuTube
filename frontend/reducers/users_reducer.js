import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case (RECEIVE_CURRENT_USER):
      return merge(newState, {
        [action.user.id]: action.user,
      });

    default:
      return newState;

  }

};

export default usersReducer;

// 1: {
//   id: 1,
//   username: "vanduynamite",
//   name: "Paul And Cats",
//   user_image_url: "http://someotherplacewhereimagesarehosted",
//   uploadedVideos: [12, 69, 753],
// },
