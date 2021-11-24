import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useCallback
} from "react"

import { reducer } from "./reducer"

import { requestBookings, createBooking } from "../api/booking"

import { BookingActions, IBookingState, IBooking } from "../types"

const { REQUEST_BOOKINGS, ADD_BOOKING, FILTER_BOOKINGS, SET_LOADING } =
  BookingActions

const BookingContext = createContext(undefined)

export const useBookings = () => {
  return useContext(BookingContext)
}

const initialState: IBookingState = {
  bookings: [],
  loading: false,
  selectedDay: ""
}

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getBookings = useCallback(async () => {
    dispatch({ type: SET_LOADING, payload: true })

    try {
      const bookings = await requestBookings()
      const dateFormatedBookings = bookings.map((b) => {
        return {
          ...b,
          from: new Date(b.from.toString()),
          to: new Date(b.to.toString())
        }
      })
      dispatch({ type: REQUEST_BOOKINGS, payload: dateFormatedBookings })
    } catch (error) {
      console.log(error)
      return false
    }
  }, [])

  const addBooking = async (booking: IBooking) => {
    console.log("adding booking", booking)
    dispatch({ type: SET_LOADING, payload: true })
    try {
      createBooking(booking)
      dispatch({ type: ADD_BOOKING, payload: booking })
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const filterBookingsByDay = (day: string) => {
    console.log(day)
    dispatch({ type: FILTER_BOOKINGS, payload: day })
  }

  useEffect(() => {
    getBookings()
  }, [getBookings])

  const value = {
    bookings: state.bookings,
    isLoading: state.loading,
    selectedDay: state.selectedDay,
    getBookings,
    addBooking,
    filterBookingsByDay
  }

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
