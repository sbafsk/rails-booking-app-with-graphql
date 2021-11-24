/**
 * @param id?
 * @param from
 * @param to
 * @param user_name
 * @param user_mail
 * @param room
 */
export interface IBooking {
  id?: number
  from: Date
  to: Date
  user_name: string
  user_mail: string
  room: string
}

/**
 * @param day
 * @param fromTime
 * @param toTime
 * @param name
 * @param email
 * @param room
 */
export interface IBookingForm {
  day: string
  fromTime: string
  toTime: string
  name: string
  email: string
  room: string
}

/**
 * @param IBooking[]
 * @param loading
 * @param selectedDay
 * @param error
 * @param dialog
 */
export interface IBookingState {
  bookings: IBooking[]
  loading: boolean
  selectedDay: Date
  error: null | string
  dialog: IDialogProps
}

/**
 * @param open
 * @param title
 * @param message
 */
export interface IDialogProps {
  open: boolean
  title: string
  message: string
}

export enum BookingActions {
  REQUEST_BOOKINGS = "REQUEST_BOOKINGS",
  ADD_BOOKING = "ADD_BOOKING",
  FILTER_BOOKINGS = "FILTER_BOOKINGS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_DIALOG = "SET_DIALOG"
}
