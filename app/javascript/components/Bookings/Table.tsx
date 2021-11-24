import React from "react"
import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core"

import { useBookings } from "../../context"

import { IBooking } from "../../types"

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    margin: theme.spacing(3),
    [theme.breakpoints.down("md")]: { maxWidth: "90%" },
    [theme.breakpoints.up("md")]: { maxWidth: "45%" }
  }
}))

export default function BookingTable() {
  const classes = useStyles()
  const { bookings, selectedDay } = useBookings()
  console.log("table", bookings)
  return (
    <TableContainer className={classes.tableContainer}>
      <Table aria-label="booking table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Dia</TableCell>
            <TableCell align="right">Hora</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Sala</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!bookings &&
            bookings.map((b: IBooking) => {
              if (
                selectedDay === null ||
                b.from.toDateString() === selectedDay.toDateString()
              )
                return (
                  <TableRow key={b.id}>
                    <TableCell align="right">
                      {b.from.toDateString().slice(4, 10)}
                    </TableCell>
                    <TableCell align="right">{`${b.from
                      .toTimeString()
                      .slice(0, 5)} a ${b.to
                      .toTimeString()
                      .slice(0, 5)}`}</TableCell>
                    <TableCell align="right">{b.user_name}</TableCell>
                    <TableCell align="right">{b.room}</TableCell>
                  </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
