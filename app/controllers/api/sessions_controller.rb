
class Api::SessionsController < ApplicationController

  def create
    logout! if logged_in?

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    if logged_in?
      @user = current_user
      logout!
      render 'api/users/show.json.jbuilder'
    else
      render json: ['No current user.'], status: 404
    end
  end

end
