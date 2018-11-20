json.comments do
  json.set! @comment.id do
    json.id @comment.id
    json.body @comment.body
    json.userId @comment.user_id
    json.videoId @comment.video_id

    createdTimeAgo = time_ago_in_words(@comment.created_at)
    createdTimeAgo = createdTimeAgo.gsub(/about /, '')
    createdTimeAgo = createdTimeAgo.gsub(/over /, '')
    createdTimeAgo = createdTimeAgo.gsub(/less than /, '')
    createdTimeAgo = createdTimeAgo.capitalize
    createdTimeAgo += ' ago'
    json.createdTimeAgo createdTimeAgo
  end
end

json.videos do
  json.set! @comment.video_id do
    json.commentIds @comment.id
  end
end

## I don't expect this is needed, as the logged in user is making a comment
## so their information should pretty clearly be in state
# json.users do
#   json.set! @user.id do
#     json.id @user.id
#     json.username @user.username
#     json.userImageUrl @user.user_image_url
#   end
# end
