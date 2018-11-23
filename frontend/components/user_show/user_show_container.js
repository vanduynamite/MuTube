import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import {
  fetchUploadedVideos,
  fetchLikedVideos,
  fetchHistoryVideos,
  fetchSubscriptionVideos,
} from '../../actions/video_actions';
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

  const renderSections = {
    uploads: false,
    subFeed: false,
    liked: false,
    history: false,
  };

  // 1. I am visiting one of the special routes. Easy, they are done.
  //    a. History
  //    b. Subscription videos
  // 2. I am visiting my page. I want to see subscriptions, likes, uploads.
  // 3. I am visiting someone else's page. I want to see uploads only.
  if (path.includes('/users')) renderSections.uploads = true;
  if (path === '/subscriptions' || (path.includes('/users') && ownPage)) renderSections.subFeed = true;
  if (path === '/liked' || (path.includes('/users') && ownPage)) renderSections.liked = true;
  if (path === '/history') renderSections.history = true;

  const videos = Object.values(state.entities.videos).slice(0,6);
  const users = state.entities.users;

  // need some selectors here
  const uploadedVideos = videos;
  const subfeedVideos = videos;
  const likedVideos = videos;
  const historyVideos = videos;

  return {
    users,
    userId,
    user,
    currentUser,
    path,
    ownPage,
    videos,
    renderSections,
    uploadedVideos,
    subfeedVideos,
    likedVideos,
    historyVideos,
  };
};

const mdp = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUploadedVideos: id => dispatch(fetchUploadedVideos(id)),
    fetchLikedVideos: () => dispatch(fetchLikedVideos()),
    fetchHistoryVideos: () => dispatch(fetchHistoryVideos()),
    fetchSubscriptionVideos: () => dispatch(fetchSubscriptionVideos()),
    subscribe: id => dispatch(subscribe(id)),
    unsubscribe: id => dispatch(unsubscribe(id)),
  };
};

export default connect(msp, mdp)(UserShow);
