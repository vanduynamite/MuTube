import * as CommentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_LIKE = 'RECEIVE_COMMENT_LIKE';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = ({ videoId, comments, commentId }) => {
  return {
    type: RECEIVE_COMMENT,
    videoId,
    comments,
    commentId,
  };
};

const receiveCommentLike = ({ comments }) => {
  return {
    type: RECEIVE_COMMENT_LIKE,
    comments,
  }
}

const removeComment = ({ videoId, commentId }) => {
  return {
    type: REMOVE_COMMENT,
    videoId,
    commentId,
  }
}


const receiveCommentErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const createComment = data => dispatch => {
  return CommentAPI.createComment(data).then(
    payload => dispatch(receiveComment(payload)),
    errors => dispatch(receiveCommentErrors(errors))
  );
};

export const deleteComment = id => dispatch => {
  return CommentAPI.deleteComment(id).then(
    payload => dispatch(removeComment(payload)),
    errors => dispatch(receiveCommentErrors(errors))
  );
};

export const addLikeOrDislike = data => dispatch => {
  return CommentAPI.addLikeOrDislike(data).then(
    payload => dispatch(receiveCommentLike(payload)),
    errors => dispatch(receiveCommentErrors(errors))
  );
};
