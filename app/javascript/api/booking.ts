import { mapKeys, snakeCase } from "lodash"

import { IBooking } from "../types"

const url = "api/v1/bookings/"

const getToken = () =>
  document.querySelector('meta[name="csrf-token"]').getAttribute("content")

export const getBookings = async (): Promise<IBooking[]> => {
  const response = await fetch(`${url}index`)
  if (!response.ok) throw new Error("Error al obtener las reservas.")
  const data = await response.json()
  return data
}

export const postBooking = async (booking: IBooking) => {
  const token = getToken()
  const response = await fetch(`${url}create`, {
    method: "POST",
    body: JSON.stringify(
      mapKeys(booking, (val, key) => (key = snakeCase(key)))
    ),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": token
    }
  })
  if (!response.ok) throw new Error("Error al crear la reserva.")
  const data = await response.json()
  console.log(data)
  if (data.error) throw new Error(data.error.base)
}
