class Api::RoutesController < ApplicationController
  def index
    render json: ClimberClient.routes
  end
end
