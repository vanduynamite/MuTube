export const TOGGLE_LEFT_SIDEBAR = "TOGGLE_LEFT_SIDEBAR";
export const SHOW_COMMENT_BUTTONS = "SHOW_COMMENT_BUTTONS";
export const HIDE_COMMENT_BUTTONS = "HIDE_COMMENT_BUTTONS";
export const UPDATE_SEARCH_FIELD = "UPDATE_SEARCH_FIELD";

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
