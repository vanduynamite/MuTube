import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {

    return (
      <form onSubmit={this.submit}>
        <h2>Sign in</h2>
        <span>with your µTube Account</span>

        <label htmlFor='login-username'>
          Username
        </label>
        <input id='login-username'
          type='text'
          value={this.state.username}
          onChange={this.updateField('username')}>
        </input>

        <label htmlFor='login-password'>
          Enter your password
        </label>
        <input id='login-password'
          type='password'
          value={this.state.password}
          onChange={this.updateField('password')}>
        </input>

        <button className="blue-button">Next</button>
      </form>
    );
  }

}


export default LoginForm;
