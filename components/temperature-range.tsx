import { Slider } from "@/components/ui/slider"

interface TemperatureRangeProps {
  min: number
  max: number
}

export default function TemperatureRange({
  min,
  max,
}: Readonly<TemperatureRangeProps>) {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <span className="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
        {Math.floor(min)}&deg;
      </span>

      <Slider
        value={[min, max]}
        min={min}
        max={max}
        step={1}
        disabled
        className="touch-none"
      />

      <span className="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
        {Math.floor(max)}&deg;
      </span>
    </div>
  )
}
