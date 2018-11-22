json.users do
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.firstName user.first_name
    json.lastName user.last_name
    json.userImageUrl user.user_image_url
    json.email user.email
    json.subscriberCount user.subscribers.count
    json.subscribedChannels user.channel_subscriptions.ids
  end

  user.channel_subscriptions.each do |subscription|
    json.set! subscription.id do
      json.id subscription.id
      json.username subscription.username
      json.userImageUrl subscription.user_image_url
    end
  end

end
