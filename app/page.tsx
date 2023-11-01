import { headers } from "next/headers"

import { getWeatherData } from "@/lib/weather"
import PageData from "@/components/page-data"

export const runtime = "edge"

export default async function Home() {
  const parsedCity = headers().get("x-vercel-ip-city")
  const city = !parsedCity || parsedCity === "null" ? "Hanoi" : parsedCity

  const weatherData = await getWeatherData(city)

  return <PageData weatherData={weatherData} />
}
