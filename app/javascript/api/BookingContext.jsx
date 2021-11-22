import React, { useReducer, useContext, useCallback } from "react"

import { REQUEST_BOOKINGS, SET_LOADING, ADD_BOOKING } from "./action_types"

const BookingContext = React.createContext()

export const useBookings = () => {
  return useContext(BookingContext)
}

const initialState = {
  bookings: [],
  loading: false
}

const reducer = (state, action) => {
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
        bookings: { ...state.bookings, payload }
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

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getBookings = useCallback(async () => {
    dispatch({ type: SET_LOADING, payload: true })
    const url = "api/v1/bookings/index"
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error("Network error.")
      const data = await response.json()
      const bookings = data.map((b) => {
        return {
          key: b.id,
          id: b.id,
          dateFrom: b.date_from,
          dateTo: b.date_to,
          user: b.user_name,
          mail: b.user_mail,
          room: b.room_id
        }
      })
      dispatch({ type: REQUEST_BOOKINGS, payload: bookings })
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }, [])

  const addBooking = (booking) => {
    console.log("adding booking", booking)
  }

  const value = {
    bookings: state.bookings,
    isLoading: state.loading,
    getBookings,
    addBooking
  }

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
