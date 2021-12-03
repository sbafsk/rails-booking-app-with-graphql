# frozen_string_literal: true

# testing class Booking
class Booking < ApplicationRecord
  # way to manage props with something like type interface.

  validates :from, :to, :user_name, :user_mail, :room, presence: true
  # check date validations

  validate :to_after_from, :booking_doesnt_overlap

  private

  def to_after_from
    if to < from
      errors.add(:base, message: 'Hora Desde tiene que preceder a Hora Hasta.')
    end
  end

  def query_bookings
    Booking.where('? = bookings.from::date and ? = bookings.room', from.to_date, room)
  end

  def booking_doesnt_overlap
    new_booking_range = from..to
    query_bookings.map do |b|
      check_if_contained(b, b.from..b.to, from, to)
      check_if_contained(b, new_booking_range, b.from, b.to)
      break if errors.key?(:base)
    end
  end

  def check_if_contained(register, range, from_date, to_date)
    if  (range.cover?(from_date) || range.cover?(to_date)) &&
        (to != register.from && from != register.to)
      errors.add(:base, message: 'Horario de reserva ocupado.')
    end
  end
end
