import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default (props) => {
  let letter = '?';
  let background = '#2376E5';

  if (props.user) {
    letter = props.user.username.slice(0,1).toUpperCase();
    background = props.user.userImageUrl || '#2376E5';
  }

  let klass = 'user-image';
  if (props.small) klass = 'user-image-small';
  if (props.large) klass = 'user-image-large';
  
  return (
    <div className={ klass } style={{backgroundColor: background}}>
      {letter}
    </div>
  );

};
