import {
  RECEIVE_CURRENT_USER,
  RECEIVE_POTENTIAL_LOGIN,
} from '../../actions/session_actions';
import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
} from '../../actions/video_actions';
import {
  RECEIVE_USER,
  RECEIVE_USERS,
} from '../../actions/user_actions';
import {
  RECEIVE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION,
} from '../../actions/subscription_actions';
import { merge, remove } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  const channel = action.channel;
  const subscriber = action.subscriber;

  switch (action.type) {
    case RECEIVE_POTENTIAL_LOGIN:
    case RECEIVE_CURRENT_USER:
      return merge(newState, {
        [action.user.id]: action.user,
      });

    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
    case RECEIVE_USER:
    case RECEIVE_USERS:
      return merge(newState, action.users);

    case RECEIVE_SUBSCRIPTION:
      newState[channel.id].subscriberCount = channel.subscriberCount;
      if (!newState[subscriber.id].subscribedChannels.includes(subscriber.channelId)) {
        newState[subscriber.id].subscribedChannels.push(subscriber.channelId);
      }

      return newState;

    case REMOVE_SUBSCRIPTION:
      newState[channel.id].subscriberCount = channel.subscriberCount;
      remove(newState[subscriber.id].subscribedChannels,
        id => id === subscriber.channelId);

      return newState;


    default:
      return newState;

  }

};

export default usersReducer;

// 1: {
//   id: 1,
//   username: "vanduynamite",
//   name: "Paul And Cats",
//   user_image_url: "http://someotherplacewhereimagesarehosted",
//   uploadedVideos: [12, 69, 753],
// },
