import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"

import Bookings from "./Bookings/Bookings"
import Notification from "./UI/Notification"

import { useBookings } from "../context"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    [theme.breakpoints.down("md")]: { minHeight: "100vh" },
    [theme.breakpoints.up("sm")]: { height: "100vh" },
    overflow: "scroll"
  },
  mainBox: {
    border: "solid 1px #666",
    borderRadius: "15px",
    backgroundColor: "#FFF",
    margin: theme.spacing(10) + "px auto",
    [theme.breakpoints.down("md")]: {
      minHeight: theme.spacing(80),
      width: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: "80%",
      width: theme.spacing(100)
    }
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    marginTop: theme.spacing(5)
  }
}))

const Home = () => {
  const { dialogProps } = useBookings()

  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.mainBox}>
        <Typography className={classes.title} variant="h1">
          FIC - Cowork | Reserva Salas
        </Typography>
        <Bookings />
        {!!dialogProps && <Notification {...dialogProps} />}
      </Box>
    </Box>
  )
}

export default Home
