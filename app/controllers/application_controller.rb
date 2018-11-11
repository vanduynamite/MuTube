class ApplicationController < ActionController::Base

  private

  def current_user
    Session.find_by(token: session[:session_token]).user
  end

  def login!(user)
    session[:session_token] = user.reset_session!
  end

  def logout!
    current_user.destroy_session!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
