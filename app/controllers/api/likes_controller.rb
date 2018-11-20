
class Api::LikesController < ApplicationController

  def create
    return false unless authorized_user?

    process_video_like if params[:video_id]
    process_comment_like if params[:comment_id]
  end

  def process_comment_like
    # TODO: process comment likes
  end

  def process_video_like
    @video = Video.find_by(id: params[:video_id])
    @like = Like.find_by(
      likeable_id: @video.id,
      likeable_type: 'Video',
      user_id: current_user.id
    )

    unless @like
      new_video_like
    else
      unless @like.is_dislike == true?(like_params[:is_dislike])
        update_video_like
      else
        destroy_video_like
      end
    end
  end

  def new_video_like
    @like = @video.likes.new
    @like.user = current_user
    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render 'api/videos/like.json.jbuilder'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update_video_like
    # update the record if the user has a like on this record
    ## and the is_dislike param does not match the curent record value

    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render 'api/videos/like.json.jbuilder'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy_video_like
    # remove the record if the user has a like on this record
    ## and the is_dislike param matches the curent record value

    if @like.delete
      render 'api/videos/like.json.jbuilder'
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
