import {
  TOGGLE_LEFT_SIDEBAR,
  DEACTIVATE_LEFT_SIDEBAR,
  SHOW_COMMENT_BUTTONS,
  HIDE_COMMENT_BUTTONS,
  UPDATE_SEARCH_FIELD,
  RECENT_UPLOAD_UI,
  SPACE_TO_PLAY,
  TOGGLE_DELETE_COMMENT,
} from '../../actions/ui_actions';
import { merge } from 'lodash';

const uiReducer = (state, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case TOGGLE_LEFT_SIDEBAR:
      return merge(newState, { leftSidebar: !newState.leftSidebar });

    case DEACTIVATE_LEFT_SIDEBAR:
      if (!newState.leftSidebar) delete(newState.leftSidebar);
      return newState;

    case SHOW_COMMENT_BUTTONS:
      return merge(newState, { commentButtons: true });

    case HIDE_COMMENT_BUTTONS:
      return merge(newState, { commentButtons: false });

    case UPDATE_SEARCH_FIELD:
      return merge(newState, { search: action.search });

    case RECENT_UPLOAD_UI:
      return merge(newState, { lastVideoUploadId: action.videoId });

    case SPACE_TO_PLAY:
      return merge(newState, { spaceToPlay: action.spaceToPlay });

    case TOGGLE_DELETE_COMMENT:
      if (newState.showDeleteButton === action.commentId) {
        delete newState.showDeleteButton;
      } else {
        newState.showDeleteButton = action.commentId;
      }

      return newState

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
