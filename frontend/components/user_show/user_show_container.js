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

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId || state.session.id;
  const ownPage = parseInt(userId) === state.session.id;
  const users = state.entities.users;
  const user = users[userId];
  const currentUser = users[state.session.id];
  const path = ownProps.history.location.pathname;

  const renderSections = {
    uploads: false,
    subfeed: false,
    liked: false,
    history: false,
  };

  const videos = {
    uploads: [],
    subfeed: [],
    liked: [],
    history: [],
  }

  if (path.includes('/users')) renderSections.uploads = true;
  if (path === '/subscriptions' || (path.includes('/users') && ownPage)) renderSections.subfeed = true;
  if (path === '/liked' || (path.includes('/users') && ownPage)) renderSections.liked = true;
  if (path === '/history') renderSections.history = true;


  if (user) {
    if (renderSections.uploads && user.uploadedVideos) {
      videos.uploads = user.uploadedVideos.map(id => state.entities.videos[id]);
    }

    if (renderSections.subfeed && user.subfeedVideos) {
      videos.subfeed = user.subfeedVideos.map(id => state.entities.videos[id]);
    }

    if (renderSections.liked && user.likedVideos) {
      videos.liked = user.likedVideos.map(id => state.entities.videos[id]);
    }

    if (renderSections.history && user.historyVideos) {
      videos.history = user.historyVideos.map(id => state.entities.videos[id]);
    }
  }

  return {
    users,
    userId,
    user,
    currentUser,
    path,
    ownPage,
    renderSections,
    videos,
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
