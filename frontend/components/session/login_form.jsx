import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.user;
    this.submit = this.submit.bind(this);
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
        <>
          <br></br>
          {this.props.errors}
        </>
      );
    } else {
      return <></>;
    }
  }

  render() {
    const inputField = this.buildInputField();
    const errors = this.buildErrors();
    // debugger
    return (
      <div id='session-window'>
        <form onSubmit={this.submit} className='session-form'>
          <h1>{this.props.title}</h1>
          <span>{this.props.subtitle}</span>
          <br></br>
          <label htmlFor='login-field'>
            {this.props.fieldName}
          </label>
          <br></br>
          {inputField}
          {errors}
          <br></br>
          <button className="blue-button">Next</button>
          <SignInButton render={this.props.formTypeSearch}/>
        </form>
      </div>
    );
  }

}

const SignInButton = (props) => {
  if (props.render) {
    return (
      <button className="clear-blue-button">
        <Link className="button-link" to='/signup'>Create account</Link>
      </button>
    );
  } else {
    return <></>;
  }
};


export default LoginForm;
