import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

// TODO: bonus, implement a user show page

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];

  return {
    userId,
    user,
  };
};

const mdp = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
};

export default connect(msp, mdp)(UserShow);
