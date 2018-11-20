json.comments do
  json.set! @comment.id do
    json.id @comment.id
    json.body @comment.body
    json.userId @comment.user_id
    json.videoId @comment.video_id

    # TODO: N+1
    json.likes @comment.likes.where("is_dislike = FALSE").count
    json.dislikes @comment.likes.where("is_dislike = TRUE").count
    if logged_in?
      current_like = Like.find_by(
                            user_id: current_user.id,
                            likeable_id: @comment.id,
                            likeable_type: 'Comment')
      json.currentUserDislikes current_like ? current_like.is_dislike : nil
    end

    createdTimeAgo = time_ago_in_words(@comment.created_at)
    createdTimeAgo = createdTimeAgo.gsub(/about /, '')
    createdTimeAgo = createdTimeAgo.gsub(/over /, '')
    createdTimeAgo = createdTimeAgo.gsub(/less than /, '')
    createdTimeAgo = createdTimeAgo.capitalize
    createdTimeAgo += ' ago'
    json.createdTimeAgo createdTimeAgo
  end
end

json.commentId @comment.id
json.videoId @comment.video_id

## I don't expect this is needed, as the logged in user is making a comment
## so their information should pretty clearly be in state
# json.users do
#   json.set! @user.id do
#     json.id @user.id
#     json.username @user.username
#     json.userImageUrl @user.user_image_url
#   end
# end
