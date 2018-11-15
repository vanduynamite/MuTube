import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import Titlebar from './titlebar_container';
import LeftSidebar from './leftsidebar_container';
import VideoIndex from '../video_index/video_index_container';
import VideoUpload from '../video_upload/video_upload_container';
import VideoShow from '../video_show/video_show_container';
import UserShow from '../user_show/user_show_container';

class Main extends React.Component {

  render() {
    return (
      <div id='main'>
        <Titlebar />
        <div id='main-content'>
          {this.props.ui.leftSidebar ? <LeftSidebar /> : <></>}
          <Switch>
            <Route exact path='/' component={ VideoIndex } />
            <Route path='/videos/:videoId' component={ VideoShow } />
            <ProtectedRoute exact path='/upload' component={ VideoUpload } />
          </Switch>
        </div>
      </div>
    );
  }

}

// TODO: bonus, implement a user show page
// <Route path='/users/:userId' component={ UserShow } />

export default Main;
