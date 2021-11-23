import React from "react"
import { Box, makeStyles, Button } from "@material-ui/core"

import { useBookings } from "../../api/BookingContext"

const useStyles = makeStyles((theme) => {})

export default function BookingTable() {
  const classes = useStyles()
  const { bookings } = useBookings()
  console.log("table", bookings)
  return (
    <Box>
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
