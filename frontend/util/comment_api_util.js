export const createComment = data => {

  const videoId = data.videoId;
  const commentData = {comment: {body: data.body } };

  return $.ajax({
    method: 'POST',
    url: `/api/videos/${videoId}/comments`,
    data: commentData,
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  });
};

export const addLikeOrDislike = data => {

  const id = data.commentId;
  const is_dislike = {
    like: { is_dislike: data.isDislike }
  };

  return $.ajax({
    method: 'POST',
    url: `/api/comments/${id}/likes`,
    data: is_dislike,
  });
};
