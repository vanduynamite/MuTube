
class Api::LikesController < ApplicationController

  def process_like
    return false unless authorized_user?

    if params[:video_id]
      @json_string = 'api/videos/like.json.jbuilder'
      @poly_entity = Video.find_by(id: params[:video_id])
      likeable_type = 'Video'
    end

    if params[:comment_id]
      @json_string = 'api/comments/like.json.jbuilder'
      @poly_entity = Comment.find_by(id: params[:comment_id])
      likeable_type = 'Comment'
    end

    @like = Like.find_by(
      likeable_id: @poly_entity.id,
      likeable_type: likeable_type,
      user_id: current_user.id
    )

    unless @like
      new_like
    else
      unless @like.is_dislike == true?(like_params[:is_dislike])
        update_like
      else
        destroy_like
      end
    end
  end

  def new_like
    @like = @poly_entity.likes.new
    @like.user = current_user
    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render @json_string
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update_like
    # update the record if the user has a like on this record
    ## and the is_dislike param does not match the curent record value

    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render @json_string
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy_like
    # remove the record if the user has a like on this record
    ## and the is_dislike param matches the curent record value

    if @like.delete
      render @json_string
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
