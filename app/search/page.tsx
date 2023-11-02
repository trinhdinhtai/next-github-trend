import React from "react"

interface SearchParamsProps {
  lat: string
  lon: string
}

interface SearchPageProps {
  searchParams: SearchParamsProps
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { lat, lon } = searchParams
  return <div></div>
}
