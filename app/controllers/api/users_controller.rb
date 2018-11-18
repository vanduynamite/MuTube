
class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render 'api/users/show.json.jbuilder'
    else
      render json: ['User not found.'], status: 404
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    @user = User.find_by(username: user_params[:search])
    @user = User.find_by(email: user_params[:search]) unless @user

    if @user
      render 'api/users/show.json.jbuilder'
    else
      render json: ["Couldn't find your µTube Account"], status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :first_name,
      :last_name,
      :email,
      :user_image_url,
      :search
    )
  end

end
