json.comments do
  json.set! @comment.id do
    json.id @comment.id
  end
end

json.videos do
  json.set! @comment.video_id do
    json.commentIds @comment.id
  end
end
