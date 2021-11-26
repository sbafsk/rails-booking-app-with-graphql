import React, { useEffect } from "react"
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from "@material-ui/core"
import moment from "moment"

import { useBookings } from "../../context"

import { IBooking } from "../../types"

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    margin: theme.spacing(3),
    [theme.breakpoints.down("md")]: { maxWidth: "90%" },
    [theme.breakpoints.up("md")]: { maxWidth: "45%" }
  }
}))

moment.locale("es")

export default function BookingTable() {
  const classes = useStyles()
  const { bookings, requestBookings, selectedDay } = useBookings()

  useEffect(() => {
    requestBookings()
  }, [])

  return (
    <TableContainer className={classes.tableContainer}>
      <Typography align="center" variant="h6">
        {moment().format("LL")}
      </Typography>
      <Table aria-label="booking table">
        <TableHead>
          <TableRow>
            <TableCell>Hora</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Sala</TableCell>
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
                    <TableCell>
                      {moment(b.from).format("HH:MM")}
                      {" a "}
                      {moment(b.to).format("HH:MM")}
                    </TableCell>
                    <TableCell>{b.userName}</TableCell>
                    <TableCell>{b.room}</TableCell>
                  </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
