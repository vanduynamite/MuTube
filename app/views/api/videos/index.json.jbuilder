@videos.each do |video|

  json.videos do
    json.set! video.id do
      json.id video.id
      json.title video.title
      json.videoUrl url_for(video.video_file)
      json.thumbnailUrl url_for(video.video_file.preview(resize: "210x118>"))
      json.uploaderId video.uploader_id
      json.commentIds []
      json.views video.views

      json.createdAt video.created_at
      createdTimeAgo = time_ago_in_words(video.created_at)
      createdTimeAgo = createdTimeAgo.gsub(/about /, '')
      createdTimeAgo = createdTimeAgo.gsub(/over /, '')
      createdTimeAgo = createdTimeAgo.gsub(/less than /, '')
      createdTimeAgo = createdTimeAgo.capitalize
      createdTimeAgo += ' ago'
      json.createdTimeAgo createdTimeAgo
    end
  end

  user = video.uploader

  json.users do
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.userImageUrl user.user_image_url
    end
  end

end
