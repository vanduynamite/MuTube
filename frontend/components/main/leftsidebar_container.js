import { connect } from 'react-redux';
import LeftSidebar from './leftsidebar';
import { toggleLeftSidebar } from '../../actions/ui_actions';

const msp = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const subscriptions = currentUser.subscribedChannels.map(
    channel_id => state.entities.users[channel_id]
  );

  return {
    currentUser,
    subscriptions,
  };
};

const mdp = dispatch => {
  return {
    toggleLeftSidebar: () => dispatch(toggleLeftSidebar()),
  };
};

export default connect(msp, mdp)(LeftSidebar);
