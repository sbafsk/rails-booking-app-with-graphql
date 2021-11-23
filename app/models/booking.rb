class Booking < ApplicationRecord

  # way to manage props with something like type interface.

  validates :day, :from_time, :to_time, :user_name, :user_mail, :room presence: true
  # check date validations



end
