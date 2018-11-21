
class Api::CommentsController < ApplicationController

  def create
    return false unless authorized_user?()

    video = Video.find_by(id: params[:video_id])
    @user = current_user

    @comment = video.comments.new
    @comment.user = @user
    @comment.body = comment_params[:body]

    if @comment.save
      render 'api/comments/show.json.jbuilder'
    else
      render json: @comment.errors.full_messages
    end

  end

  # TODO: let users update existing comments
  # def update
  #   @comment = Comment.find_by(id: params[:id])
  #   return false unless authorized_user?()
  # end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @user = @comment.user

    return false unless authorized_user?(@user.id)

    if @comment.destroy
      render 'api/comments/destroy.json.jbuilder'
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
