
class Api::UsersController < ApplicationController

  def show
    # TODO: bonus section for viewing a user's page
    # will need to get their views and store it as array
    # which can be done in json I suppose
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
