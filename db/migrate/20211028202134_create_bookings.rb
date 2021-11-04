class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :date_from, null: false
      t.datetime :date_to, null: false
      t.string :user_name, null: false
      t.string :user_mail, null: false
      t.integer :code, null: false
      t.references :room, null: false

      t.timestamps
    end
  end
end
