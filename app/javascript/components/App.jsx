import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"

import { BookingProvider } from "../api/BookingContext"
import Routes from "../routes/index"

const App = () => {
  return (
    <>
      <BookingProvider>
        <CssBaseline />
        <Routes />
      </BookingProvider>
    </>
  )
}

export default App
