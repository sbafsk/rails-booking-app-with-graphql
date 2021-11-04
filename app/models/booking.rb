class Booking < ApplicationRecord

  belongs_to :room
  validates :date_to, :date_from, :user_name, :user_mail, :code, presence: true
  # check date validations



end
