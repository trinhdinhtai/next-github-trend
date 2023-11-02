"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

import { useWeatherStore } from "@/hooks/use-weather-store"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export default function CityCommandDialog() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const { city, setLatAndLng, setCity } = useWeatherStore()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "YOUR_CALLBACK_NAME",
    requestOptions: {
      types: ["(cities)"],
    },
    debounce: 300,
  })

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API by setting the second parameter to "false"
      setCity(description)
      setValue(description, false)

      setOpen(false)
      setValue("")
      clearSuggestions()

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0])
        setLatAndLng(lat.toString(), lng.toString())
        router.push(`${pathname}?lat=${lat}&lon=${lng}`)
      })
    }

  return (
    <div>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={() => setOpen(true)}
        className="h-10 w-full whitespace-nowrap px-4"
      >
        <p className="text-sm text-muted-foreground">
          {city ?? "Search city..."}{" "}
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary md:ml-28">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search city..."
          value={value}
          onValueChange={setValue}
          disabled={!ready}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {status === "OK" && (
            <CommandGroup heading="Suggestions">
              {data.map((suggestion) => (
                <CommandItem
                  key={suggestion.place_id}
                  onSelect={handleSelect(suggestion)}
                >
                  {suggestion.description}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  )
}
