
export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

// export const fetchUsers = search => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/users',
//     data,
//   });
// };
