import { getCurrentWeather } from "@/lib/weather"
import CurrentWeather from "@/components/current-weather"

interface SearchParamsProps {
  lat: string
  lon: string
}

interface SearchPageProps {
  readonly searchParams: Readonly<SearchParamsProps>
}

export default async function Home({ searchParams }: SearchPageProps) {
  const weatherData = await getCurrentWeather("hanoi")
  console.log("file: page.tsx:15 ~ Home ~ weatherData:", weatherData)

  return (
    <div className="container flex flex-col gap-4 py-4 md:flex-row">
      <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/3">
        <CurrentWeather data={weatherData} />
      </div>

      <div className="flex-1"></div>
    </div>
  )
}
