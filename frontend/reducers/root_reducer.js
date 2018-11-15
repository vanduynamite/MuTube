import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

export default rootReducer;

// {
//   entities: {
//     users: {
//       1: {
//         id: 1,
//         username: "vanduynamite",
//         name: "Paul And Cats",
//         user_image_url: "http://someotherplacewhereimagesarehosted",
//         uploadedVideos: [12, 69, 753],
//       },
//       93: {
//         id: 93,
//         username: "cowman32",
//         name: "Smart Cow Channel",
//         user_image_url: "http://someotherotherplacewhereimagesarehosted",
//         uploadedVideos: [14, 222, 831],
//       },
//     },
//     videos: {
//       12: {
//         id: 12,
//         uploader_id: 93,
//         title: "This meowing cat is crazy!",
//         description: "I caught my cat meowing like a dolphin!",
//         views: 145364,
//         likes: 3771851,
//         dislikes: 4773,
//         createdTimeAgo: "2 Months",
//         comment_ids: [61],
//         user_emotion: 'like',
//       },
//       14: {
//         id: 14,
//         uploader_id: 102,
//         title: "Cows moo Beethoven's ninth",
//         description: "A farmer trained his herd to moo to this great classic",
//         views: 54,
//         likes: 21342,
//         dislikes: 56332,
//         createdTimeAgo: "3 days",
//         comment_ids: [],
//         user_emotion: 'dislike',
//       },
//     },
//     comments: {
//       61: {
//         id: 61,
//         user_id: 1,
//         video_id: 12,
//         parent_comment_id: null,
//         body: "I know it's my cat, but still funny",
//         children_comment_ids: [65],
//         likes: 8,
//         dislikes: 21,
//         user_emotion: null,
//       },
//       65: {
//         id: 65,
//         user_id: 2,
//         video_id: 12,
//         parent_comment_id: 61,
//         body: "don't comment on your own video!",
//         children_comment_ids: [],
//         likes: 14,
//         dislikes: 2,
//         user_emotion: 'like',
//       }
//     },
//   },
//   ui: {
//     loading: false,
//     paused: false,
//     fullScreen: false,
//     volume: 0.72,
//   },
//   errors: {
//     session: ["Incorrect username or password"],
//     videoUrl: ["Video URL is invalid"],
//     commentBody: ["Please enter text"],
//   },
//   session: {
//     id: 1
//   }
// }
