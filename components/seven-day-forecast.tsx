import Image from "next/image"
import { ForecastDay } from "@/types"
import { Calendar } from "lucide-react"

import { convertToLocalDate } from "@/lib/formatter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TemperatureRange from "@/components/temperature-range"

interface SevenDayForecastProps {
  forecastDays: ForecastDay[]
}

export default function SevenDayForecast({
  forecastDays,
}: Readonly<SevenDayForecastProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2 text-sm">
          <Calendar className="mr-1 h-4 w-4" />
          7-Day Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-base font-normal md:mb-1">
        {forecastDays.map(
          ({ date, day: { condition, mintemp_c, maxtemp_c } }, index) => (
            <div key={date} className="grid grid-cols-2 gap-6">
              <div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
                <p className="min-w-[3rem] font-medium">
                  {index === 0 ? "Today" : convertToLocalDate(date, "long")}
                </p>

                <Image
                  src={`https:${condition.icon}`}
                  alt="icons"
                  width={30}
                  height={30}
                />
              </div>

              <TemperatureRange min={mintemp_c} max={maxtemp_c} />
            </div>
          )
        )}
      </CardContent>
    </Card>
  )
}
