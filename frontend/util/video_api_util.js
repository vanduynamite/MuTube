
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
