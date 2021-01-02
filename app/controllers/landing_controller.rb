class LandingController < ApplicationController
  before_action :logged_in_redirect
  def logged_in_redirect
    if cookies[:user].present?
      token = JSON.parse(cookies[:user])
      Rails.logger.info("TOKEN")
      Rails.logger.info(token)
      user = User.serialize_from_cookie(*token)
      if user
        sign_in(:user, user)
        redirect_to '/app' 
      end
    end
  end
end
