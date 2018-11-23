import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import VideoIndexItem from '../video_index/video_index_item';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { path: this.props.path };
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);

    const videos = this.props.videos;
    this.lis = videos.map(video => this.buildVideoIndexItem(video));
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);

    if (this.props.renderSections.uploads) this.props.fetchUploadedVideos(this.props.userId);
    if (this.props.renderSections.subFeed) this.props.fetchSubscriptionVideos();
    if (this.props.renderSections.liked) this.props.fetchLikedVideos();
    if (this.props.renderSections.history) this.props.fetchHistoryVideos();
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.userId;
    const prevPath = this.state.path;

    const curId = this.props.userId;
    const curPath = this.props.path;
    if ((prevId && prevId !== curId) || prevPath !== curPath) {
      // debugger
      this.setState({ path: curPath });
      this.props.fetchUser(this.props.userId);
      if (this.props.renderSections.uploads) this.props.fetchUploadedVideos(this.props.userId);
      if (this.props.renderSections.subFeed) this.props.fetchSubscriptionVideos();
      if (this.props.renderSections.liked) this.props.fetchLikedVideos();
      if (this.props.renderSections.history) this.props.fetchHistoryVideos();
    }
  }

  ensureLoggedIn() {
    // TODO: Nice menu to ask user to log in
    if (!this.props.currentUser) {
      createHistory().push('/login');
    }
  }

  render() {

    if (!this.props.user) {
      return (<div>
        Please wait while loading
      </div>);
    }

    const userId = this.props.userId;
    const user = this.props.user;

    return (
      <div id='user-show-page'>
        { this.topSection() }
        { this.subscriptionVideos() }
        { this.likedVideos() }
        { this.history() }
        { this.uploads() }
      </div>
    );
  }
  // { this.subscriptions() }

  // subcomponents

  topSection() {
    const user = this.props.user;

    return (
      <div id='user-header-full-width'>
        <div id='user-header-centered'>
          <div id='user-header-left'>
            <UserImage user={ user } large={ true }/>
            <div id='user-full-name'>
              { `${user.firstName} ${user.lastName}` }
            </div>
          </div>
          <div id='user-header-right'>
            { this.detailTopRight() }
          </div>
        </div>
      </div>
    );
  }

  detailTopRight() {
    const publisher = this.props.user;
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

  // subscriptions() {
  //   if (!this.props.path.includes('/users')) return this.blankSection();
  //   if (!this.props.ownPage) return this.blankSection();
  //
  //   return (
  //     <div id='user-subscriptions' className='users-page-section-container'>
  //       <div className='users-page-title'>
  //         Uploads
  //       </div>
  //       <div className='users-page-content-container'>
  //         { this.lis }
  //       </div>
  //     </div>
  //   );
  // }

  uploads() {
    if (!this.props.renderSections.uploads) return this.blankSection();

    return (
      <div id='user-uploads' className='users-page-section-container'>
        <div className='users-page-title'>
          Uploads
        </div>
        <div className='users-page-content-container'>
          { this.lis }
        </div>
      </div>
    );
  }

  subscriptionVideos() {
    if (!this.props.renderSections.subFeed) return this.blankSection();

    return (
      <div id='user-subscription-videos' className='users-page-section-container'>
        <div className='users-page-title'>
          Subscription feed
        </div>
        <div className='users-page-content-container'>
          { this.lis }
        </div>
      </div>
    );
  }

  likedVideos() {
    if (!this.props.renderSections.liked) return this.blankSection();

    return (
      <div id='user-liked-videos' className='users-page-section-container'>
        <div className='users-page-title'>
          Liked videos
        </div>
        <div className='users-page-content-container'>
          { this.lis }
        </div>
      </div>
    );
  }

  history() {
    if (!this.props.renderSections.history) return this.blankSection();

    return (
      <div id='user-history' className='users-page-section-container'>
        <div className='users-page-title'>
          History
        </div>
        <div className='users-page-content-container'>
          { this.lis }
        </div>
      </div>
    );
  }

  blankSection() {
    return (<></>);
  }

  buildVideoIndexItem(video) {
    const user = this.props.users[video.uploaderId];

    return (
      <VideoIndexItem
        key={video.id}
        video={video}
        user={user} />
    );
  }

}

export default UserShow;
