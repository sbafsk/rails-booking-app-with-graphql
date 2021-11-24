import { IBooking } from "../types"

const url = "api/v1/bookings/"

export const getBookings = async (): Promise<IBooking[]> => {
  const response = await fetch(`${url}index`)
  if (!response.ok) throw new Error("Network error.")
  const data = await response.json()
  return data
}

export const postBooking = async (booking: IBooking) => {
  const response = await fetch(`${url}create`, {
    method: "POST",
    body: JSON.stringify(booking),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!response.ok) throw new Error("Network error.")
  const data = await response.json()
  console.log(data)
}
