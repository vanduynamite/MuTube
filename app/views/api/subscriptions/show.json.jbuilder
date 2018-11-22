json.channel do
  json.id @subscription.channel_id
  json.subscriberCount @subscription.channel.subscribers.count
end

json.subscriber do
  json.id @subscription.subscriber_id
  json.channelId @subscription.channel_id
end
