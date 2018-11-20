import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = (props) => {
  const video = props.video;
  const user = props.user;

  return (
    <div className='video-thumbnail'>

      <Link to={`/videos/${video.id}`}
        className='video-thumbnail-image-container' >

        <video className='video-thumbnail-image'
          src={ video.videoUrl }
          type="video/mp4" />

      </Link>

      <div className='video-thumb-details'>

        <div className='video-thumb-title'>
          <Link to={`/videos/${video.id}`}
            className='video-thumb-title-link' >
            {video.title}
          </Link>
        </div>

        <div className='video-thumb-uploader'>
          <Link to={`/users/${user.id}`}
            className='video-thumb-uploader-link' >
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
