import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoPlaying: false,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.spaceBar = this.spaceBar.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.spaceBar, false);
  }

  // componentDidUpdate() {
  //   this.refs.videoRef.play();
  //   this.refs.videoRef.muted = false;
  // }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.spaceBar, false);
  }

  spaceBar(e) {
    if (e.keyCode === 32 && this.props.spaceToPlay) {
      e.preventDefault();
      this.togglePlay();
    }
  }

  togglePlay() {

    if (this.state.videoPlaying) {
      this.refs.videoRef.pause();
    } else {
      this.refs.videoRef.play();
    }

    this.setState({ videoPlaying: !this.state.videoPlaying });

  }

  render() {
    const video = this.props.video;
    const controlsClass = this.state.videoPlaying
      ? 'video-controls-playing'
      : 'video-controls-paused';

    return (
      <div id='video-player'>
        <div id='video-controls'
          onClick={this.togglePlay}
          className={controlsClass}>
        </div>

        <video id='video' ref='videoRef'
          autoPlay={false}>
          <source src={ video.videoUrl } type='video/mp4' />
        </video>

      </div>
    );
  }

}

export default VideoPlayer;
