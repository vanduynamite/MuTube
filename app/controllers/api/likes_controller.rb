
class Api::LikesController < ApplicationController

  def create
    return false unless authorized_user?

    if params[:comment_id]
      # TODO: handle if the like comes in through the comments section
      debugger
    end

    @video = Video.find_by(id: params[:video_id])
    @like = Like.find_by(
      likeable_id: @video.id,
      likeable_type: 'Video',
      user_id: current_user.id
    )

    unless @like
      new_like
    else
      process_like
    end
  end

  def new_like
    @like = @video.likes.new
    @like.user = current_user
    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render 'api/videos/show.json.jbuilder'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def process_like
    unless @like.is_dislike == true?(like_params[:is_dislike])
      update
    else
      destroy
    end
  end

  def update
    # update the record if the user has a like on this record
    ## and the is_dislike param does not match the curent record value

    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render 'api/videos/show.json.jbuilder'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    # remove the record if the user has a like on this record
    ## and the is_dislike param matches the curent record value

    if @like.delete
      render 'api/videos/show.json.jbuilder'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:is_dislike)
  end

  def true?(boolean_as_string)
    boolean_as_string == "true"
  end

end
