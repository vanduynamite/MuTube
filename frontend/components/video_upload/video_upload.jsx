import React from 'react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

class VideoUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      title: '',
      description: '',
      loading: false,
    };
    this.handleFile = this.handleFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.lastVideoUploadId !== this.props.lastVideoUploadId) {
      createHistory().push(`/videos/${this.props.lastVideoUploadId}`);
    }
  }

  changeField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  cancelUpload() {
    this.setState({
      file: null,
      title: '',
      description: '',
    });
  }

  handleFile(e) {
    this.setState({
      file: e.target.files[0],
      title: e.target.files[0].name,
    });
  }

  submit(e) {
    e.preventDefault();

    if (this.state.title === '' ||
      this.state.description === '' ||
      this.state.file === null ||
      this.state.loading) {

      return;
    }

    this.setState({ loading: true });
    this.props.createVideo(this.state);
  }

  preFileForm() {
    return (
      <div id='video-upload-card' className='card'>
        <form>
          <div id='upload-clickable'>
            <img id='video-upload-button' src='/upload-button.png' />
            <img id='video-upload-button-red' src='/upload-button-red.png' />
            <span id='video-upload-title'>Select files to upload</span>
            <span id='video-upload-subtitle'>Or drag and drop video files</span>
          </div>
          <input type='file' accept='video' onChange={this.handleFile}>
          </input>
        </form>
      </div>
    );
  }

  postFileForm() {

    const cancelButtonClass = 'comment-button';
    let submitButtonClass = cancelButtonClass;
    let submitButtonDisabled = true;
    let fieldClass = '';

    if (this.state.title !== '' &&
      this.state.description !== '' &&
      !this.state.loading) {
      submitButtonClass += ' comment-submit-enabled';
      submitButtonDisabled = false;
    } else {
      submitButtonClass += ' comment-submit-disabled';
    }

    return (
      <div id='video-upload-details' className='card'>
        <form id='post-file-form'>
          <input type='text'
            onChange={this.changeField('title')}
            className='upload-form-field'
            value={this.state.title}
            id='upload-form-title'>
          </input>
          <textarea type='text'
            id='upload-form-description'
            onChange={this.changeField('description')}
            className='upload-form-field'
            placeholder='Description'
            value={this.state.description}
            rows='4'>
          </textarea>

          <div id='comment-buttons'>
            <button onClick={this.submit}
              id='new-comment-submit'
              disabled={submitButtonDisabled}
              className={submitButtonClass}>PUBLISH</button>
            <button onClick={this.cancelUpload}
              id='new-comment-cancel'
              className={cancelButtonClass}>CANCEL</button>
          </div>

        </form>
      </div>
    );
  }

  instructionsCard() {
    return (
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
    );
  }

  render() {

    const form = this.state.file
      ? this.postFileForm()
      : this.preFileForm();

    return (
      <div id='video-upload-main'>
        {form}
        {this.instructionsCard()}
      </div>
    );
  }
}

export default VideoUpload;
