import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';

class CommentItem extends React.Component {

  constructor(props) {
    super(props);

    this.addLike = this.addLike.bind(this);
    this.addDislike = this.addDislike.bind(this);
    this.submit = this.submit.bind(this);
    this.likeSection = this.likeSection.bind(this);
    this.commentMenu = this.commentMenu.bind(this);
    this.userImageLink = this.userImageLink.bind(this);
    this.mainCommentContent = this.mainCommentContent.bind(this);
    this.toggleOverlayMenu = this.toggleOverlayMenu.bind(this);
  }

  componentWillUnmount() {
    if (this.props.showDeleteButton) this.toggleOverlayMenu();
    document.removeEventListener("click", this.toggleOverlayMenu);
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

  toggleOverlayMenu() {
    this.props.toggleDeleteComment(this.props.comment.id);
  }

  submit(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
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

  // subcomponents

  userImageLink() {
    return (
      <Link to={`/users/${this.props.commenter.id}`}
        className='single-comment-user-image' >
        <UserImage user={ this.props.commenter } />
      </Link>
    );
  }

  mainCommentContent() {
    const commenter = this.props.commenter;
    const comment = this.props.comment;

    return (
      <div className='single-comment-details-container'>

        <div className='single-comment-user-and-time'>
          <Link to={`/users/${commenter.id}`} >
            <div className='single-comment-username'>
              {commenter.username}
            </div>
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
    if (this.props.currentUser &&
      this.props.currentUser.id === this.props.comment.userId) {

      let overlayMenuStatus = 'overlay-menu-inactive';

      if (this.props.showDeleteButton) {
        overlayMenuStatus = 'overlay-menu-active';
        document.addEventListener("click", this.toggleOverlayMenu);
      } else {
        document.removeEventListener("click", this.toggleOverlayMenu);
      }


      return (
        <div className='single-comment-right'>

          <div className='single-comment-menu'
            onClick={ this.toggleOverlayMenu } />

          <form onSubmit={ this.submit }
            className={`${ overlayMenuStatus } comment-menu`}>
            <button>Delete</button>
          </form>

        </div>
      );

    } else {
      return <></>;
    }

  }

}

export default CommentItem;
