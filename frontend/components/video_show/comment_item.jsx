import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';

class CommentItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      overlayShown: false,
    };

    this.addLike = this.addLike.bind(this);
    this.addDislike = this.addDislike.bind(this);
    this.submit = this.submit.bind(this);
    this.likeSection = this.likeSection.bind(this);
    this.commentMenu = this.commentMenu.bind(this);
    this.userImageLink = this.userImageLink.bind(this);
    this.mainCommentContent = this.mainCommentContent.bind(this);
    this.toggleOverlayMenu = this.toggleOverlayMenu.bind(this);
  }

  addLike() {
    const data = {
      commentId: this.props.comment.id,
      isDislike: false,
    };

    this.props.addLikeOrDislike(data);
  }

  addDislike() {
    const data = {
      commentId: this.props.comment.id,
      isDislike: true,
    };

    this.props.addLikeOrDislike(data);
  }

  submit(e) {
    e.preventDefault();
    alert("watch out!");
    console.log("PRETTY SURE THIS IS DELETING THE WRONG COMMENT!");
    this.props.deleteComment(this.props.comment.id);
  }

  likeSection() {
    const comment = this.props.comment;

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

    return (
      <div className='comment-like-container'>

        <div className='single-comment-like-container'
          onClick={ this.addLike }>

          <div className='highlight-circle-smaller'>
            <img src={ thumbsUpImg } className='comment-like-thumb' />
          </div>
          <div className='comment-like-text'>{ comment.likes }</div>
        </div>

        <div className='single-comment-like-container'
          onClick={ this.addDislike }>

          <div className='highlight-circle-smaller'>
            <img src={ thumbsDownImg } className='comment-dislike-thumb' />
          </div>
          <div className='comment-like-text'>{ comment.dislikes }</div>
        </div>

      </div>
    );
  }

  commentMenu() {
    const overlayMenuStatus = this.state.overlayShown
      ? 'overlay-menu-active'
      : 'overlay-menu-inactive';

    return (
      <div className='single-comment-right'>

        <div className='single-comment-menu'
          onClick={ this.toggleOverlayMenu } />

        <form onSubmit={ this.submit }
          className={`${ overlayMenuStatus } comment-menu`}>
          <button>Delete</button>
        </form>

        <div className={`${ overlayMenuStatus } overlay-menu-modal`} />

      </div>

    );
  }

  toggleOverlayMenu() {
    this.setState({ overlayShown: !this.state.overlayShown });
  }

  userImageLink() {
    return (
      <Link to={`/users/${this.props.user.id}`}
        className='single-comment-user-image' >
        <UserImage user={ this.props.user } />
      </Link>
    );
  }

  mainCommentContent() {
    const user = this.props.user;
    const comment = this.props.comment;

    return (
      <div className='single-comment-details-container'>

        <div className='single-comment-user-and-time'>
          <Link to={`/users/${user.id}`} >
            <div className='single-comment-username'>{user.username}</div>
          </Link>
          <div className='single-comment-created-time'>
            {comment.createdTimeAgo}
          </div>
        </div>

        <div className='single-comment-body'>
          {comment.body}
        </div>

        { this.likeSection() }

      </div>
    );
  }

  render() {
    const comment = this.props.comment;
    const user = this.props.user;

    return (
      <div className='single-comment'>

        <div className='single-comment-left'>
          { this.userImageLink() }
          { this.mainCommentContent() }
        </div>

        { this.commentMenu() }

      </div>
    );
  }
}

export default CommentItem;
