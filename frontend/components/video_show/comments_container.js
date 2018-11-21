import { connect } from 'react-redux';
import Comments from './comments';
import {
  createComment,
  deleteComment,
  addLikeOrDislike,
} from '../../actions/comment_actions';
import {
  showCommentButtons,
  hideCommentButtons,
  spaceToPlay,
} from '../../actions/ui_actions';
import {
  commentsOnVideo,
} from '../../reducers/selectors';

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
    spaceToPlay: boolean => dispatch(spaceToPlay(boolean)),
    createComment: data => dispatch(createComment(data)),
  };
};

export default connect(msp, mdp)(Comments);
