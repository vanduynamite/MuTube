import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId] || null;
  const users = state.entities.users;
  const videos = Object.values(state.entities.videos);
  const search = state.ui.search;

  return {
    users,
    videos,
    currentUser,
    search,
  };
};

const mdp = dispatch => {
  return {
    fetchVideos: search => dispatch(fetchVideos(search)),
  };
};

export default connect(msp, mdp)(VideoIndex);
