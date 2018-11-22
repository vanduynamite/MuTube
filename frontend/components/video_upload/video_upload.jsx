import React from 'react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

class VideoUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileUrl: null,
      title: '',
      description: '',
      loading: false,
      hovering: false,
      hoverOverride: false,
    };
    this.handleFile = this.handleFile.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.submit = this.submit.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
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

  handleDragEnter(e) {
    e.preventDefault();
    if (this.state.hovering === true) {
      this.setState({ hoverOverride: true });
    } else {
      this.setState({ hovering: true });
    }
  }

  handleDragLeave(e) {
    e.preventDefault();
    if (this.state.hoverOverride) {
      this.setState({ hoverOverride: false });
    } else {
      this.setState({ hovering: false });
    }
  }

  handleDrop(e) {
    e.preventDefault();

    if (e.dataTransfer.items && e.dataTransfer.items[0].kind === 'file') {
      this.addFileToState(e.dataTransfer.items);
    } else {
      this.addFileToState(e.dataTransfer.files);
    }

    this.removeDragData(e);
  }

  handleFile(e) {
    this.addFileToState(e.target.files);
  }

  addFileToState(files) {

    if (files.length > 1) {
      this.props.addUploadErrors(['Please upload one file at a time.']);
      this.setState({
        hovering: false,
        hoverOverride: false,
      });
    } else {
      let file = files[0];
      if (file.kind === 'file') file = file.getAsFile();

      if (file.type.slice(0,5) !== 'video') {
        this.props.addUploadErrors(['Please choose a video file.']);
        this.setState({
          hovering: false,
          hoverOverride: false,
        });
      } else {
        this.uploadFile(file);
      }
    }
  }

  uploadFile(file) {
    const fileReader = new FileReader();
    this.setState({
      file: file,
      fileUrl: fileReader.result,
      title: file.name,
    });

    // filereader.onloadend = () => {
    // };
    //
    // if (file) {
    //   fileReader.readAsDataURL(file);
    // }
  }

  removeDragData(e) {
    if (e.dataTransfer.items) {
      e.dataTransfer.items.clear();
    } else {
      e.dataTransfer.clearData();
    }
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

  preFileForm() {

    const picClass = this.state.hovering
      ? 'upload-pic-hovering'
      : 'upload-pic-not-hovering';

    return (
      <div id='video-upload-card' className='card'
        onDrop={e => e.preventDefault()}
        onDragOver={e => e.preventDefault()} >

        <form>
          <label
            onDrop={this.handleDrop} >

            <div id='upload-clickable'>
              <img id='video-upload-button'
                src={ window.blankUploadButton }
                onDragEnter={ this.handleDragEnter }
                onDragLeave={ this.handleDragLeave }
                className={picClass} />
              <span id='video-upload-title'
                onDragEnter={ this.handleDragEnter }
                onDragLeave={ this.handleDragLeave } >
                Select file to upload</span>
              <span id='video-upload-subtitle'
                onDragEnter={ this.handleDragEnter }
                onDragLeave={ this.handleDragLeave } >
                Or drag and drop a video file</span>
            </div>

            <input id='upload-hidden-input'
              type='file'
              accept='video'
              onChange={this.handleFile} />

          </label>
          <div id='upload-errors'>
            { this.props.uploadErrors }
          </div>
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
        <form id='post-file-form' autoComplete='off'>
          <input
            autoComplete='false'
            name='hidden'
            type='text'
            style={{display:'none'}} />
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

}

export default VideoUpload;
