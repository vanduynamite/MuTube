import {
  RECEIVE_VIDEO,
} from '../../actions/video_actions';
import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENT_LIKE,
  REMOVE_COMMENT,
} from '../../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_VIDEO:
    case RECEIVE_COMMENT:
    case RECEIVE_COMMENT_LIKE:
      return merge(newState, action.comments);

    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;

    default:
      return newState;

  }

};

export default commentsReducer;
