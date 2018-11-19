export const TOGGLE_LEFT_SIDEBAR = "TOGGLE_LEFT_SIDEBAR";
export const SHOW_COMMENT_BUTTONS = "SHOW_COMMENT_BUTTONS";
export const HIDE_COMMENT_BUTTONS = "HIDE_COMMENT_BUTTONS";
export const UPDATE_SEARCH_FIELD = "UPDATE_SEARCH_FIELD";
export const RECENT_UPLOAD_UI = "RECENT_UPLOAD_UI";
export const SPACE_TO_PLAY = "SPACE_TO_PLAY";

export const toggleLeftSidebar = () => {
  return {
    type: TOGGLE_LEFT_SIDEBAR,
  };
};

export const showCommentButtons = () => {
  return {
    type: SHOW_COMMENT_BUTTONS,
  };
};

export const hideCommentButtons = () => {
  return {
    type: HIDE_COMMENT_BUTTONS,
  };
};

export const updateSearchField = (search) => {
  return {
    type: UPDATE_SEARCH_FIELD,
    search,
  };
};

export const recentUploadUI = payload => {
  return {
    type: RECENT_UPLOAD_UI,
    videoId: Object.keys(payload.videos)[0],
  };
};

export const spaceToPlay = (boolean) => {
  return {
    type: SPACE_TO_PLAY,
    spaceToPlay: boolean
  };
};
