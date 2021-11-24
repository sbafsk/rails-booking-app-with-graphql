import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"

import { BookingProvider } from "../context"
import Routes from "../routes"

export default function App() {
  return (
    <BookingProvider>
      <CssBaseline />
      <Routes />
    </BookingProvider>
  )
}
