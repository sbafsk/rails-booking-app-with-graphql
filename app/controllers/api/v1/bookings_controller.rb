class Api::V1::BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :edit, :update, :destroy]

  # GET /bookings
  # GET /bookings.json
  def index
    @bookings = Booking.all
    render json: @bookings
  end

  # GET /bookings/1
  # GET /bookings/1.json
  def show
    if @booking
      render json: @booking
    else
      render json: @booking.errors
    end
  end

  # GET /bookings/new
  def new
    @booking = Booking.new
  end
  # GET /bookings/1/edit
  def edit
  end

  # POST /bookings
  # POST /bookings.json
  def create
    p 'create', booking_params

    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking
    else
      render json: @booking.errors
    end
  end

  # PATCH/PUT /bookings/1
  # PATCH/PUT /bookings/1.json
  def update
  end

  # DELETE /bookings/1
  # DELETE /bookings/1.json
  def destroy
    @booking.destroy

    render json: { notice: 'Booking was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booking_params
      params..require(:booking).permit(:id, :from, :to, :user_name, :user_mail, :room)
    end
end
