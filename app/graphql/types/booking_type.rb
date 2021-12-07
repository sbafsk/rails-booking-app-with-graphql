# frozen_string_literal: true

# GraphQL Types for Booking
module Types
  class BookingType < Types::BaseObject
    field :id, ID, null: false
    field :from, GraphQL::Types::ISO8601DateTime, null: false
    field :to, GraphQL::Types::ISO8601DateTime, null: false
    field :user_name, String, null: false
    field :user_mail, String, null: false
    field :room, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
