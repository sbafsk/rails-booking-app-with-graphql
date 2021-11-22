import React from "react"
import { Box, Container, Typography, makeStyles } from "@material-ui/core"

import Bookings from "./Bookings/Bookings"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  mainBox: {
    border: "solid 1px #111",
    borderRadius: "15px",
    height: theme.spacing(80),
    width: theme.spacing(120)
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    marginTop: theme.spacing(5)
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.wrapper}>
        <Box className={classes.mainBox}>
          <Typography className={classes.title} as="h1">
            FIC - Cowork | Reserva Salas
          </Typography>
          <Bookings />
        </Box>
      </Container>
    </>
  )
}

export default Home
