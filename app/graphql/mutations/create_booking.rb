module Mutations
  class CreateBooking < BaseMutation
    # arguments passed to the `resolve` method

    argument :from, GraphQL::Types::ISO8601DateTime, required: true
    argument :to, GraphQL::Types::ISO8601DateTime, required: true
    argument :user_name, String, required: true
    argument :user_mail, String, required: true
    argument :room, String, required: true

    # return type from the mutation
    type Types::BookingType

    def resolve(from: nil, to: nil, user_name: nil, user_mail: nil, room: nil)
      Booking.create!(
        from: from,
        to: to,
        user_name: user_name,
        user_mail: user_mail,
        room: room,
      )
    end
  end
end
