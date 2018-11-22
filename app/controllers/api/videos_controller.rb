
class Api::VideosController < ApplicationController

  def index
    @videos = Video.all.with_attached_video_file.includes!(:uploader)

    # TODO: make this not grab all the videos!! use hereDoc

    if params[:search]
      scores = search_scores(params[:search])
      @videos = @videos.select { |video| scores[video.id] > 0 }
    end


    render 'api/videos/index.json.jbuilder'

  end

  def show
    @video = Video.find_by(id: params[:id])

    if @video
      @users = [@video.uploader] + @video.commenters
      @comments = @video.comments
      render 'api/videos/show.json.jbuilder'
    else
      render json: ['Video not found.'], status: 404
    end

  end

  def create
    return false unless authorized_user?

    @user = current_user
    @video = @user.videos.new(video_params)

    if @video.save
      @comments = @video.comments
      render 'api/videos/show.json.jbuilder'
    else
      render json: @video.errors.full_messages, status: 422
    end

  end

  def destroy
    @video = Video.find_by(id: params[:id])
    @user = @video.uploader

    return false unless authorized_user?(@user.id)

    @video.delete
    render 'api/videos/show.json.jbuilder'
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :video_file)
  end

  def search_scores(search_params)

    # room for improvement here

    search_words = search_params.downcase.split(' ')
    scores = {}

    @videos.map do |video|
      score = 0
      title = video.title.downcase
      desc = video.title.downcase

      search_words.each { |word| score += 1 if title.include?("#{word}") || desc.include?("#{word}") }

      scores[video.id] = score
    end

    scores

  end

end
