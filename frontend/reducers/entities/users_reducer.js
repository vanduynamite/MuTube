import {
  RECEIVE_CURRENT_USER,
  RECEIVE_POTENTIAL_LOGIN,
} from '../../actions/session_actions';
import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
} from '../../actions/video_actions';
import {
  RECEIVE_USER,
  RECEIVE_USERS,
} from '../../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POTENTIAL_LOGIN:
    case RECEIVE_CURRENT_USER:
      return merge(newState, {
        [action.user.id]: action.user,
      });

    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
    case RECEIVE_USER:
    case RECEIVE_USERS:
      return merge(newState, action.users);

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
