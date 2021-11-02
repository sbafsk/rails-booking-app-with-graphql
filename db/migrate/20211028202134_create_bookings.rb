class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :date_from, null: false
      t.datetime :date_to, null: false
      t.references :room, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end
