import { combineReducers } from 'redux';
import users from './users_reducer';
import videos from './videos_reducer';
// import comments from './comments_reducer';

const entitiesReducer = combineReducers({
  users,
  videos,
  // comments,
});

export default entitiesReducer;


// {
//   users: {
//     1: {
//       id: 1,
//       username: "vanduynamite",
//       name: "Paul And Cats",
//       user_image_url: "http://someotherplacewhereimagesarehosted",
//       uploadedVideos: [12, 69, 753],
//     },
//   },
//   videos: {
//     12: {
//       id: 12,
//       uploader_id: 93,
//       title: "This meowing cat is crazy!",
//       description: "I caught my cat meowing like a dolphin!",
//       views: 145364,
//       likes: 3771851,
//       dislikes: 4773,
//       createdTimeAgo: "2 Months",
//       comment_ids: [61],
//       user_emotion: 'like',
//     },
//   },
//   comments: {
//     61: {
//       id: 61,
//       user_id: 1,
//       video_id: 12,
//       parent_comment_id: null,
//       body: "I know it's my cat, but still funny",
//       children_comment_ids: [65],
//       likes: 8,
//       dislikes: 21,
//       user_emotion: null,
//     },
//   },
