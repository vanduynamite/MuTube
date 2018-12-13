import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from './user_image';

class LeftSidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let homeSelected = false;
    let subsSelected = false;
    let historySelected = false;
    let likedSelected = false;
    let homeImg = window.homeGray;
    let subImg = window.subscriptionsGray;
    let historyImg = window.historyGray;
    let likedImg = window.likedVideosGray;

    let klass = 'leftsidebar-initialized';
    if (this.props.showSidebar === true) klass = 'leftsidebar-show';
    if (this.props.showSidebar === false) klass = 'leftsidebar-hide';

    switch (this.props.history.location.pathname) {
      case '/':
        homeSelected = true;
        homeImg = window.homeRed;
        break;

      case '/subscriptions':
        subsSelected = true;
        subImg = window.subscriptionsRed;
        break;

      case '/history':
        historySelected = true;
        historyImg = window.historyRed;
        break;

      case '/liked':
        likedSelected = true;
        likedImg = window.likedVideosRed;
        break;

      default:
        break;
    }

    return (
      <div id='left-sidebar-modal'>
        <div id='modal-background'
          onClick={ this.props.toggleLeftSidebar }
          className={ klass }>
        </div>
        <div id='left-sidebar' className={ klass }>

          <div id='left-main-list' className='left-list-container'>
            { this.listItem('Home', homeImg, '/', homeSelected) }
            { this.listItem('Subscriptions', subImg, '/subscriptions', subsSelected) }
          </div>

          <div id='left-library-list' className='left-list-container'>
            <div className='left-list-header'>LIBRARY</div>
              { this.listItem('History', historyImg, '/history', historySelected) }
              { this.listItem('Liked videos', likedImg, '/liked', likedSelected) }
          </div>

          <div id='left-sub-list' className='left-list-container'>
            <div className='left-list-header'>SUBSCRIPTIONS</div>
            { this.buildSubscriptionLis(this.props.subscriptions) }
          </div>

        </div>


      </div>
    );
  }

  // subcomponents

  listItem(title, image, link, selected) {
    const klass = selected
      ? 'left-list-item-selected'
      : 'left-list-item';

    return (
      <Link to={ link } className={ klass }>
        <div className='left-list-link'>
          <img src={ image } />
          <span>{ title }</span>
        </div>
      </Link>
    );
  }

  buildSubscriptionLis(subList) {
    return subList.map(sub => {
      let klass = 'left-list-item';

      if (this.props.history.location.pathname === `/users/${sub.id}`) {
        klass = 'left-list-item-selected';
      }

      return (
        <Link key={ sub.id }
          to={`/users/${sub.id}`} className={ klass } >
          <div className='left-list-link'>
            <UserImage user={ sub } small={ true }/>
          </div>
          <span className='left-list-subname'>
            { sub.username }
          </span>
        </Link>
      );
    });
  }

}

export default LeftSidebar;
