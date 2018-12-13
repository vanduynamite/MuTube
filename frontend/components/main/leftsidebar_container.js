import { connect } from 'react-redux';
import LeftSidebar from './leftsidebar';
import { withRouter } from 'react-router-dom';
import { toggleLeftSidebar } from '../../actions/ui_actions';

const msp = (state) => {
  const showSidebar = state.ui.leftSidebar;
  const currentUser = state.entities.users[state.session.id];
  let subscriptions = [];
  if (currentUser) {
    subscriptions = currentUser.subscribedChannels.map(
      channel_id => state.entities.users[channel_id]
    );
  }

  return {
    showSidebar,
    currentUser,
    subscriptions,
  };
};

const mdp = dispatch => {
  return {
    toggleLeftSidebar: () => dispatch(toggleLeftSidebar()),
  };
};

export default withRouter(connect(msp, mdp)(LeftSidebar));
