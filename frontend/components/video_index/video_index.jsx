import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchVideos();
  }

  render() {
    const videos = this.props.videos;
    const lis = videos.map(video => <VideoIndexItem key={video.id} video={video} />);

    return (
    <div id='video-index'>
      <span className='index-title'>Recommended</span>
      <ul>
        {lis}
      </ul>
    </div>);

  }

}

export default VideoIndex;
