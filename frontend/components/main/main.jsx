import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let greeting;
    let button;
    
    if (this.props.currentUser) {
      greeting = `${this.props.currentUser.name}, `;
      button = <button onClick={this.props.logout}>Log Out</button>;
    } else {
      greeting = '';
      button = <Link to='/login'>Log In</Link> ;
    }

    return (
      <div>
        <h1>Hello, {greeting} from the main component!</h1>
        {button}
      </div>
    );
  }

}

export default Main;
