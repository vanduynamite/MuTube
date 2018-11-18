import React from 'react';
import { Link } from 'react-router-dom';

class videoShow extends React.Component {

  constructor(props) {
    super(props);
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

  videoElement(video) {
    return (
      <div id='video-player'>
        <video id='video' autoPlay={false}>
          <source src={ video.videoUrl } type='video/mp4' />
        </video>
        <div id='video-controls'>
        </div>
      </div>
    );
  }

  firstDetail(video) {
    return (
      <div className='video-detail-section'>
        <div id='first-detail-top'>
          <span id='video-title'>{video.title}</span>
        </div>
        <div id='first-detail-bottom'>
          <span id='video-views'>{`${video.views} views`}</span>
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
        </div>
      </div>
    );
  }

  secondDetail(video, publisher) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(video.createdAt);
    const dateStr = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
      <div className='video-detail-section'>
        <div id='second-detail-top'>
          <div id='second-detail-left'>
            {publisher.username.slice(0,1).toUpperCase()}
            <div id='channel-and-published'>
              <span id='publisher'>{publisher.username}</span>
              <span id='published-on'>{`Published on ${dateStr}`}</span>
            </div>
          </div>
          <div id='second-detail-right'>
            <button className='red-button'>SUBSCRIBE</button>
          </div>
        </div>
        <div id='second-detail-bottom'>
          <span id='video-description'>{video.description}</span>
        </div>
      </div>
    );
  }

  comments(video) {
    return (
      <div>
        comments
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
          { this.videoElement(video) }
          { this.firstDetail(video) }
          { this.secondDetail(video, publisher) }
          { this.comments(video) }
        </div>
        <div id='up-next-container'>
          Up Next
        </div>
      </div>
    );

  }

}

export default videoShow;
