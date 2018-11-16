import { connect } from 'react-redux';
import VideoShow from './video_show';
import {
  fetchVideo,
  addView,
} from '../../actions/video_actions';
import { merge } from 'lodash';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const video = state.entities.videos[videoId];
  const user = {};
  if (video) { merge(user, state.entities.users[video.uploaderId]) };

  return {
    videoId,
    video,
    user,
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id)),
    addView: id => dispatch(addView(id)),
  };
};

export default connect(msp, mdp)(VideoShow);
