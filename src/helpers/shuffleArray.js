export function shuffleArray(array) {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

export function processWordArray(array, wordsPerLesson, capitalLetter) {
  const selectedWords = shuffleArray(array).slice(0, wordsPerLesson)

  const processedWords = selectedWords.map(word =>
    Math.random() < capitalLetter / 100
      ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      : word.toLowerCase(),
  )

  return shuffleArray(processedWords).join(' ')
}
