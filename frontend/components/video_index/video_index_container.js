import { connect } from 'react-redux';
import VideoIndex from './video_index';

const msp = state => {

  const videos = {};

  for (let i = 0; i < 8; i++) {
    videos[i] = {
      id: i,
      uploaderId: i*3,
      uploaderName: `Uploader ${i*3}`,
      title: `Video number ${i}`,
      description: `Video number ${i} description`,
      views: '3412',
      createdTimeAgo: '1 year ago',
      url: '',
    };
  }

  return {
    videos: Object.values(videos),
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(VideoIndex);
