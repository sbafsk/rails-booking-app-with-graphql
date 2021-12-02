# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CoworkReservas
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    config.time_zone = 'America/Montevideo'
    # config.eager_load_paths << Rails.root.join("extras")

    config.react.server_renderer_extensions = %w[jsx js]
    config.react.server_renderer_directories = ['/app/assets/javascripts', '/app/javascript/']
  end
end
