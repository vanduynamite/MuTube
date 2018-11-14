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

  buildInputLabel() {
    if (this.props.formTypeSearch && this.state.search !== "") {
      return (
        <label className='active-label' >
          {this.props.fieldName}
        </label>
      );
    } else if (this.state.password !== '') {
      return (
        <label className='active-label' >
          {this.props.fieldName}
        </label>
      );
    } else {
      return <label>{this.props.fieldName}</label>;
    }
  }

  buildInputField() {
    if (this.props.formTypeSearch) {
      return (
        <input id='login-field'
          type='text'
          value={this.state.search}
          onChange={this.updateField('search')}>
        </input>
      );
    } else {
      return (
        <input id='login-field'
          type='password'
          value={this.state.password}
          onChange={this.updateField('password')}>
        </input>
      );
    }
  }

  buildErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <div className='errors'>
          {this.props.errors}
        </div>
      );
    } else {
      return <></>;
    }
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
    const inputLabel = this.buildInputLabel();
    const inputField = this.buildInputField();
    const errors = this.buildErrors();
    const demoLogin = this.buildDemoLogin();
    const signUpButton = this.props.formTypeSearch ?
        <Link to='/signup' className='button-link'>Create account</Link> : <></>
    const nextButton = <button className="blue-button">Next</button>;

    return (
      <div className='session-window'>
        <img src='/google.png' />
        {title}
        {subtitle}
        <form onSubmit={this.submit} className='session-form'>
          <div className='inputs'>
            {inputLabel}
            {inputField}
            {errors}
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
