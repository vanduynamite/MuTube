import React from 'react';
import { Link } from 'react-router-dom';
import RightSidebarItem from './rightsidebar_item';

class RightSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.buildSidebarItems = this.buildSidebarItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  buildSidebarItems(video) {
    const user = this.props.users[video.uploaderId];

    return (
      <RightSidebarItem
        key={video.id}
        video={video}
        user={user} />
    );
  }

  render() {
    const videos = this.props.videos;
    const lis = videos.map(video => this.buildSidebarItems(video));

    return (
      <div id='up-next-container'>
        <div id='right-sidebar-container'>
          <span id='right-sidebar-title'>Up next</span>
          <ul>
            {lis}
          </ul>
        </div>
      </div>
    );
  }

}

export default RightSidebar;
