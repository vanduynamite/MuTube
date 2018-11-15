import { connect } from 'react-redux';
import VideoShow from './video_show';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;

  return {
    videoId,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(VideoShow);
