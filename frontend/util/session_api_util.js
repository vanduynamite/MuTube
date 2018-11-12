
export const loginUser = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
  });
};
