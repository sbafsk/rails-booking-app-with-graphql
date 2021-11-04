import React, { useReducer, useContext, useCallback, useEffect } from "react"

import { REQUEST_BOOKINGS, SET_LOADING, SET_ERROR } from "./types"

const BookingContext = React.createContext()

export const useBookings = () => {
  return useContext(BookingContext)
}

const initialState = {
  bookings: [],
  loading: true,
  error: false
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

  const setError = (error) => {
    dispatch({ type: SET_ERROR, payload: error })
  }

  const value = {
    bookings: state.bookings,
    loading: state.loading,
    error: state.error,
    getBookings,
    setError
  }

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
