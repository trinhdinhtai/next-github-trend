// convert local date to date javascript
// example: localtime: '2023-11-06 13:41' to Monday
export function convertToLocalDate(
  localtime: string,
  weekdayFormat: "short" | "long"
): string {
  let local_time = new Date(localtime)
  const options = { weekday: weekdayFormat }
  const dateFormatter = new Intl.DateTimeFormat("UTC", options)

  return dateFormatter.format(local_time)
}
