import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId] || null;

  return {
    currentUser,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp, mdp)(Main);
