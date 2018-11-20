import {
  RECEIVE_VIDEO,
} from '../../actions/video_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_VIDEO:
      return merge(newState, action.comments);

    default:
      return newState;

  }

};

export default commentsReducer;
