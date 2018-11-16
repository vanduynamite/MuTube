
if user
  json.users do
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.userImageUrl user.user_image_url
      # json.uploadedVideos user.videos.to_a.map { |vid| vid.id }
    end
  end
end

json.videos do
  json.set! video.id do
    json.id video.id
    json.title video.title
    json.videoUrl video.video_url
    json.views video.views.count
    json.uploaderId video.uploader_id
    json.createdAt video.created_at
    json.description video.description

    createdTimeAgo = time_ago_in_words(video.created_at)
    createdTimeAgo = createdTimeAgo.gsub(/about /, '')
    createdTimeAgo = createdTimeAgo.gsub(/over /, '')
    createdTimeAgo = createdTimeAgo.gsub(/less than /, '')
    createdTimeAgo = createdTimeAgo.capitalize
    createdTimeAgo += ' ago'
    json.createdTimeAgo createdTimeAgo
  end
end
