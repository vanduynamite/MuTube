
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
    json.description video.description
    json.videoUrl url_for(video.video_file)
    json.uploaderId video.uploader_id

    json.views video.views
    json.likes video.likes.where("is_dislike = FALSE").count
    json.dislikes video.likes.where("is_dislike = TRUE").count
    
    if logged_in?
      current_like = Like.find_by(
                            user_id: current_user.id,
                            likeable_id: video.id,
                            likeable_type: 'Video')
      json.currentUserDislikes current_like ? current_like.is_dislike : nil
    end

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
