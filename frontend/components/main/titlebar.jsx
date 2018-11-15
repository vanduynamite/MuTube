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
    button = <Link to='/login' className='blue-button'>Sign In</Link> ;
  }

  const searchBar = () => {
    return (
      <h1>Hello{greeting}!</h1>
    );
  };

  return (
    <div id='titlebar'>
      <div id='title-left'>
        <div className='highlight-circle' onClick={props.toggleLeftSidebar} >
          <img id='hamburger-left' src='/hamburger.png' />
        </div>
        <Link to='/'><img id='logo-topleft' src='/mutube.png' /></Link>
      </div>
      <div id='title-mid'>
        {searchBar()}
      </div>
      <div id='title-right'>
        <Link to='/upload'>
          <div className='highlight-circle'>
            <img id='upload-right' src='/upload.png' />
          </div>
        </Link>
        {button}
      </div>
    </div>
  );
};
