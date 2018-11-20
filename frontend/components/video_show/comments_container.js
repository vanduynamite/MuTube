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

const msp = (state, ownProps) => {
  const videoId = ownProps.videoId;
  const video = state.entities.videos[videoId];
  const currentUser = state.entities.users[state.session.id];
  const commentButtons = state.ui.commentButtons;
  const comments = Object.values(state.entities.comments)
    .filter(comment => comment.videoId === videoId )
  // TODO: yeah...
  const commenters = state.entities.users;
  
  return {
    video,
    currentUser,
    commentButtons,
    comments,
    commenters,
  };
};

const mdp = dispatch => {
  return {
    showCommentButtons: () => dispatch(showCommentButtons()),
    hideCommentButtons: () => dispatch(hideCommentButtons()),
    spaceToPlay: boolean => dispatch(spaceToPlay(boolean)),
    createComment: data => dispatch(createComment(data)),
    deleteComment: id => dispatch(deleteComment(id)),
    addLikeOrDislike: data => dispatch(addLikeOrDislike(data)),
  };
};

export default connect(msp, mdp)(Comments);
