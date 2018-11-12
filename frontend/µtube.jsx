import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

const loadCurrentUser = (currentUser) => {
  return {
    entities: {
      users: {
        [currentUser.id]: currentUser
      }
    },
    session: {
      id: currentUser.id
    },
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const prevState = (window.currentUser) ? loadCurrentUser(window.currentUser) : {};
  const store = configureStore(prevState);
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

// DEBUG:
const store = configureStore();
import * as SessionActions from './actions/session_actions';
window.getState = store.getState;
window.dispatch = store.dispatch;
window.actions = SessionActions;
