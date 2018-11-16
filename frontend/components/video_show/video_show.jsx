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
    const message = this.props.video
      ? `You are viewing video id ${this.props.video.id}`
      : 'Please wait while loading';

    return (
      <div>
        {message}
      </div>);
  }

}

export default videoShow;
