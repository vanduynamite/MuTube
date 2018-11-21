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
    const numComments = this.props.comments.length;
    const commentDescriptor = numComments === 1 ? 'Comment' : 'Comments';

    // TODO: implement a comment sort button
    // return (
    //   <div id='comments-top'>
    //     <span id='comment-count'>{`${numComments} ${commentDescriptor}`}</span>
    //     <button id='sort-button'>
    //       <img id='sort-img' src={ window.sort } />
    //       SORT BY
    //     </button>
    //   </div>
    // );

    return (
      <div id='comments-top'>
        <span id='comment-count'>{`${numComments} ${commentDescriptor}`}</span>
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
  }

  commentLis() {
    const comments = this.props.comments;
    const commenters = this.props.commenters;
    const addLikeOrDislike = this.props.addLikeOrDislike;
    const deleteComment = this.props.deleteComment;

    return comments.map( comment => {
      return (
        <CommentItem
          key={ comment.id }
          commentId={ comment.id }
        />
      );
    });
  }

}

export default Comment;
