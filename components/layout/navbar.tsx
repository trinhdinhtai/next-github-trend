import { headers } from "next/headers"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { DEFAULT_LOCATION } from "@/lib/config"
import { Button } from "@/components/ui/button"
import CityCommandDialog from "@/components/city-command-dialog"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  const parsedCity = headers().get("x-vercel-ip-city")
  const city = parsedCity ?? DEFAULT_LOCATION.city

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          weather.io
        </Link>
        <div className="flex items-center gap-2">
          <CityCommandDialog />
          <ThemeToggle />
          <Button variant="outline" size="icon">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
