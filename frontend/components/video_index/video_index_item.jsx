import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = (props) => {
  const video = props.video;

  return (
    <div className='video-thumbnail'>
      <Link to={`/videos/${video.id}`}>
        <div className='video-thumbnail-image'>
            {`Video ${video.id}!`}
        </div>
      </Link>
      <div className='video-thumb-details'>

        <div className='video-thumb-title'>
          <Link to={`/videos/${video.id}`}>
            {video.title}
          </Link>
        </div>

        <div className='video-thumb-uploader'>
          <Link to={`/users/${video.uploaderId}`}>
            {video.uploaderName}
          </Link>
        </div>

        <div className='video-thumb-views'>
          <Link to={`/videos/${video.id}`}>
            {`${video.views} • ${video.createdTimeAgo}`}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VideoIndexItem;
