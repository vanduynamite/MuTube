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

  submit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  field(field, label) {
    const errMsg = "";
    const inputLabel = this.state[field] !== "" ?
      <label htmlFor={field} className='active-label'>{label}</label> :
      <label htmlFor={field}>{label}</label>;

    return (
      <>
        {inputLabel}
        <input type='text'
          id={field}
          onChange={this.updateField(field)}
          value={this.state[field]}></input>
        <div className='errors'>
          {errMsg}
        </div>
      </>
    );
  }

  render() {
    const errors = this.buildErrors();

    return (
      <div className='session-window'>
        <img src='/google.png' />
        <span className='title'>Create your µTube Account</span>
        <span className='subtitle'>to continue to µTube</span>
        <form onSubmit={this.submit} className='session-form'>

          <div className='inputs'>
            <div className='group-inputs'>
              <div className='single-input'>
                  {this.field('first_name', 'First name')}
              </div>
              <div className='single-input'>
                {this.field('last_name', 'Last name')}
              </div>
            </div>
            {this.field('username', 'Username')}

            {this.field('email', 'Your email address')}
            <span className='helper-text'>
              You will not need to confirm that this email belongs to you.
            </span>
            <div className='group-inputs'>
              <div className='single-input'>
                {this.field('password', 'Password')}
              </div>
              <div className='single-input'>
                {this.field('confirm', 'Confirm')}
              </div>
            </div>
            <span className='helper-text'>
              Use 6 or more characters with a mix of letters, letters & letters
            </span>

            {errors}
          </div>

          <div className='buttons'>
            <Link className="button-link" to='/login'>Sign in instead</Link>
            <button className='blue-button'>Next</button>
          </div>
        </form>
      </div>
    );
  }

};

export default SignupForm;
