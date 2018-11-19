import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.user;
    this.submit = this.submit.bind(this);
    this.demoLoginCb = this.demoLoginCb.bind(this);
  }

  componentWillUnmount() {
    this.props.clearPotentialSession();
  }

  submit(e) {
    e.preventDefault();

    if (this.props.formTypeSearch) {
      this.props.searchUser(this.state);
    } else {
      this.props.login(merge(this.props.user, this.state));
    }
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  demoLoginCb() {
    return e => this.props.demoLogin();
  }

  buildField() {
    const fieldName = this.props.formTypeSearch
      ? 'search'
      : 'password';
    const label = this.props.formTypeSearch
      ? 'Email or username'
      : 'Password';
    const password = !this.props.formTypeSearch;
    const error = this.props.errors[fieldName];

    // label
    let labelKlass = '';
    if (this.state[fieldName] !== '') labelKlass += 'active-label';
    if (error) labelKlass += ' error-label';
    const inputLabel = <label htmlFor={fieldName} className={labelKlass}>{label}</label>;

    // input
    const inputType = password ? 'password' : 'text';
    const inputKlass = error ? 'error-input': '';
    const inputField =
      <input type={inputType}
        className={inputKlass}
        id={fieldName}
        onChange={this.updateField(fieldName)}
        value={this.state[fieldName]}></input>;

    // helper text
    let helperText = '';
    let helperKlass = 'helper-normal';
    if (error) {
      helperText = error;
      helperKlass += ' helper-error';
    }
    const helperDiv = <div className={helperKlass}>{helperText}</div>;

    return (
      <div className='single-input'>
        {inputLabel}
        {inputField}
        {helperDiv}
      </div>
    );
  }

  buildDemoLogin() {
    if (this.props.formTypeSearch) {
      return (
        <div className='demo-login'>
          <span>Not interested in signing up? Try the demo mode instead.</span>
          <span
            className='demo-span'
            onClick={this.demoLoginCb()}>
            Demo login
          </span>
        </div>
      );
    } else {
      return <></>;
    }
  }

  render() {
    const title = <span className='title'>{this.props.title}</span>;
    const subtitle = <span className='subtitle'>{this.props.subtitle}</span>;
    const inputField = this.buildField();
    const demoLogin = this.buildDemoLogin();
    const signUpButton = this.props.formTypeSearch ?
        <Link to='/signup' className='button-link'>Create account</Link> : <div></div>
    const nextButton = <button className="blue-button">Next</button>;

    return (
      <div className='session-window'>
        <Link to='/'><img src={ window.mutube } id='signin-logo' /></Link>
        {title}
        {subtitle}
        <form onSubmit={this.submit} className='session-form'>
          <div className='inputs'>
            {inputField}
          </div>
          {demoLogin}
          <div className='buttons'>
            {signUpButton}
            {nextButton}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
