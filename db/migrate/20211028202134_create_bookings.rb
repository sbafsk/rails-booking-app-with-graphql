class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.date :day, null: false
      t.time :from_time, null: false
      t.time :to_time, null: false
      t.string :user_name, null: false
      t.string :user_mail, null: false
      t.string :room, null: false

      t.timestamps
    end
  end
end
