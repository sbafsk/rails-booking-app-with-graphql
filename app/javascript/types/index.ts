/**
 * @param id?
 * @param from
 * @param to
 * @param userName
 * @param userEmail
 * @param room
 */
export interface IBooking {
  id?: number
  from: Date
  to: Date
  userName: string
  userMail: string
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
 * @param filter
 * @param error
 * @param dialog
 */
export interface IBookingState {
  bookings: IBooking[]
  loading: boolean
  filter: { date: Date; room: string }
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
  severity: string
  message: string
}

/**
 * @param bookings: IBooking[]
 * @param isLoading: boolean
 * @param filter: { date: Date; room: string }
 * @param dialogProps: IDialogProps
 * @param addBooking: (booking: IBookingForm) => Promise<void>
 * @param requestBookings: () => Promise<void>
 * @param setBookingsByDay: (day: Date) => void
 * @param setBookingsByRoom: (room: string) => void
 * @param setError: (error: null | string) => void
 * @param openDialog: (dialogProps) => void
 * @param closeDialog: () => void
 */

export interface IUseBookings {
  bookings: IBooking[]
  isLoading: boolean
  filter: { date: Date; room: string }
  dialogProps: IDialogProps
  addBooking: (booking: IBookingForm) => Promise<void>
  requestBookings: () => Promise<void>
  setBookingsByDay: (day: Date) => void
  setBookingsByRoom: (room: string) => void
  setError: (error: null | string) => void
  openDialog: (dialogProps) => void
  closeDialog: () => void
}

export enum BookingActions {
  REQUEST_BOOKINGS = "REQUEST_BOOKINGS",
  ADD_BOOKING = "ADD_BOOKING",
  FILTER_BOOKINGS = "FILTER_BOOKINGS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_DIALOG = "SET_DIALOG"
}
