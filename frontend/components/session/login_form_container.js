import { connect } from 'react-redux';
import { login, searchUser, demoLogin } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = state => {
  const errors = state.errors.session;
  const potentialId = state.session.potentialId;
  let user;
  let title;
  let subtitle;
  let fieldName;
  let showSignupButton;
  let formTypeSearch;

  if (potentialId) {
    user = state.entities.users[potentialId];
    title = `Hi ${user.firstName}`;
    subtitle = `${user.email}`;
    fieldName = 'Enter your password';
    formTypeSearch = false;
  } else {
    user = {password: '', search: ''};
    title = 'Sign in';
    subtitle = 'to continue to µTube';
    fieldName = 'Email or username';
    formTypeSearch = true;
  }

  return {
    user,
    errors,
    title,
    subtitle,
    fieldName,
    formTypeSearch,
  };
};

const mdp = dispatch => {
  return {
    searchUser: user => dispatch(searchUser(user)),
    login: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
  };
};

export default connect(msp, mdp)(LoginForm);
