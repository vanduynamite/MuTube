import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = state => {
  const errors = state.errors.session;
  return {
    errors,
    formType: 'signup',
  };
};

const mdp = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(LoginForm);
