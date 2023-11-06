"use client"

import { useEffect, useState } from "react"
import { DateTime } from "luxon"

interface ClockProps {
  timezone: string
}

const Clock = ({ timezone }: ClockProps) => {
  const [time, setTime] = useState(
    DateTime.now().setZone(timezone).toLocaleString(DateTime.TIME_WITH_SECONDS)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        DateTime.now()
          .setZone(timezone)
          .toLocaleString(DateTime.TIME_WITH_SECONDS)
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [timezone])

  return <span className="tabular-nums">{time}</span>
}

export default Clock
