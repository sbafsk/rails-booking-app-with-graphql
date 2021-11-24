import { BookingActions, IBookingState } from "../types"

const { REQUEST_BOOKINGS, ADD_BOOKING, FILTER_BOOKINGS, SET_LOADING } =
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
    case ADD_BOOKING:
      return {
        ...state,
        bookings: { ...state.bookings, payload },
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
    default:
      break
  }
}
