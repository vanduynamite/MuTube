import { connect } from 'react-redux';
import VideoIndex from './video_index';

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId] || null;
  const videos = {};

  for (let i = 0; i < 100; i++) {
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
    currentUser,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(VideoIndex);
