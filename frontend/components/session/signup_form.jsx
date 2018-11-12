import React from 'react';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      user_image_url: '',
    };

    switch (this.props.formType) {
      case ('login'):

      case ('signup'):

    }

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.name = `${this.first_name} ${this.last_name}`;
    this.props.processForm(this.state);
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {

    return (
      <form onSubmit={this.submit}>
        <h2>Create your µTube Account</h2>
        <button class='blue-button'>Next</button>
      </form>
    );
  }

}


// params.require(:user).permit(:username, :password, :name, :email, :user_image_url)

export default SignupForm;
