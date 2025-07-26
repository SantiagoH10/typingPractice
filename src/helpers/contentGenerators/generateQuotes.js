const VITE_RAPID_API_KEY = '9317388303mshd3be3ef51659df7p1a3d04jsndcc8dfa1aa33' //remove in production

export async function generateQuotes() {
  const url =
    'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options)
    const result = await response.text()
    const jsonQuote = JSON.parse(result)[0]
    const formattedQuote = `${jsonQuote.text} ${jsonQuote.author}`
    const title = `Quotes - Category: ${jsonQuote.category}`
    return { title: title, typeString: formattedQuote }
  } catch (error) {
    console.error(error)
  }
}
