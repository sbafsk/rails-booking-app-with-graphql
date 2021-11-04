import React from "react"

import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const navItems = [
  { name: "Reservar", to: "" },
  { name: "Mis Reservas", to: "" }
]

const useStyles = makeStyles({
  header: {
    width: "100vw",
    height: "64px",
    position: "fixed",
    top: "0",
    backgroundColor: "#666",
    color: "#FFF"
  }
})

export const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <Box className={classes.navItems}>
        {navItems.map((item) => {
          ;<Link className={classes.item} to={item.to}>
            {item.name}
          </Link>
        })}
      </Box>
    </Box>
  )
}
