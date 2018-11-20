
class Api::CommentsController < ApplicationController

  def create
    return false unless authorized_user?()


  end

  def update

  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @user = @comment.user

    return false unless authorized_user?(@user.id)

    if @comment.delete
      render 'api/comments/show.json.jbuilder'
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
