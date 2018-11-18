
class Api::ViewsController < ApplicationController

  def create

    # only create a view record if
    if logged_in?
      @view = View.find_by(
        video_id: params[:video_id],
        user_id: current_user.id)

      if @view
        @view.updated_at = Time.now()
      else
        @view = View.new(
          video_id: params[:video_id],
          user_id: current_user.id)
      end

      @view.save
    end

    # always update the video views
    @video = Video.find_by(id: params[:video_id])
    @video.views = @video.views + 1

    if @video.save
      render 'api/videos/show.json.jbuilder'
    else
      render json: @video.errors.full_messages, status: 422
    end



  end

end
