import {
  TOGGLE_LEFT_SIDEBAR }from '../actions/ui_actions';
import { merge } from 'lodash';

const uiReducer = (state, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case TOGGLE_LEFT_SIDEBAR:
      return merge(newState, {leftSidebar: !newState.leftSidebar});

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
