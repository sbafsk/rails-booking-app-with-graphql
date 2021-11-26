import React, { useEffect } from "react"
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core"
import moment from "moment"

moment.locale("es")

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
  const { bookings, requestBookings, filter } = useBookings()
  const { date: dateFilter } = filter

  useEffect(() => {
    requestBookings()
  }, [])

  return (
    <TableContainer className={classes.tableContainer}>
      <Typography align="center" variant="h6">
        {moment(dateFilter).format("LL")}
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
                moment(b.from).format("LL") === moment(dateFilter).format("LL")
              ) {
                return (
                  <TableRow key={b.id}>
                    <TableCell>
                      {moment(b.from).format("HH:MM")}
                      {" a "}
                      {moment(b.to).format("HH:MM")}
                    </TableCell>
                    <TableCell>{b.userName}</TableCell>
                    <TableCell>{b.room.replace("-", " ")}</TableCell>
                  </TableRow>
                )
              }
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
