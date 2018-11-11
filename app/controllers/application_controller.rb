class ApplicationController < ActionController::Base

  private

  def current_user
    current_session = Session.find_by(token: session[:session_token])
    current_session ? current_session.user : nil
  end

  def login!(user)
    session[:session_token] = user.reset_session!
  end

  def logout!
    current_user.destroy_session!(session[:session_token])
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
