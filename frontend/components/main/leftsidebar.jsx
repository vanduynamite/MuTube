import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from './user_image';

export default (props) => {

  const listItem = (title, image, link, selected) => {
    const klass = selected
      ? 'left-list-item-selected'
      : 'left-list-item';

    return (
      <Link to={ link } className={ klass }>
        <div className='left-list-link'>
          <img src={ image } />
          <div>{ title }</div>
        </div>
      </Link>
    );
  };

  const buildSubscriptionLis = subList => {
    return subList.map(sub => {
      const selected = false;
      const klass = selected
        ? 'left-list-item-selected'
        : 'left-list-item';
      return (
        <Link key={ sub.id }
          to={`/users/${sub.id}`} className={ klass } >
          <div className='left-list-link'>
            <UserImage user={ sub } small={ true }/>
          </div>
          <div className='left-list-subname'>
            { sub.username }
          </div>
        </Link>
      );
    });
  };

  const homeSelected = true;
  const subsSelected = false;
  const historySelected = false;
  const likedSelected = false;

  const homeImg = homeSelected
    ? window.homeRed
    : window.homeGray;
  const subImg = subsSelected
    ? window.subscriptionsRed
    : window.subscriptionsGray;
  const historyImg = historySelected
    ? window.historyRed
    : window.historyGray;
  const likedImg = likedSelected
    ? window.likedVideosRed
    : window.likedVideosGray;

  return (
    <div id='left-sidebar-modal'>
      <div id='modal-background' onClick={props.toggleLeftSidebar}>
      </div>
      <div id='left-sidebar'>

        <div id='left-main-list' className='left-list-container'>
          { listItem('Home', homeImg, '/', homeSelected) }
          { listItem('Subscriptions', subImg, '/', subsSelected) }
        </div>

        <div id='left-library-list' className='left-list-container'>
          <div className='left-list-header'>LIBRARY</div>
            { listItem('History', historyImg, '/', historySelected) }
            { listItem('Liked videos', likedImg, '/', likedSelected) }
        </div>

        <div id='left-sub-list' className='left-list-container'>
          <div className='left-list-header'>SUBSCRIPTIONS</div>
          { buildSubscriptionLis(props.subscriptions) }
        </div>

      </div>


    </div>
  );

};
