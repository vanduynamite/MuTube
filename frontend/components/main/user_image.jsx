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

  const klass = props.small
    ? 'user-image-small'
    : 'user-image';

  return (
    <div className={ klass } style={{backgroundColor: background}}>
      {letter}
    </div>
  );

};
