# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

room1, room2 = Room.create([
  { name: 'Room 1', description: 'This is Room One' },
  { name: 'Room 2', description: 'This is Room Two' }
  ])

booking1 = Booking.create({
  date_from: DateTime.new(2021, 11, 8, 10, 0, 0),
  date_to: DateTime.new(2021, 11, 8, 12, 0, 0),
  user_name: 'seba',
  user_mail: 'test@test.com',
  code: 1234,
  room: room1
})
  # {
  #   date_from: DateTime.new(2021, 11, 9, 10, 0, 0),
  #   date_to: DateTime.new(2021, 11, 9, 12, 0, 0),
  #   user_name: 'seba',
  #   user_mail: 'test@test.com',
  #   code: 2345,
  #   room: room2
  # }
# ])
