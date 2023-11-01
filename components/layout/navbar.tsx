import Link from "next/link"

import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between py-4">
      <Link href="/" className="text-2xl font-bold">
        weather.io
      </Link>
      <div className="flex w-full gap-2 sm:w-fit">
        <ThemeToggle />
      </div>
    </nav>
  )
}
