import React from "react"

import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  footer: {
    width: "100vw",
    height: "64px",
    position: "fixed",
    bottom: "0",
    backgroundColor: "#666",
    color: "#FFF",
    textAlign: "center"
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <Typography as="h3">Booking App 2021</Typography>
    </Box>
  )
}

export default Footer
