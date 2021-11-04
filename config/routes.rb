# frozen_string_literal: true

Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'bookings/index'
      post 'booking/create'
      delete 'booking/:id', to: 'booking#destroy'
    end
  end

  root 'bookings#index'
  # resources :users
  # resources :bookings
  # resources :rooms

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
