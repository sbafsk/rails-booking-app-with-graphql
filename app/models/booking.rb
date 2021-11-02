class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room
  validates :date_to, :date_from, presence: true 
  # check date validations

  

end
