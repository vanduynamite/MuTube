import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const video = props.video;

  return (
    <div id='video-player'>
      <video id='video' autoPlay={true}>
        <source src={ video.videoUrl } type='video/mp4' />
      </video>
      <div id='video-controls'>
      </div>
    </div>
  );

};
