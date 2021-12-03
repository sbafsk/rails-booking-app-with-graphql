import React from "react"
import { Snackbar } from "@material-ui/core"

import { Alert } from "@material-ui/lab"

import { useBookings } from "../../context"

export default function Notification({ open, message, severity }) {
  const { closeDialog } = useBookings()

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={() => closeDialog()}
      autoHideDuration={4000}
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}
