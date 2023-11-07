import { DEFAULT_LOCATION } from "@/lib/config"
import CurrentWeather from "@/components/current-weather"
import SevenDayForecast from "@/components/seven-day-forecast"
import { getCurrentWeather } from "@/app/_actions/getCurrentWeather"
import { getSevenDayForecast } from "@/app/_actions/getSevenDayForecast"

interface SearchParamsProps {
  lat: string
  lon: string
}

interface SearchPageProps {
  readonly searchParams: Readonly<SearchParamsProps>
}

export default async function Home({ searchParams }: SearchPageProps) {
  const { lat, lon } = Object.keys(searchParams).length
    ? searchParams
    : DEFAULT_LOCATION.coord
  const query = `${lat},${lon}`

  const [weatherData, sevenDayForecast] = await Promise.all([
    getCurrentWeather(query),
    getSevenDayForecast(query),
  ])

  return (
    <div className="container flex flex-col gap-4 py-4 md:flex-row">
      <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/3">
        <CurrentWeather weather={weatherData} />
        <SevenDayForecast
          forecastDays={sevenDayForecast.forecast.forecastday}
        />
      </div>

      <div className="flex-1"></div>
    </div>
  )
}
