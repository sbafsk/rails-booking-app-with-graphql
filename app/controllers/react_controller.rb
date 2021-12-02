# frozen_string_literal: true

# React Controller
class ReactController < ApplicationController
  # need to disable the CSRF token checking that Rails automatically configures for our apps.
  # avoid having to validate the tokens each time we perform a request.
  # ???

  protect_from_forgery with: :null_session

  layout 'react'

  def index
    # index
  end
end
