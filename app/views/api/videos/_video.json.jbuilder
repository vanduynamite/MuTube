json.videos do
  json.set! video.id do
    json.id video.id
    json.title video.title
    json.description video.description
    json.videoUrl url_for(video.video_file)
    json.uploaderId video.uploader_id

    # TODO: N+1
    json.views video.views
    json.likes video.likes.where("is_dislike = FALSE").count
    json.dislikes video.likes.where("is_dislike = TRUE").count

    # TODO: N+1
    if logged_in?
      current_like = Like.find_by(
                            user_id: current_user.id,
                            likeable_id: video.id,
                            likeable_type: 'Video')
      json.currentUserDislikes current_like ? current_like.is_dislike : nil
    end

    json.createdAt video.created_at

    json.commentIds comments.map { |comment| comment.id } if comments
  end
end

if users
  json.users do
    users.each do |user|
      json.set! user.id do
        json.id user.id
        json.username user.username
        json.userImageUrl user.user_image_url
      end
    end
  end
end

if comments
  json.comments do
    comments.each do |comment|
      json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.userId comment.user_id
        json.videoId comment.video_id

        json.likes comment.likes.where("is_dislike = FALSE").count
        json.dislikes comment.likes.where("is_dislike = TRUE").count
        if logged_in?
          current_like = Like.find_by(
                                user_id: current_user.id,
                                likeable_id: comment.id,
                                likeable_type: 'Comment')
          json.currentUserDislikes current_like ? current_like.is_dislike : nil
        end

        createdTimeAgo = time_ago_in_words(comment.created_at)
        createdTimeAgo = createdTimeAgo.gsub(/about /, '')
        createdTimeAgo = createdTimeAgo.gsub(/over /, '')
        createdTimeAgo = createdTimeAgo.gsub(/less than /, '')
        createdTimeAgo = createdTimeAgo.capitalize
        createdTimeAgo += ' ago'
        json.createdTimeAgo createdTimeAgo
      end
    end
  end
end
