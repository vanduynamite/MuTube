import { connect } from 'react-redux';
import { signup,
  clearPotentialSession } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = state => {
  const errors = state.errors.session;
  const helperTexts = {
    'email': 'You will not need to confirm that this email belongs to you.',
    'password': 'Use 6 or more characters with a mix of letters, letters & letters.'
  };

  const user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  return {
    errors,
    helperTexts,
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
