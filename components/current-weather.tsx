import Image from "next/image"

import { convertToLocalDate } from "@/lib/formatter"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Clock from "@/components/clock"

interface CurrentWeatherProps {
  data: any
}

export default function CurrentWeather({
  data,
}: Readonly<CurrentWeatherProps>) {
  const { name, tz_id, localtime } = data.location
  const {
    temp_c,
    condition: { text, icon },
  } = data.current

  return (
    <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between text-lg font-semibold">
        <span>{convertToLocalDate(localtime, "long")}</span>
        <Clock timezone={tz_id} />
      </CardHeader>

      <CardContent className="text-center">
        <div className="flex items-center justify-center">
          <p className="text-3xl font-bold">{name}</p>
        </div>

        <div className="flex items-center justify-center gap-8 py-7 text-8xl font-bold md:py-10">
          {temp_c}&deg;
          <Image src={`https:${icon}`} alt="icons" width={100} height={100} />
        </div>

        <p className="text-sm">{text}</p>
      </CardContent>

      <CardFooter>
        <div className="flex w-full flex-col items-center justify-center"></div>
      </CardFooter>
    </Card>
  )
}
