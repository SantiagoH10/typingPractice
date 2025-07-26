export function getRandomDate(yearsBack) {
  const today = new Date()
  const yearsAgo = new Date(
    today.getTime() - yearsBack * 365 * 24 * 60 * 60 * 1000,
  )
  const randomTime =
    yearsAgo.getTime() + Math.random() * (today.getTime() - yearsAgo.getTime())
  const randomDate = new Date(randomTime)
  return randomDate
}

console.log(getRandomDate(3))
