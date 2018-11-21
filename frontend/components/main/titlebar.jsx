import React from 'react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

class TitleBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.search = this.search.bind(this);
    this.deactivateSpaceToPlay = this.deactivateSpaceToPlay.bind(this);
    this.reactivateSpaceToPlay = this.reactivateSpaceToPlay.bind(this);
  }

  deactivateSpaceToPlay() {
    this.props.spaceToPlay(false);
  }

  reactivateSpaceToPlay() {
    this.props.spaceToPlay(true);
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateSearchField(e.target.value);
    };
  }

  search(e) {
    e.preventDefault();
    this.props.fetchVideos(this.state);
    createHistory().push('/');
  }

  render() {
    return (
      <div id='titlebar'>
        { this.topLeft() }
        { this.searchBar() }
        { this.topRight() }
      </div>
    );
  }

  // subcomponents

  topLeft() {
    return (
      <div id='title-left'>
        <div className='highlight-circle' onClick={ this.props.toggleLeftSidebar } >
          <img id='hamburger-left' src={ window.hamburger } />
        </div>
        <Link to='/'><img id='logo-topleft' src={ window.mutube } /></Link>
      </div>
    );
  }

  searchBar() {
    return (
      <div id='title-middle'>
        <div id='title-middle-container'>
          <form onSubmit={this.search}>
            <input type='text'
              placeholder='Search'
              onChange={ this.updateField('search') }
              onFocus={ this.deactivateSpaceToPlay }
              onBlur={ this.reactivateSpaceToPlay }
              value={ this.state.search }>
            </input>
            <button className='button-search'>
              <img id='mag-glass' src={ window.magGlass }></img>
              <img id='mag-glass-dark' src={ window.magGlassDark }></img>
              <img id='mag-glass-darker' src={ window.magGlassDarker }></img>
            </button>
          </form>
        </div>
      </div>
    );
  }

  topRight() {
    return (
      <div id='title-right'>
        <Link to='/upload'>
          <div className='highlight-circle'>
            <img id='upload-right' src={ window.upload } />
          </div>
        </Link>
        { this.sessionButton() }
      </div>
    );
  }

  sessionButton() {
    if (this.props.currentUser) {
      return (
        <button onClick={ this.props.logout } className='blue-button'>
          Log Out
        </button>
      );
    } else {
      return (
        <Link to='/login' className='blue-button'>
          Sign In
        </Link>
      );
    }
  }
}

export default TitleBar;
