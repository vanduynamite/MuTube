import {
  TOGGLE_LEFT_SIDEBAR,
  SHOW_COMMENT_BUTTONS,
  HIDE_COMMENT_BUTTONS,
  UPDATE_SEARCH_FIELD,
  RECENT_UPLOAD_UI,
} from '../../actions/ui_actions';
import { merge } from 'lodash';

const uiReducer = (state, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case TOGGLE_LEFT_SIDEBAR:
      return merge(newState, { leftSidebar: !newState.leftSidebar });

    case SHOW_COMMENT_BUTTONS:
      return merge(newState, { commentButtons: true });

    case HIDE_COMMENT_BUTTONS:
      return merge(newState, { commentButtons: false });

    case UPDATE_SEARCH_FIELD:
      return merge(newState, { search: action.search });

    case RECENT_UPLOAD_UI:
      return merge(newState, { lastVideoUploadId: action.videoId });

    default:
      return newState;
  }
};

export default uiReducer;

//   ui: {
//     loading: false,
//     paused: false,
//     fullScreen: false,
//     volume: 0.72,
//   },
