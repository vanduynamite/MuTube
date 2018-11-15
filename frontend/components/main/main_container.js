import { connect } from 'react-redux';
import Main from './main';

const msp = state => {
  const ui = state.ui;

  return {
    ui,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(Main);
