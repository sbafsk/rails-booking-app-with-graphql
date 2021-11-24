export interface IBooking {
  id?: number
  from: Date
  to: Date
  user_name: string
  user_mail: string
  room: string
}

export interface IBookingForm {
  day: string
  fromTime: string
  toTime: string
  name: string
  email: string
  room: string
}

export interface IBookingState {
  bookings: IBooking[]
  loading: boolean
  selectedDay: Date
  error: null | string
}

export enum BookingActions {
  REQUEST_BOOKINGS = "REQUEST_BOOKINGS",
  ADD_BOOKING = "ADD_BOOKING",
  FILTER_BOOKINGS = "FILTER_BOOKINGS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR"
}
