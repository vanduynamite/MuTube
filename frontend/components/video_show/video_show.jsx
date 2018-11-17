import React from 'react';
import { Link } from 'react-router-dom';

class videoShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    if (this.props.video) { this.props.addView(this.props.videoId); }
  }

  componentDidUpdate(prevProps) {
    if (parseInt(prevProps.match.params.videoId) !== parseInt(this.props.videoId)) {
      this.props.fetchVideo(this.props.videoId);
      this.props.addView(this.props.videoId);
    }
  }

  render() {

    if (!this.props.video) {
      return (<div>
        Please wait while loading
      </div>);
    }

    const video = this.props.video;
    return (
      <div id='video-show'>
        <div id='video-show-container'>
          <video className='video' autoPlay={true}>
            <source src={ video.videoUrl } type='video/mp4' />
          </video>
        </div>
        <div id='up-next-container'>
          Up Next
        </div>
      </div>
    );

  }

}

export default videoShow;
