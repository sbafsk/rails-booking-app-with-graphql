# frozen_string_literal: true

require 'test_helper'
# class BookingTest
class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  setup do
    @existing_booking = Booking.create({
                                         from: DateTime.parse('02 Dec 13:22'),
                                         to: DateTime.parse('02 Dec 14:22'),
                                         user_name: 'seba',
                                         user_mail: 'test@test.com',
                                         room: 'sala-1'
                                       })
  end

  teardown do
    @existing_booking.destroy
  end

  test 'when booking is not intersected' do
    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 8:00'),
                                to: DateTime.parse('02 Dec 10:00'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert new_booking.valid?
  end

  test 'when booking is partial intersected' do
    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 12:00'),
                                to: DateTime.parse('02 Dec 13:30'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end

  test 'when booking is contained' do
    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 13:45'),
                                to: DateTime.parse('02 Dec 14:00'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end

  test 'when booking is containing a saved book' do
    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 13:00'),
                                to: DateTime.parse('02 Dec 14:30'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end

  test 'when booking starts at the same time' do
    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 13:22'),
                                to: DateTime.parse('02 Dec 14:22'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end
end
