import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CurrentWeather() {
  return (
    <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem]">
      <div className="absolute " />
      <div>
        <div className="flex justify-between text-lg font-semibold"></div>
      </div>
    </Card>
  )
}
