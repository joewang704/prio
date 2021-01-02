class HomeController < ApplicationController
  before_action :verify_user
  def verify_user
    if cookies[:user].present?
      token = JSON.parse(cookies[:user])
      user = User.serialize_from_cookie(*token)
      return if user.present?
    end
    redirect_to '/'
  end

  def index
  end
end
