import { connect } from 'react-redux';
import CommentItem from './comment_item';
import {
  deleteComment,
  addLikeOrDislike,
} from '../../actions/comment_actions';
import {
  toggleDeleteComment
} from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  const commentId = ownProps.commentId;
  const comment = state.entities.comments[commentId];
  const commenter = state.entities.users[comment.userId];
  const currentUser = state.entities.users[state.session.id];
  const showDeleteButton = state.ui.showDeleteButton === commentId;

  return {
    comment,
    commenter,
    currentUser,
    showDeleteButton,
  };
};

const mdp = dispatch => {
  return {
    toggleDeleteComment: commentId => dispatch(toggleDeleteComment(commentId)),
    deleteComment: id => dispatch(deleteComment(id)),
    addLikeOrDislike: data => dispatch(addLikeOrDislike(data)),
  };
};

export default connect(msp, mdp)(CommentItem);
