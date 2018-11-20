import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';

const CommentItem = (props) => {
  const comment = props.comment;
  const user = props.user;

  let thumbsUpImg = window.thumbsUp;
  let thumbsDownImg = window.thumbsDown;
  let likeBarColor = '#909090';

  if (comment.currentUserDislikes === true) {
    thumbsDownImg = window.thumbsDownActive;
    likeBarColor = '#1363D1';
  }
  if (comment.currentUserDislikes === false) {
    thumbsUpImg = window.thumbsUpActive;
    likeBarColor = '#1363D1';
  }

  const addLike = () => {
    const data = {
      commentId: comment.id,
      isDislike: false,
    };
    props.addLikeOrDislike(data);
  };

  const addDislike = () => {
    const data = {
      commentId: comment.id,
      isDislike: true,
    };
    props.addLikeOrDislike(data);
  };

  const likesSection = (
    <div className='comment-like-container'>

      <div className='single-comment-like-container'
        onClick={ addLike }>

        <div className='highlight-circle-smaller'>
          <img src={thumbsUpImg} className='comment-like-thumb' />
        </div>
        <div className='comment-like-text'>{ comment.likes }</div>
      </div>

      <div className='single-comment-like-container'
        onClick={ addDislike }>

        <div className='highlight-circle-smaller'>
          <img src={thumbsDownImg} className='comment-dislike-thumb' />
        </div>
        <div className='comment-like-text'>{ comment.dislikes }</div>
      </div>

    </div>
  );

  return (
    <div className='single-comment'>

      <Link to={`/users/${user.id}`}
        className='single-comment-user-image' >
        <UserImage user={user} />
      </Link>

      <div className='single-comment-details-container'>
        <div className='single-comment-user-and-time'>
          <div className='single-comment-username'>{user.username}</div>
          <div className='single-comment-created-time'>{comment.createdTimeAgo}</div>
        </div>
        <div className='single-comment-body'>{comment.body}</div>
        {likesSection}
      </div>

    </div>
  );
};

export default CommentItem;
