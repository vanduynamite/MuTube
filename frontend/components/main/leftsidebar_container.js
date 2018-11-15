import { connect } from 'react-redux';
import LeftSidebar from './leftsidebar';
import { toggleLeftSidebar } from '../../actions/ui_actions';

const msp = state => {
  return {

  };
};

const mdp = dispatch => {
  return {
    toggleLeftSidebar: () => dispatch(toggleLeftSidebar()),
  };
};

export default connect(msp, mdp)(LeftSidebar);
