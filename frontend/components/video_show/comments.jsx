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
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  ensureLoggedIn() {
    if (!this.props.currentUser) { createHistory().push('/login'); }
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

    const newComment = (
      <div id='new-comment'>
        <UserImage user={currentUser} />
        <form>
          <input type='text'
            placeholder='Add a public comment...'
            onClick={this.ensureLoggedIn}
            onChange={this.updateField('comment')}>
          </input>
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
