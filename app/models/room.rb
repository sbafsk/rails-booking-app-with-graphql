class Room < ApplicationRecord
  has_many :bookings, dependent: :destroy
  validates :name, :description, presence: true


end
