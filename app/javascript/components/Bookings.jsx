import React from "react"
import { Box, Button } from "@material-ui/core"

import { useBookings } from "../api/BookingContext"

const Bookings = () => {
  const { bookings, getBookings } = useBookings()

  console.log(bookings)

  return (
    <Box>
      <Button onClick={() => getBookings()}>Get Bookings</Button>
      <ul>
        {!!bookings &&
          bookings.map((b) => {
            return (
              <li key={b.key}>
                {b.id} | {b.user} | {b.dateFrom}
              </li>
            )
          })}
      </ul>
    </Box>
  )
}

export default Bookings
