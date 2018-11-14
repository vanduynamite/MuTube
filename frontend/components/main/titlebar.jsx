import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  let greeting;
  let button;

  if (props.currentUser) {
    greeting = `, ${props.currentUser.firstName}`;
    button = <button onClick={props.logout} className='blue-button'>Log Out</button>;
  } else {
    greeting = '';
    button = <Link to='/login' className='button-link'>Sign In</Link> ;
  }

  return (
    <div id='titlebar'>
      <div id='title-left'>
        <img src='/mutube.png' />
      </div>
      <div id='title-mid'>
        <h1>Hello{greeting}! Welcome to the main component!</h1>
      </div>
      <div id='title-right'>
        {button}
      </div>
    </div>
  );
};
