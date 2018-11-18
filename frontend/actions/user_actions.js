import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

const receiveUser = payload => {
  const users = {
    [payload.id]: payload,
  };

  return {
    type: RECEIVE_USER,
    users,
  };
};
//
// const receiveUsers = ({users, videos}) => {
//   return {
//     type: RECEIVE_USERS,
//     users,
//     videos,
//   };
// };

const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USERS_ERRORS,
    errors
  };
};

export const fetchUser = id => dispatch => {
  return UserAPI.fetchUser(id).then(
    payload => dispatch(receiveUser(payload)),
    errors => dispatch(receiveUserErrors(errors))
  );
};
//
// export const fetchUsers = search => dispatch => {
//   return UserAPI.fetchUsers(search).then(
//     payload => dispatch(receiveUsers(payload)),
//     errors => dispatch(receiveUserErrors(errors))
//   );
// };
