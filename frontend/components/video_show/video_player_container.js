import { connect } from 'react-redux';
import VideoPlayer from './video_player';

const msp = (state, ownProps) => {
  const videoId = ownProps.videoId;
  const video = state.entities.videos[videoId];
  const currentUser = state.entities.users[state.session.id];
  const spaceToPlay = state.ui.spaceToPlay;

  return {
    video,
    currentUser,
    spaceToPlay,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(VideoPlayer);
