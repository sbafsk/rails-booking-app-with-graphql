# frozen_string_literal: true

# testing class Booking
class Booking < ApplicationRecord
  # way to manage props with something like type interface.

  validates :from, :to, :user_name, :user_mail, :room, presence: true
  # check date validations

  validate :period_not_taken

  def period_not_taken
    has_from_between_records =
      Booking
      .where('? between bookings.from and bookings.to and ? != bookings.to', from, from)
      .any?
    has_to_between_records =
      Booking
      .where('? between bookings.from and bookings.to and ? != bookings.from', to, to)
      .any?

    return errors.add(:from, :to, message: 'From or To dates are between some record.') if has_from_between_records || has_to_between_records

  end

end
