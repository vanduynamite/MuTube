import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const buildLis = (list) => {
    return list.map(li => <li>{li}</li>)
  };

  const mainLis = buildLis([
    'Home',
    'Trending',
    'Subscriptions',
  ]);
  const libraryLis = buildLis([
    'History',
    'Liked videos'
  ]);
  const subscriptionsLis = buildLis([
    'Channel1',
    'Channel2',
    'Channel3',
    'Channel4',
    'Channel5',
    'Channel6',
  ]);


  // <div className="modal-child" onClick={e => e.stopPropagation()}>
  //   stuff
  // </div>

  return (
    <div id='left-sidebar-modal'>
      <div id='modal-background' onClick={props.toggleLeftSidebar}>
      </div>
      <div id='left-sidebar'>
        <ul>
          {mainLis}
        </ul>
        <span>LIBRARY</span>
        <ul>
          {libraryLis}
        </ul>
        <span>SUBSCRIPTIONS</span>
        <ul>
          {subscriptionsLis}
        </ul>
      </div>


    </div>
  );

};
