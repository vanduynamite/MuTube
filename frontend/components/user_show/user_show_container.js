import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

// TODO: bonus, implement a user show page

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId || state.session.id;
  const ownPage = parseInt(userId) === state.session.id;
  const user = state.entities.users[userId];
  const path = ownProps.history.location.pathname;

  // 1. I am visiting one of the special routes. Easy, they are done.
  //    a. History
  //    b. Subscription videos
  // 2. I am visiting my page. I want to see subscriptions, likes, uploads.
  // 3. I am visiting someone else's page. I want to see uploads only.

  return {
    userId,
    user,
    path,
    ownPage,
  };
};

const mdp = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
};

export default connect(msp, mdp)(UserShow);
