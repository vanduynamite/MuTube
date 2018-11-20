import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
} from '../../actions/video_actions';
import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENT_ERRORS,
} from '../../actions/comment_actions';
import { merge } from 'lodash';

const commentsErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return merge(newState, action.errors.responseJSON);

    case RECEIVE_COMMENT:
    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
      return newState;

    default:
      return newState;

  }

};

export default commentsErrorsReducer;
