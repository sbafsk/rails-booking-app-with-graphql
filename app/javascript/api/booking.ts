import { mapKeys, snakeCase } from "lodash"

import { IBooking } from "../types"

const url = "api/v1/bookings/"

export const getBookings = async (): Promise<IBooking[]> => {
  const response = await fetch(`${url}index`)
  if (!response.ok) throw new Error("Error al obtener las reservas.")
  const data = await response.json()
  return data
}

export const postBooking = async (booking: IBooking) => {
  const response = await fetch(`${url}create`, {
    method: "POST",
    body: JSON.stringify(
      mapKeys(booking, (val, key) => (key = snakeCase(key)))
    ),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!response.ok) throw new Error("Error al crear la reserva.")
  const data = await response.json()
  console.log(data)
  if (data.base) throw new Error(data.base)
}
