import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { toggleLeftSidebar } from '../../actions/ui_actions';
import Titlebar from './titlebar';

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
    toggleLeftSidebar: () => dispatch(toggleLeftSidebar()),
  };
};

export default connect(msp, mdp)(Titlebar);
