export const createVideo = data => {

  const formData = new FormData();
  formData.append('video[title]', data.title);
  formData.append('video[description]', data.description);
  formData.append('video[video_file]', data.file);

  return $.ajax({
    method: 'POST',
    url: `/api/videos`,
    data: formData,
    contentType: false,
    processData: false,
  });
};


export const fetchVideo = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`
  });
};

export const fetchVideos = search => {

  const data = {};
  if (search && search.search !== '') {
    Object.assign(data, search);
  }

  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data,
  });
};

export const addView = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/videos/${id}/views`,
  });
};

export const addLikeOrDislike = data => {

  const id = data.videoId;
  const is_dislike = {
    like: { is_dislike: data.isDislike }
  };

  return $.ajax({
    method: 'POST',
    url: `/api/videos/${id}/likes`,
    data: is_dislike,
  });
};
