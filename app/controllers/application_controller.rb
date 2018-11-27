class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  private

  def current_user
    return @current_user if @current_user
    current_session = Session.find_by(token: session[:session_token])
    @current_user = current_session ? current_session.user : nil
  end

  def login!(user)
    session[:session_token] = user.reset_session!
  end

  def logout!
    current_user.destroy_session!(session[:session_token])
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def authorized_user?(id=nil)

    # TODO:  this is adding another db query

    unless logged_in?
      render json: ['Requires user to be logged in.'], status: 401
      return false
    end

    if current_user.id != id && id != nil
      render json: ['You are logged in as the wrong user.'], status: 401
      return false
    end

    true

  end

end
