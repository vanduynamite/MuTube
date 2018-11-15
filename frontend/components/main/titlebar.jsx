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
      <form>
        <input type='text'

          placeholder='Search'>
        </input>
        <button className='button-search'>
          <img id='mag-glass' src='/mag-glass.png'></img>
          <img id='mag-glass-dark' src='/mag-glass-dark.png'></img>
          <img id='mag-glass-darker' src='/mag-glass-darker.png'></img>
        </button>
      </form>
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

      <div id='title-middle'>
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
