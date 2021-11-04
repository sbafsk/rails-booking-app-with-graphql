import React from "react"
import { Box, Typography } from "@material-ui/core"

import Bookings from "./Bookings"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  mainBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "24rm",
    width: "36rm",
    flexDirection: "column"
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.mainBox}>
        <Typography as="h1">Bookings App</Typography>
        <Bookings />
      </Box>
    </>
  )
}

export default Home
