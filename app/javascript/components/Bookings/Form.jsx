import React from "react"
import {
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box
} from "@material-ui/core"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import { useBookings } from "../../api/BookingContext"

const rooms = [
  { name: "Sala 1", value: "sala-1" },
  { name: "Sala 2", value: "sala-2" }
]

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2),
    width: "45%",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    "& .MuiFormControl-root": {
      margin: "15px 0"
    }
  }
}))

export default function BookingForm() {
  const classes = useStyles()

  const { addBooking, isLoading } = useBookings()

  const handleSubmit = (values) => {
    console.log(values)
    console.log(JSON.stringify(values))

    try {
      //const result = await addBooking(values)
      if (!result) throw Error("Error al registrar la reserva.")
      // setModalData({
      //   type: "success",
      //   tittle: "Exito",
      //   message: "Reserva guardada!"
      // })
      actions.resetForm()
    } catch (error) {
      console.log(error)
      // setModalData({
      //   type: "error",
      //   title: "Error",
      //   message: error.message
      // })
    }
  }

  return (
    <Formik
      initialValues={{
        room: "",
        name: "",
        email: "",
        day: "",
        fromTime: "",
        toTime: ""
      }}
      validationSchema={Yup.object({
        room: Yup.string().required("Sala es requerida."),
        name: Yup.string().required("Nombre es requerido."),
        email: Yup.string().email().required("Email es requerido")
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, handleChange, touched, errors }) => (
        <Form className={classes.form}>
          <Box>
            <FormControl variant="outlined">
              <InputLabel id="room">Sala</InputLabel>
              <Select
                labelId="room"
                id="room"
                value={values.room}
                onChange={handleChange("room")}
                label="Sala"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {rooms.map((r) => {
                  return (
                    <MenuItem value={r.value} key={r.value}>
                      {r.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <TextField
              id="day"
              label="Día"
              type="date"
              name="day"
              value={values.day}
              onChange={handleChange("day")}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Box>
          <Box>
            <TextField
              id="fromTime"
              name="fromTime"
              label="Desde"
              type="time"
              value={values.fromTime}
              onChange={handleChange("fromTime")}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 1800 // 30 min
              }}
            />
            <TextField
              id="toTime"
              name="toTime"
              label="Hasta"
              type="time"
              value={values.toTime}
              onChange={handleChange("toTime")}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 1800 // 30 min
              }}
            />
          </Box>
          <TextField
            id="name"
            name="name"
            label="Nombre"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || isLoading}
          >
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  )
}
