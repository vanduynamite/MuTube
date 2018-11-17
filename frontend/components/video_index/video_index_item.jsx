import React from 'react';
import { Link } from 'react-router-dom';
// import Thumbnail from 'react-native-thumbnail-video';

const VideoIndexItem = (props) => {
  const video = props.video;
  const user = props.user;
  // <Thumbnail
  //   url={video.videoUrl}
  //   className='video-thumbnail-image' />
  return (
    <div className='video-thumbnail'>

      <Link to={`/videos/${video.id}`}>
        <video className='video-thumbnail-image'>
          <source src={ video.videoUrl } type="video/mp4" />
        </video>
      </Link>

      <div className='video-thumb-details'>

        <div className='video-thumb-title'>
          <Link to={`/videos/${video.id}`}>
            {video.title}
          </Link>
        </div>

        <div className='video-thumb-uploader'>
          <Link to={`/users/${user.id}`}>
            {user.username}
          </Link>
        </div>

        <div className='video-thumb-views'>
          <Link to={`/videos/${video.id}`}>
            {`${video.views} views • ${video.createdTimeAgo}`}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VideoIndexItem;
