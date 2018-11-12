import { combineReducers } from 'redux';
import session from './session_errors_reducer';

const errorsReducer = combineReducers({
  session,
});

export default errorsReducer;

// errors: {
//   session: ["Incorrect username or password"],
//   videoUrl: ["Video URL is invalid"],
//   commentBody: ["Please enter text"],
// },
