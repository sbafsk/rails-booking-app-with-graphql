import React from "react"
import { Box, Container, Typography, makeStyles } from "@material-ui/core"

import Bookings from "./Bookings/Bookings"
import Notification from "./UI/Notification"

import { useBookings } from "../context"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  mainBox: {
    border: "solid 1px #666",
    borderRadius: "15px",
    width: theme.spacing(80),
    backgroundColor: "#FFF",
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(80)
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(60)
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
    <Container className={classes.wrapper}>
      <Box className={classes.mainBox}>
        <Typography className={classes.title} variant="h1">
          FIC - Cowork | Reserva Salas
        </Typography>
        <Bookings />
        <Notification open={!!dialogProps} {...dialogProps} />
      </Box>
    </Container>
  )
}

export default Home
