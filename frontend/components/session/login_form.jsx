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
    // consider making an action that will clear out session.potentialId
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

  buildInputField() {
    if (this.props.formTypeSearch) {
      return (
        <input id='login-field'
          type='text'
          autoComplete='off'
          value={this.state.search}
          onChange={this.updateField('search')}>
        </input>
      );
    } else {
      return (
        <input id='login-field'
          type='password'
          autoComplete='off'
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

  demoLoginCb() {
    return e => this.props.demoLogin();
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
    const inputField = this.buildInputField();
    const errors = this.buildErrors();
    const demoLogin = this.buildDemoLogin();

    return (
      <div id='session-window'>
        <img src='/google.png' />
        <span className='title'>{this.props.title}</span>
        <span className='subtitle'>{this.props.subtitle}</span>

        <form onSubmit={this.submit} className='session-form'>

          <div className='inputs'>
            <label htmlFor='login-field'>
              {this.props.fieldName}
            </label>

            {inputField}
            {errors}
          </div>

          {demoLogin}

          <div className='buttons'>
            <SignInButton render={this.props.formTypeSearch}/>
            <button className="blue-button">Next</button>
          </div>
        </form>
      </div>
    );
  }

}

const SignInButton = (props) => {
  if (props.render) {
    return (
      <Link className="button-link" to='/signup'>Create account</Link>
    );
  } else {
    return <></>;
  }
};


export default LoginForm;
