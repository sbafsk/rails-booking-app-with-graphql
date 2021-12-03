# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Booking.create([{
                 from: DateTime.parse('2021 Dec 8 10'),
                 to: DateTime.parse('2021 Dec 8 11'),
                 user_name: 'seba',
                 user_mail: 'test@test.com',
                 room: 'sala-grande'
               },
                {
                  from: DateTime.parse('2021 Dec 8 14'),
                  to: DateTime.parse('2021 Dec 8 16'),
                  user_name: 'seba',
                  user_mail: 'test@test.com',
                  room: 'sala-grande'
                },
                {
                  from: DateTime.parse('2021 Dec 8 18'),
                  to: DateTime.parse('2021 Dec 8 19'),
                  user_name: 'seba',
                  user_mail: 'test@test.com',
                  room: 'sala-grande'
                }])
