import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';
import VideoIndexItem from '../video_index/video_index_item';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    const prevId = ownProps.match.params.userId || state.session.id;

    // if the path changed or the user changed

    // if (this.props.userId !== prevProps.match.params.userId) {
    //   this.props.fetchUser(this.props.userId);
    // }
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
        { this.subscriptions() }
        { this.likedVideos() }
        { this.uploads() }
        { this.subscriptionVideos() }
        { this.history() }
      </div>
    );
  }

  // subcomponents

  topSection() {
    const user = this.props.user;

    return (
      <div id='user-header-full-width'>
        <div id='user-header-centered'>
          <UserImage user={ user } large={ true }/>
          <div id='user-full-name'>
            {`${user.firstName} ${user.lastName}`}
          </div>
        </div>
      </div>
    );
  }

  subscriptions() {
    if (!this.props.path.includes('/users')) return this.blankSection();
    if (!this.props.ownPage) return this.blankSection();

    return (
      <div id='user-subscriptions'>
        {`Subscriptions for user id ${this.props.userId}`}
      </div>
    );
  }

  likedVideos() {
    if (this.props.path !== '/liked' && !this.props.path.includes('/users')) {
      return this.blankSection();
    }
    if (!this.props.ownPage) return this.blankSection();

    return (
      <div id='user-liked-videos'>
        {`Liked videos for user id ${this.props.userId}`}
      </div>
    );
  }

  uploads() {
    if (!this.props.path.includes('/users')) return this.blankSection();

    return (
      <div id='user-uploads'>
        {`Uploads for user id ${this.props.userId}`}
      </div>
    );
  }

  subscriptionVideos() {
    if (this.props.path !== '/subscriptions') return this.blankSection();

    return (
      <div id='user-subscription-videos'>
        {`Subscription videos for user id ${this.props.userId}`}
      </div>
    );
  }

  history() {
    if (this.props.path !== '/history') return this.blankSection();

    return (
      <div id='user-history'>
        {`History for user id ${this.props.userId}`}
      </div>
    );
  }

  blankSection() {
    return (<></>);
  }

}

export default UserShow;
