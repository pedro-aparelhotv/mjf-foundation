// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getDayOfTheYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)

  return day
}

function getNorthHemisphereSeason(date: Date): string {
  const dayOfTheYear = getDayOfTheYear(date)

  if (dayOfTheYear >= 356 <= 366 || dayOfTheYear >= 0 <= 79) {
    return 'winter'
  } else if (dayOfTheYear >= 80 <= 172) {
    return 'spring'
  } else if (dayOfTheYear >= 173 <= 266) {
    return 'summer'
  } else {
    return 'fall'
  }
}

function map(
  value: number,
  istart: number,
  istop: number,
  ostart: number,
  ostop: number,
): number {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
}

export { capitalizeFirstLetter, getDayOfTheYear, getNorthHemisphereSeason, map }
