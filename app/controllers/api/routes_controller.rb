class Api::RoutesController < ApplicationController
  before_action :set_route, only: [:show]

  def index
    render json: Route.all
  end

  def show
    render json: Route.get_route(@route.id)
  end

  private
  def set_route
    params.require(:route).permit(
      :routeId,
      :name,
      :stars,
      :type,
      :location,
      :pitches,
    )
  end
end
