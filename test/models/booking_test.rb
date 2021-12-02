# frozen_string_literal: true

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  setup do
    @existing_booking = Booking.create({
                                         from: DateTime.parse('02 Dec 10AM'),
                                         to: DateTime.parse('02 Dec 11AM'),
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
                                from: DateTime.parse('02 Dec 8AM'),
                                to: DateTime.parse('02 Dec 10AM'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert new_booking.valid?
  end

  test 'when booking is partial intersected' do
    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 9AM'),
                                to: DateTime.parse('02 Dec 10:30AM'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end

  test 'when booking is contained' do

    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 10:30AM'),
                                to: DateTime.parse('02 Dec 11AM'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end

  test 'when booking is containing a saved book' do

    new_booking = Booking.new({
                                from: DateTime.parse('02 Dec 9:30AM'),
                                to: DateTime.parse('02 Dec 11:30AM'),
                                user_name: 'seba',
                                user_mail: 'test@test.com',
                                room: 'sala-1'
                              })

    assert !new_booking.valid?
  end
end
