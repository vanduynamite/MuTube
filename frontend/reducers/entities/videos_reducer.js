import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
} from '../../actions/video_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
      return merge({}, action.videos);

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
