
class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :email, :user_image_url)
  end

end
