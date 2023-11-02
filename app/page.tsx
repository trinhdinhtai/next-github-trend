import CurrentWeather from "@/components/current-weather"

interface SearchParamsProps {
  lat: string
  lon: string
}

interface SearchPageProps {
  readonly searchParams: Readonly<SearchParamsProps>
}

export default async function Home({ searchParams }: SearchPageProps) {
  const { lat, lon } = searchParams
  return (
    <div className="container flex flex-col gap-4 py-4 md:flex-row">
      <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
        <CurrentWeather />
      </div>
    </div>
  )
}
