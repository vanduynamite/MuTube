
class Api::ViewsController < ApplicationController

  def create
    @video = Video.find_by(id: params[:video_id])
    @view = @video.views.new
    @view.user = current_user if logged_in?
    
    if @view.save
      render 'api/videos/show.json.jbuilder'
    else
      render json: ['wat'], status: 418
    end

  end

end
