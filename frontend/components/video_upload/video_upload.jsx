import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  return (
    <div id='video-upload-main'>

      <div id='video-upload-card' className='card'>
        <div id='upload-clickable'>
          <img id='video-upload-button' src='/upload-button.png' />
          <img id='video-upload-button-red' src='/upload-button-red.png' />
          <span id='video-upload-title'>Select files to upload</span>
          <span id='video-upload-subtitle'>Or drag and drop video files</span>
        </div>
      </div>

      <div id='upload-instructions-card' className='card'>
        <span id='upload-instructions-title'>
          HELP AND SUGGESTIONS
        </span>
        <br></br>
        <span id='upload-instructions'>
          By submitting your videos to µtube, you acknowledge that this site was
          created for the sole purpose of showcasing Paul van Duyn's abilities.
        </span>
      </div>

    </div>
  );
};
