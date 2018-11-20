import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
} from '../../actions/video_actions';
import {
  REMOVE_CURRENT_USER,
} from '../../actions/session_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_VIDEO:
      return merge(newState, action.videos);

    case RECEIVE_VIDEOS:
      return merge({}, action.videos);

    case REMOVE_CURRENT_USER:
      const removeCurrentUserDislikes = {};
      Object.keys(newState).map(
        videoId => delete newState[videoId].currentUserDislikes
      );
      return newState;

    default:
      return newState;

  }

};

export default videosReducer;

// 1: {
//   id: 1,
//   username: "vanduynamite",
//   name: "Paul And Cats",
//   user_image_url: "http://someotherplacewhereimagesarehosted",
//   uploadedVideos: [12, 69, 753],
// },
