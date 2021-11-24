# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


booking1 = Booking.create({
  from: DateTime.new(2021, 11, 8, 10, 0, 0),
  to: DateTime.new(2021, 11, 8, 12, 0, 0),
  user_name: 'seba',
  user_mail: 'test@test.com',
  room: 'sala-1'
})

