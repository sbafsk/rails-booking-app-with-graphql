# frozen_string_literal: true

# testing class Booking
class Booking < ApplicationRecord
  # way to manage props with something like type interface.

  validates :from, :to, :user_name, :user_mail, :room, presence: true
  # check date validations

  validate :new_booking_is_contained_by_register, :new_booking_contains_register, :to_after_from

  private

  def to_after_from
    if to < from
      errors.add(:to, message: 'must be after the from time')
    end
  end

  def new_booking_is_contained_by_register
    Booking.all.map do |b|
      booking_range = b.from..b.to
      if  (booking_range.cover?(from) && from != b.to) ||
          (booking_range.cover?(to) && to != b.from)
        errors.add(:from, :to, message: 'From or To dates are between some record.')
      end
    end
  end

  def new_booking_contains_register
    booking_range = from..to
    Booking.all.map do |b|
      if  (booking_range.cover?(b.from) && to != b.from) ||
          (booking_range.cover?(b.to) && from != b.to)
        errors.add(:from, :to, message: 'Some record is between from and to datetimes.')
      end
    end
  end
end
