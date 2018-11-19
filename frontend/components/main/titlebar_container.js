import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {
  toggleLeftSidebar,
  updateSearchField,
  spaceToPlay,
} from '../../actions/ui_actions';
import { fetchVideos } from '../../actions/video_actions';
import Titlebar from './titlebar';

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId] || null;

  return {
    currentUser,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleLeftSidebar: () => dispatch(toggleLeftSidebar()),
    fetchVideos: search => dispatch(fetchVideos(search)),
    updateSearchField: search => dispatch(updateSearchField(search)),
    spaceToPlay: boolean => dispatch(spaceToPlay(boolean)),
  };
};

export default connect(msp, mdp)(Titlebar);
