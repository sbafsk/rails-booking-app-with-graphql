import React, { useEffect } from "react"
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

import { useBookings } from "../../context"
import { IFormBooking } from "../../types"

const rooms = [
  { name: "Sala 1", value: "sala-1" },
  { name: "Sala 2", value: "sala-2" }
]

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: { maxWidth: "90%" },
    [theme.breakpoints.up("md")]: { maxWidth: "45%" },
    "& .MuiFormControl-root": {
      margin: "15px 0"
    }
  },
  dateInputs: {
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      marginRight: "5px"
    },
    "& input": {
      fontSize: "14px"
    }
  }
}))

export default function BookingForm() {
  const classes = useStyles()

  const { addBooking, filterBookingsByDay, isLoading } = useBookings()

  const handleSubmit = async (values: IFormBooking, actions) => {
    console.log(values)
    try {
      await addBooking(values)
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
        room: "sala-1",
        name: "juan",
        email: "1@1.com",
        day: "2021-11-25",
        fromTime: "16:00",
        toTime: "17:00"
      }}
      validationSchema={Yup.object({
        room: Yup.string().required("Sala requerida."),
        name: Yup.string().required("Nombre es requerido."),
        email: Yup.string().email().required("Email es requerido."),
        day: Yup.string().required("Dia es requerida."),
        fromTime: Yup.string().required("Hora desde es requerido."),
        toTime: Yup.string().required("Hora hasta es requerido.")
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, handleChange, touched, errors }) => {
        // const day = values.day
        // useEffect(() => {
        //   day !== "" && filterBookingsByDay(day)
        // }, [day])

        return (
          <Form className={classes.form}>
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
            <Box className={classes.dateInputs}>
              <TextField
                id="day"
                label="Día"
                type="date"
                name="day"
                variant="outlined"
                value={values.day}
                onChange={handleChange("day")}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="fromTime"
                name="fromTime"
                label="Desde"
                type="time"
                variant="outlined"
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
                variant="outlined"
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
              onChange={handleChange("name")}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange("email")}
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
        )
      }}
    </Formik>
  )
}
