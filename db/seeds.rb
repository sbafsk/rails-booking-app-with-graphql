# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1, user2  = User.create([{ name: 'Star' }, { name: 'Lord' }])

room1, room2 = Room.create([{ name: 'Room 1', description: 'asdasd' }, { name: 'Room 2', description: 'akshlakhsdl' }])

Booking.create({date_from: DateTime.now, date_to: 1.hour.from_now, user: user1, room: room1 })
