import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import VideoPlayer from './video_player_container';
import RightSidebar from './rightsidebar_container';
import Comments from './comments_container';
import createHistory from 'history/createHashHistory';

class videoShow extends React.Component {

  constructor(props) {
    super(props);
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.share = this.share.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    if (this.props.video) { this.props.addView(this.props.videoId); }
  }

  componentDidUpdate(prevProps) {
    if (parseInt(prevProps.match.params.videoId) !== parseInt(this.props.videoId)) {
      this.props.fetchVideo(this.props.videoId);
      this.props.addView(this.props.videoId);
    }
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
    }
  }

  like() {
    this.ensureLoggedIn();

    const data = {
      videoId: this.props.videoId,
      isDislike: false,
    };
    this.props.addLikeOrDislike(data);
  }

  dislike() {
    this.ensureLoggedIn();

    const data = {
      videoId: this.props.videoId,
      isDislike: true,
    };
    this.props.addLikeOrDislike(data);
  }

  subscribe() {
    this.ensureLoggedIn();
  }

  share() {
    alert("hi!");
  }

  likeShareComponent(action, pic, picId, text) {

    return (
      <div className='like-container' onClick={action}>
        <div className='highlight-circle-small'>
          <img src={pic} id={picId} />
        </div>
        <span className='like-text'>{text}</span>
      </div>
    );
  }

  firstDetail(video) {
    const detailTop = (
      <div id='first-detail-top'>
        <span id='video-title'>{video.title}</span>
      </div>
    );

    let thumbsUpImg = window.thumbsUp;
    let thumbsDownImg = window.thumbsDown;

    if (video.currentUserDislikes === true) {
      thumbsDownImg = window.thumbsDownActive;
    }
    if (video.currentUserDislikes === false) {
      thumbsUpImg = window.thumbsUpActive;
    }
    
    const likesAndShares = (
      <div id='likes-shares'>
        {this.likeShareComponent(this.like, thumbsUpImg,
          'like-button', video.likes)}
        {this.likeShareComponent(this.dislike, thumbsDownImg,
          'dislike-button', video.dislikes)}
        {this.likeShareComponent(this.share, window.share,
          'share-button', 'share')}
      </div>
    );

    const detailBottom = (
      <div id='first-detail-bottom'>
        <span id='video-views'>{`${video.views} views`}</span>
        {likesAndShares}
      </div>
    );

    return (
      <div className='video-detail-section'>
        {detailTop}
        {detailBottom}
      </div>
    );
  }

  secondDetail(video, publisher) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(video.createdAt);
    const dateStr = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    const detailTopLeft = (
      <div id='second-detail-left'>
        <Link to={`/users/${publisher.id}`}>
          <UserImage user={publisher} />
        </Link>
        <div id='channel-and-published'>
          <Link to={`/users/${publisher.id}`}>
            <span id='publisher'>{publisher.username}</span>
          </Link>
          <span id='published-on'>{`Published on ${dateStr}`}</span>
        </div>
      </div>
    );

    const detailTopRight = (
      <div id='second-detail-right'>
        <button className='red-button'
          onClick={this.subscribe}>SUBSCRIBE</button>
      </div>
    );

    const detailTop = (
      <div id='second-detail-top'>
        {detailTopLeft}
        {detailTopRight}
      </div>
    );

    const detailBottom = (
      <div id='second-detail-bottom'>
        <span id='video-description'>{video.description}</span>
      </div>
    );

    return (
      <div className='video-detail-section'>
        {detailTop}
        {detailBottom}
      </div>
    );
  }

  render() {

    if (!this.props.video) {
      return (<div>
        Please wait while loading
      </div>);
    }

    const video = this.props.video;
    const publisher = this.props.publisher;

    return (
      <div id='video-show'>
        <div id='video-show-container'>
          <VideoPlayer videoId={video.id} />
          { this.firstDetail(video) }
          { this.secondDetail(video, publisher) }
          <Comments videoId={video.id} />
        </div>
        <RightSidebar />
      </div>
    );

  }

}

export default videoShow;
