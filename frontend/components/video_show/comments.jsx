import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import createHistory from 'history/createHashHistory';
import CommentItem from './comment_item_container';


class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      oldestCommentFirst: true
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
    this.props.spaceToPlay(false);
  }

  reactivateSpaceToPlay() {
    this.props.spaceToPlay(true);
  }

  changeSortOrder() {
    this.setState({ oldestCommentFirst: !this.state.oldestCommentFirst });
  }

  ensureLoggedIn() {
    if (!this.props.currentUser) {
      createHistory().push('/login');
    } else {
      this.props.showCommentButtons();
    }
  }

  cancelComment() {
    this.setState({ body: '' });
    this.props.hideCommentButtons();
    let el = document.querySelector( ':focus' );
    if( el ) el.blur();
  }

  submit(e) {
    e.preventDefault();
    if (this.state.body === '') { return; }

    const data = Object.assign(this.state, { videoId: this.props.video.id });
    this.props.createComment(data);
    this.cancelComment();
  }

  render() {
    const videoId = this.props.videoId;

    return (
      <div id='video-comments' className='video-detail-section'>
        { this.commentTop() }
        { this.newComment() }
        <div className='comment-ul'>
          { this.commentLis() }
        </div>
      </div>
    );
  }

  // subcomponents

  commentTop() {
    const numComments = this.props.video.commentIds.length;
    const commentDescriptor = numComments === 1 ? 'Comment' : 'Comments';
    const sortIcon = this.state.oldestCommentFirst
      ? window.sort
      : window.sortDesc;
    const sortName = this.state.oldestCommentFirst
      ? 'SORTING BY OLDEST'
      : 'SORTING BY NEWEST'

    return (
      <div id='comments-top'>
        <span id='comment-count'>{`${numComments} ${commentDescriptor}`}</span>
        <button id='sort-button' onClick={ this.changeSortOrder.bind(this) }>
          <img id='sort-img' src={ sortIcon } />
          { sortName }
        </button>
      </div>
    );

  }

  newComment() {
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

    return (
      <div id='new-comment-container'>

        <UserImage user={this.props.currentUser} />

        <form id='new-comment-form' autoComplete='off'
          onSubmit={ this.submit }>
          <input
            autoComplete='false'
            name='hidden'
            type='text'
            style={{display:'none'}} />
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
  }

  commentLis() {
    const commentIds = this.state.oldestCommentFirst
      ? this.props.video.commentIds.sort( (a,b) => a - b )
      : this.props.video.commentIds.sort( (a,b) => b - a );

    return commentIds.map(id => <CommentItem key={ id } commentId={ id } />);
  }

}

export default Comment;
