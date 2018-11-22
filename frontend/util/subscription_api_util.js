
export const subscribe = id => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${id}/subscribe`,
  });
};

export const unsubscribe = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${id}/unsubscribe`,
  });
};
