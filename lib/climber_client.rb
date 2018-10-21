class ClimberClient
  def self.routes
    client.routes
  end

  private
  def self.client
    Climber::REST::Client.new do |config|
      config.private_key =ENV['MOUNTAIN_PROJECT_PRIVATE_KEY']
    end
  end
end
