
export const signup = user => {

  // front-end to back-end transfer
  user.first_name = user.firstName;
  user.last_name = user.lastName;

  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};

export const searchUser = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/search',
    data: { user }
  });
};
