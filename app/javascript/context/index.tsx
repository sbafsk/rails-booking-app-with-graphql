import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useCallback
} from "react"

import { reducer } from "./reducer"

import { requestBookings, createBooking } from "../api/booking"

import { BookingActions, IBookingState, IBooking, IBookingForm } from "../types"

const { REQUEST_BOOKINGS, FILTER_BOOKINGS, SET_LOADING, SET_ERROR } =
  BookingActions

const BookingContext = createContext(undefined)

export const useBookings = () => {
  return useContext(BookingContext)
}

const initialState: IBookingState = {
  bookings: [],
  loading: false,
  selectedDay: null,
  error: null
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
      setError(error)
    }
  }, [])

  const addBooking = async (booking: IBookingForm) => {
    dispatch({ type: SET_LOADING, payload: true })
    const { day, fromTime, toTime, name, email, room } = booking
    const newBooking: IBooking = {
      from: new Date(`${day}T${fromTime}:00`),
      to: new Date(`${day}T${toTime}:00`),
      user_name: name,
      user_mail: email,
      room: room
    }
    try {
      createBooking(newBooking)
      await getBookings()
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  const filterBookingsByDay = (date: string) => {
    console.log(date)
    dispatch({ type: FILTER_BOOKINGS, payload: new Date(date) })
  }

  const setError = (error) => {
    dispatch({ type: SET_ERROR, payload: error })
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
    filterBookingsByDay,
    setError
  }

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
