json.videos do
  json.set! @video.id do
    json.id @video.id
    json.likes @video.likes.where("is_dislike = FALSE").count
    json.dislikes @video.likes.where("is_dislike = TRUE").count
    if logged_in?
      current_like = Like.find_by(
                            user_id: current_user.id,
                            likeable_id: @video.id,
                            likeable_type: 'Video')
      json.currentUserDislikes current_like ? current_like.is_dislike : nil
    end
  end
end
