# frozen_string_literal: true

# testing class Booking
class Booking < ApplicationRecord
  # way to manage props with something like type interface.

  validates :from, :to, :user_name, :user_mail, :room, presence: true
  # check date validations

  validate :booking_doesnt_overlap, :to_after_from

  private

  def to_after_from
    if to < from
      errors.add(:to, message: 'must be after the from time')
    end
  end

  def booking_doesnt_overlap
    new_booking_range = from..to
    Booking.where('? = bookings.from::date', from.to_date).map do |b|
      register_range = b.from..b.to
      check_if_contained(b, register_range, 'From or To datetime are between some record.')
      check_if_contained(b, new_booking_range, 'Some record is between from and to datetimes.')
    end
  end

  def check_if_contained(register, range, message)
    if  (range.cover?(register.from) || range.cover?(register.to)) &&
        (to != register.from && from != register.to)
      errors.add(:from, :to, message: message)
    end
  end
end
