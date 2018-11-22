import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { merge } from 'lodash';
import * as Actions from './actions/comment_actions';

const loadCurrentUser = ({ users, session }) => {
  return {
    entities: { users },
    session: {
      id: session
    },
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const prevUserState = window.currentUser ? loadCurrentUser(window.currentUser) : {};
  const prevUIState = {
    spaceToPlay: true,
  };
  const prevState = merge(prevUserState, { ui: prevUIState });
  // debugger
  const store = configureStore(prevState);
  const root = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.actions = Actions;

  ReactDOM.render(<Root store={store} />, root);
});

// DEBUG:
const store = configureStore();
