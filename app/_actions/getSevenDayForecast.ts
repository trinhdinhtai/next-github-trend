export const getSevenDayForecast = async (city: string) => {
  return fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json())
}
