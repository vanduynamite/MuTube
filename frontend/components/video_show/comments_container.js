import { connect } from 'react-redux';
import Comments from './comments';
import {
  showCommentButtons,
  hideCommentButtons,
} from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  const videoId = ownProps.videoId;
  const video = state.entities.videos[videoId];
  const currentUser = state.entities.users[state.session.id];
  const commentButtons = state.ui.commentButtons;

  return {
    video,
    currentUser,
    commentButtons,
  };
};

const mdp = dispatch => {
  return {
    showCommentButtons: () => dispatch(showCommentButtons()),
    hideCommentButtons: () => dispatch(hideCommentButtons()),
  };
};

export default connect(msp, mdp)(Comments);
