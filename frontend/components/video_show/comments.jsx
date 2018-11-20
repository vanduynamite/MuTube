import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import createHistory from 'history/createHashHistory';
import CommentItem from './comment_item';


class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.submit = this.submit.bind(this);
    this.deactivateSpaceToPlay = this.deactivateSpaceToPlay.bind(this);
    this.reactivateSpaceToPlay = this.reactivateSpaceToPlay.bind(this);
    this.buildCommentLis = this.buildCommentLis.bind(this);
  }

  componentDidMount() {
    this.props.hideCommentButtons();
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  deactivateSpaceToPlay() {
    this.props.spaceToPlay(false);
  }

  reactivateSpaceToPlay() {
    this.props.spaceToPlay(true);
  }

  ensureLoggedIn() {
    // TODO: remove alerts

    if (!this.props.currentUser) {
      createHistory().push('/login');
      // const message = 'This requires you to be logged in. Would you like to log in now?';
      // const res = confirm(message);
      // if (res) {
      // } else {
      //   return false;
      // }
    } else {
      this.props.showCommentButtons();
    }
  }

  cancelComment() {
    this.setState({ body: '' });
    this.props.hideCommentButtons();
  }

  submit(e) {
    e.preventDefault();
    if (this.state.body === '') { return; }

    const data = Object.assign(this.state, { videoId: this.props.video.id });
    this.setState({ body: '' });

    this.props.createComment(data);
  }

  buildCommentLis() {
    const comments = this.props.comments;
    const commenters = this.props.commenters;
    const addLikeOrDislike = this.props.addLikeOrDislike;

    return comments.map( comment => {
      return (
        <CommentItem
          key={ comment.id }
          comment={ comment }
          user={ commenters[comment.userId] }
          addLikeOrDislike={ addLikeOrDislike }
        />
      );
    });
  }

  render() {
    const videoId = this.props.videoId;
    const currentUser = this.props.currentUser;
    const lis = this.buildCommentLis();

    const commentTop = (
      <div id='comments-top'>
        <span id='comment-count'>0 Comments</span>
        <button id='sort-button'>
          <img id='sort-img' src={ window.sort }></img>
          SORT BY
        </button>
      </div>
    );

    const cancelButtonClass = this.props.commentButtons
      ? 'comment-button'
      : 'comment-button hidden-button';
    let submitButtonClass = cancelButtonClass;
    let submitButtonDisabled = true;
    let fieldClass = '';

    if (this.state.body !== '') {
      submitButtonClass += ' comment-submit-enabled';
      submitButtonDisabled = false;
    } else {
      submitButtonClass += ' comment-submit-disabled';
    }

    const newComment = (
      <div id='new-comment-container'>

          <UserImage user={currentUser} />

          <form id='new-comment-form' onSubmit={ this.submit }>

            <input type='text'
              id='new-comment-field'
              placeholder='Add a public comment...'
              onClick={ this.ensureLoggedIn }
              onFocus={ this.deactivateSpaceToPlay }
              onBlur={ this.reactivateSpaceToPlay }
              onChange={ this.updateField('body') }
              value={ this.state.body } >
            </input>

            <div id='comment-buttons'>
              <button onClick={ this.submit }
                id='new-comment-submit'
                disabled={submitButtonDisabled}
                className={submitButtonClass}>COMMENT</button>
              <button onClick={ this.cancelComment }
                id='new-comment-cancel'
                className={cancelButtonClass}>CANCEL</button>
            </div>

          </form>

      </div>
    );

    return (
      <div id='video-comments' className='video-detail-section'>
        {commentTop}
        {newComment}
        <div className='comment-ul'>
          {lis}
        </div>
      </div>
    );
  }

}

export default Comment;
