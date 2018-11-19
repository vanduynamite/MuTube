import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import createHistory from 'history/createHashHistory';


class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.submit = this.submit.bind(this);
    this.deactivateSpaceToPlay = this.deactivateSpaceToPlay.bind(this);
    this.reactivateSpaceToPlay = this.reactivateSpaceToPlay.bind(this);
  }

  componentDidMount() {
    this.props.hideCommentButtons();
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  deactivateSpaceToPlay() {
    console.log('off!');
    this.props.spaceToPlay(false);
  }

  reactivateSpaceToPlay() {
    console.log('on!');
    this.props.spaceToPlay(true);
  }

  ensureLoggedIn() {
    if (!this.props.currentUser) {
      const message = 'This requires you to be logged in. Would you like to log in now?';
      const res = confirm(message);
      if (res) {
        createHistory().push('/login');
      } else {
        return false;
      }
    } else {
      this.props.showCommentButtons();
    }
  }

  cancelComment() {
    this.props.hideCommentButtons();
  }

  submit(e) {
    e.preventDefault();
    if (this.state.comment === '') { return; }

    alert("submit");
  }

  render() {
    const videoId = this.props.videoId;
    const currentUser = this.props.currentUser;

    const commentTop = (
      <div id='comments-top'>
        <span id='comment-count'>0 Comments</span>
        <button id='sort-button'>
          <img id='sort-img' src='/sort.png'></img>
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

    if (this.state.comment !== '') {
      submitButtonClass += ' comment-submit-enabled';
      submitButtonDisabled = false;
    } else {
      submitButtonClass += ' comment-submit-disabled';
    }

    const newComment = (
      <div id='new-comment-container'>

          <UserImage user={currentUser} />

          <form id='new-comment-form'>

            <input type='text'
              id='new-comment-field'
              placeholder='Add a public comment...'
              onClick={ this.ensureLoggedIn }
              onFocus={ this.deactivateSpaceToPlay }
              onBlur={ this.reactivateSpaceToPlay }
              onChange={ this.updateField('comment') }>
            </input>

            <div id='comment-buttons'>
              <button onClick={this.submit}
                id='new-comment-submit'
                disabled={submitButtonDisabled}
                className={submitButtonClass}>COMMENT</button>
              <button onClick={this.cancelComment}
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
      </div>
    );
  }

}

export default Comment;
