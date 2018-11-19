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
    let greeting;
    let button;

    if (this.props.currentUser) {
      greeting = `, ${this.props.currentUser.firstName}`;
      button = <button onClick={this.props.logout} className='blue-button'>Log Out</button>;
    } else {
      greeting = '';
      button = <Link to='/login' className='blue-button'>Sign In</Link> ;
    }

    const searchBar = () => {
      return (
        <form onSubmit={this.search}>
          <input type='text'
            placeholder='Search'
            onChange={this.updateField('search')}
            onFocus={ this.deactivateSpaceToPlay }
            onBlur={ this.reactivateSpaceToPlay }
            value={this.state.search}>
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
          <div className='highlight-circle' onClick={this.props.toggleLeftSidebar} >
            <img id='hamburger-left' src='/hamburger.png' />
          </div>
          <Link to='/'><img id='logo-topleft' src='/mutube.png' /></Link>
        </div>

        <div id='title-middle'>
          <div id='title-middle-container'>
            {searchBar()}
          </div>
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
  }
}

export default TitleBar;
