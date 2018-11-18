import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import { recentUploadUI } from '../../actions/ui_actions';
import VideoUpload from './video_upload';

const msp = state => {
  const lastVideoUploadId = state.ui.lastVideoUploadId;

  return {
    lastVideoUploadId,
  };
};

const mdp = dispatch => {
  return {
    createVideo: data => dispatch(createVideo(data)),
  };
};

export default connect(msp, mdp)(VideoUpload);
