class Booking < ApplicationRecord

  # way to manage props with something like type interface.

  validates :from, :to, :user_name, :user_mail, :room, presence: true
  # check date validations

  validate :period_not_taken

  def period_not_taken
    # consultar si los periodos no se overlap

    # if error > errors.add(attr, msg)

  end

end
