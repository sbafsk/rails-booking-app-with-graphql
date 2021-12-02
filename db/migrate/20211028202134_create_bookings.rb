# frozen_string_literal: true

class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :from, null: false
      t.datetime :to, null: false
      t.string :user_name, null: false
      t.string :user_mail, null: false
      t.string :room, null: false

      t.timestamps
    end
  end
end
