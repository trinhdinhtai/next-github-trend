import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import CityCommandDialog from "@/components/city-command-dialog"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
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
