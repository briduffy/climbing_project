class Api::RoutesController < ApplicationController
  def index
    render json: routes
  end
end
