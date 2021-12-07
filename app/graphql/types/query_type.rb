# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :all_bookings, [BookingType], null: false

    def all_bookings
      Booking.all
    end
  end
end
