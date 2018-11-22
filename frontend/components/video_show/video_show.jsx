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
    this.toggleSubscription = this.toggleSubscription.bind(this);
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
    // TODO: Nice menu to ask user to log in
    if (!this.props.currentUser) {
      createHistory().push('/login');
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

  toggleSubscription() {
    this.ensureLoggedIn();

    if (this.currentUser.subscribedChannels.includes(this.publisher.id)) {
      this.unsubscribe(this.publisher.id);
    } else {
      this.subscribe(this.publisher.id);
    }
  }

  share() {
    // TODO: this one weird UI feature simcha hates!
    alert("hi!");
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

  // subcomponents

  firstDetail(video) {
    const detailTop = (
      <div id='first-detail-top'>
        <span id='video-title'>{video.title}</span>
      </div>
    );

    let thumbsUpImg = window.thumbsUp;
    let thumbsDownImg = window.thumbsDown;
    let likeBarColor = '#909090';

    if (video.currentUserDislikes === true) {
      thumbsDownImg = window.thumbsDownActive;
      likeBarColor = '#1363D1';
    }
    if (video.currentUserDislikes === false) {
      thumbsUpImg = window.thumbsUpActive;
      likeBarColor = '#1363D1';
    }

    const likeBarWidth = video.likes / (video.likes + video.dislikes) * 100;
    const dislikeBarWidth = video.dislikes / (video.likes + video.dislikes) * 100;

    const likesAndShares = (
      <div id='likes-shares'>
        <div id='like-container'>
          {this.likeShareComponent(this.like, thumbsUpImg, 'like-button', video.likes)}
          {this.likeShareComponent(this.dislike, thumbsDownImg, 'dislike-button', video.dislikes)}
          <div id='like-bar'
            style={{width: `${likeBarWidth}%`, backgroundColor: likeBarColor}} >
          </div>
          <div id='dislike-bar' style={{width: `${dislikeBarWidth}%`}} >
          </div>
        </div>
      </div>
    );
    // TODO: implement a share button later
    // {this.likeShareComponent(this.share, window.share, 'share-button', 'share')}

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

  likeShareComponent(action, pic, picId, text) {
    return (
      <div className='single-like-container' onClick={action}>
        <div className='highlight-circle-small'>
          <img src={pic} id={picId} />
        </div>
        <span className='like-text'>{text}</span>
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

    const detailTop = (
      <div id='second-detail-top'>
        {detailTopLeft}
        { this.detailTopRight() }
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

  detailTopRight() {
    const publisher = this.props.publisher;
    const currentUser = this.props.currentUser;

    let buttonClass = 'red-button';
    let buttonText = 'SUBSCRIBE';
    let action = () => this.props.subscribe(publisher.id);

    if (currentUser) {
      if (currentUser.subscribedChannels.includes(publisher.id)) {
        buttonClass = 'grey-button';
        buttonText = 'SUBSCRIBED';
        action = () => this.props.unsubscribe(publisher.id);
      }
    } else {
      action = () => this.ensureLoggedIn();
    }

    return (
      <div id='second-detail-right'>
        <button id='subscribe-button'
          className={ buttonClass }
          onClick={ action }>
            { buttonText }
          <div id='subscriber-count'>
            { publisher.subscriberCount }
          </div>
        </button>
      </div>
    );
  }
}

export default videoShow;
