import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import VideoPlayer from './video_player_container';
import RightSidebar from './rightsidebar_container';
import Comments from './comments_container';

class videoShow extends React.Component {

  constructor(props) {
    super(props);
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
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
    if (!this.props.currentUser) { createHistory().push('/login'); }
  }

  firstDetail(video) {
    const detailTop = (
      <div id='first-detail-top'>
        <span id='video-title'>{video.title}</span>
      </div>
    );

    const likesAndShares = (
      <div id='likes-shares'>
        <div className='highlight-circle-small'>
          <img src='/thumbs-up.png' id='like-button' />
        </div>
        <span className='like-text'>likes</span>
        <div className='highlight-circle-small'>
          <img src='/thumbs-down.png' id='dislike-button' />
        </div>
        <span className='like-text'>dislikes</span>
        <div className='highlight-circle-small'>
          <img src='/share.png' id='dislike-button' />
        </div>
        <span className='like-text'>share</span>
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
        <UserImage user={publisher} />
        <div id='channel-and-published'>
          <span id='publisher'>{publisher.username}</span>
          <span id='published-on'>{`Published on ${dateStr}`}</span>
        </div>
      </div>
    );

    const detailTopRight = (
      <div id='second-detail-right'>
        <button className='red-button'>SUBSCRIBE</button>
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
