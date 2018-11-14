import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.user;
    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentWillUnmount() {
    this.props.clearPotentialSession();
  }

  submit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  field(fieldName, label, password) {
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
    let helperText = this.props.helperTexts[fieldName] || '';
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

  render() {
    const signInButton = <Link className="button-link" to='/login'>
      Sign in instead</Link>;
    const nextButton = <button className="blue-button">Next</button>;

    return (
      <div className='session-window'>
        <img src='/mutube.png' />
        <span className='title'>Create your µTube Account</span>
        <span className='subtitle'>to continue to µTube</span>
        <form onSubmit={this.submit} className='session-form'>

          <div className='inputs'>
            <div className='group-inputs'>
              {this.field('firstName', 'First name')}
              {this.field('lastName', 'Last name')}
            </div>
            {this.field('username', 'Username')}
            {this.field('email', 'Your email address')}
            {this.field('password', 'Password', true)}
          </div>

          <div className='buttons'>
            {signInButton}
            {nextButton}
          </div>
        </form>
      </div>
    );
  }

};

export default SignupForm;
