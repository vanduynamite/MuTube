import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { fetchVideos } from '../../actions/video_actions';
import {
  subscribe,
  unsubscribe,
} from '../../actions/subscription_actions';

// TODO: bonus, implement a user show page

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId || state.session.id;
  const ownPage = parseInt(userId) === state.session.id;
  const user = state.entities.users[userId];
  const currentUser = state.entities.users[state.session.id];
  const path = ownProps.history.location.pathname;

  // 1. I am visiting one of the special routes. Easy, they are done.
  //    a. History
  //    b. Subscription videos
  // 2. I am visiting my page. I want to see subscriptions, likes, uploads.
  // 3. I am visiting someone else's page. I want to see uploads only.

  const videos = Object.values(state.entities.videos).slice(0,6);
  const users = state.entities.users;

  // need some selectors here

  return {
    users,
    userId,
    user,
    currentUser,
    path,
    ownPage,
    videos,
  };
};

const mdp = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchVideos: search => dispatch(fetchVideos(search)),
    subscribe: id => dispatch(subscribe(id)),
    unsubscribe: id => dispatch(unsubscribe(id)),
  };
};

export default connect(msp, mdp)(UserShow);
