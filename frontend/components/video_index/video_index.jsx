import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

  constructor(props) {
    super(props);
    this.buildVideoIndexItem = this.buildVideoIndexItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos({ search: this.props.search });
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

  render() {
    const videos = this.props.videos;
    const lis = videos.map(video => this.buildVideoIndexItem(video));

    const title = this.props.currentUser ? ` for you, ${this.props.currentUser.firstName}` : '';

    return (
    <div id='video-index'>
      <div id='video-index-container'>
        <span className='index-title'>{`Recommended${title}`}</span>
        <ul>
          {lis}
        </ul>
      </div>
    </div>);

  }

}

export default VideoIndex;
