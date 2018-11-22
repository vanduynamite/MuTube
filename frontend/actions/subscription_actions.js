import * as SubscriptionAPI from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';
export const RECEIVE_SUBSCRIPTION_ERRORS = 'RECEIVE_SUBSCRIPTION_ERRORS';

const receiveSubscription = ({ channel, subscriber }) => {
  return {
    type: RECEIVE_SUBSCRIPTION,
    channel,
    subscriber,
  };
};

const removeSubscription = ({ channel, subscriber }) => {
  return {
    type: REMOVE_SUBSCRIPTION,
    channel,
    subscriber,
  }
}

const receiveSubscriptionErrors = errors => {
  return {
    type: RECEIVE_SUBSCRIPTION_ERRORS,
    errors,
  }
}

export const subscribe = id => dispatch => {
  return SubscriptionAPI.subscribe(id).then(
    payload => dispatch(receiveSubscription(payload)),
    errors => dispatch(receiveSubscriptionErrors(errors))
  );
};

export const unsubscribe = id => dispatch => {
  return SubscriptionAPI.unsubscribe(id).then(
    payload => dispatch(removeSubscription(payload)),
    errors => dispatch(receiveSubscriptionErrors(errors))
  );
};
