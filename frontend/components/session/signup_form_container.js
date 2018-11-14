import { connect } from 'react-redux';
import { signup,
  clearPotentialSession } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = state => {
  const errors = state.errors.session;
  const user = {
    username: '',
    password: '',
    confirm: '',
    first_name: '', // purposeful snake for back-end
    last_name: '', // purposeful snake for back-end
    email: '',
  };

  return {
    errors,
    user,
  };
};

const mdp = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearPotentialSession: () => dispatch(clearPotentialSession()),
  };
};

export default connect(msp, mdp)(SignupForm);
