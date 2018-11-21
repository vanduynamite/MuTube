import * as VideoAPI from '../util/video_api_util';
import { recentUploadUI } from './ui_actions';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_SEARCH_VIDEOS = 'RECEIVE_SEARCH_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

const receiveVideo = ({ users, videos, comments }) => {
  return {
    type: RECEIVE_VIDEO,
    users,
    videos,
    comments,
  };
};

const receiveUploadedVideo = ({ users, videos }) => {
  return {
    type: RECEIVE_UPLOADED_VIDEO,
    users,
    videos,
  };
};

const receiveVideos = ({ users, videos }) => {
  return {
    type: RECEIVE_VIDEOS,
    users,
    videos,
  };
};

const receiveSearchVideos = ({ users, videos }) => {
  return {
    type: RECEIVE_SEARCH_VIDEOS,
    users,
    videos,
  };
};

const receiveVideoErrors = errors => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors: errors.responseJSON,
  };
};

export const addUploadErrors = errors => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors,
  }
}

export const createVideo = data => dispatch => {
  return VideoAPI.createVideo(data).then(
    payload => dispatch(receiveVideo(payload)),
    errors => dispatch(receiveVideoErrors(errors))).then(
    payload => dispatch(recentUploadUI(payload))
  );
};

export const fetchVideo = id => dispatch => {
  return VideoAPI.fetchVideo(id).then(
    payload => dispatch(receiveVideo(payload)),
    errors => dispatch(receiveVideoErrors(errors))
  );
};

export const fetchVideos = search => dispatch => {

  if (search && search.search) {

    return VideoAPI.fetchVideos(search).then(
      payload => dispatch(receiveSearchVideos(payload)),
      errors => dispatch(receiveVideoErrors(errors))
    );

  } else {

    return VideoAPI.fetchVideos(search).then(
      payload => dispatch(receiveVideos(payload)),
      errors => dispatch(receiveVideoErrors(errors))
    );

  }

};

export const addView = id => dispatch => {
  return VideoAPI.addView(id).then(
    payload => dispatch(receiveVideo(payload)),
    errors => dispatch(receiveVideoErrors(errors))
  );
};

export const addLikeOrDislike = data => dispatch => {
  return VideoAPI.addLikeOrDislike(data).then(
    payload => dispatch(receiveVideo(payload)),
    errors => dispatch(receiveVideoErrors(errors))
  );
};
