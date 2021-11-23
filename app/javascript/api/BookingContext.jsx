import React, { useReducer, useContext, useCallback, useEffect } from "react"

const REQUEST_BOOKINGS = "REQUEST_BOOKINGS"
const ADD_BOOKING = "ADD_BOOKING"
const SORT_BOOKINGS = "SORT_BOOKINGS"
const SET_LOADING = "SET_LOADING"

const url = "api/v1/bookings/"

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
        bookings: payload,
        loading: false
      }
    case ADD_BOOKING:
      return {
        bookings: { ...state.bookings, payload },
        loading: false
      }
    case SORT_BOOKINGS:
      debugger
      const filterBookings = state.bookings.map((b) => b.day === payload.day)
      console.log(filterBookings)
      return {
        ...state,
        bookings: filterBookings
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

    try {
      const response = await fetch(`${url}index`)
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
          room: b.room_id,
          show: true
        }
      })
      dispatch({ type: REQUEST_BOOKINGS, payload: bookings })
    } catch (error) {
      console.log(error)
      return false
    }
  }, [])

  const addBooking = async (booking) => {
    console.log("adding booking", booking)
    dispatch({ type: SET_LOADING, payload: true })
    try {
      const response = await fetch(`${url}create`, {
        method: "POST",
        body: JSON.stringify(booking),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) throw new Error("Network error.")
      const data = await response.json()
      console.log(data)
      debugger
      dispatch({ type: ADD_BOOKING, payload: booking })
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const filterBookingsByDay = (day) => {
    console.log(day)
    dispatch({ type: "FILTER_BOOKINGS", payload: day })
  }

  useEffect(() => {
    getBookings()
  }, [getBookings])

  const value = {
    bookings: state.bookings,
    isLoading: state.loading,
    getBookings,
    addBooking,
    filterBookingsByDay
  }

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
