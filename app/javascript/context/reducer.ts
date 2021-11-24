import { BookingActions, IBookingState } from "../types"

const { REQUEST_BOOKINGS, FILTER_BOOKINGS, SET_LOADING, SET_ERROR } =
  BookingActions

export const reducer = (state: IBookingState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_BOOKINGS:
      return {
        ...state,
        bookings: payload,
        loading: false
      }
    case FILTER_BOOKINGS:
      return {
        ...state,
        selectedDay: payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      break
  }
}
