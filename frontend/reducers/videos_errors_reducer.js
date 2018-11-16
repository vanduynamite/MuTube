import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
  RECEIVE_VIDEOS_ERRORS,
} from '../actions/video_actions';
import { merge } from 'lodash';

const videosErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_VIDEOS_ERRORS:
      return merge(newState, action.errors.responseJSON);

    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
      return newState;

    default:
      return newState;

  }

};

export default videosErrorsReducer;

// ["Incorrect username or password"],
