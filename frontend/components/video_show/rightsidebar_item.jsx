import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebarItem = (props) => {
  const video = props.video;
  const user = props.user;

  return (
    <div id='sidebar-thumbnails'>

      <Link
        className='sidebar-image-container'
        to={`/videos/${video.id}`}>
        <video className='sidebar-thumbnail-image'>
          <source src={ video.videoUrl } type='video/mp4' />
        </video>
      </Link>

      <div className='sidebar-thumb-details'>

        <div className='sidebar-thumb-title'>
          <Link to={`/videos/${video.id}`}
            className='sidebar-thumb-title-link'>
            {video.title}
          </Link>
        </div>

        <div className='sidebar-thumb-uploader'>
          <Link to={`/users/${user.id}`}
            className='sidebar-thumb-uploader-link'>
            {user.username}
          </Link>
        </div>

        <div className='sidebar-thumb-views'>
          <Link to={`/videos/${video.id}`}
            className='sidebar-thumb-uploader-link' >
            {`${video.views} views`}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RightSidebarItem;
