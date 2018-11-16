
export const fetchVideo = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`
  });
};

export const fetchVideos = search => {
  
  const data = search ? { search } : {};

  return $.ajax({
    method: 'GET',
    url: '/api/videos',
    data,
  });
};
