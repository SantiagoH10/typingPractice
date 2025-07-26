const VITE_RAPID_API_KEY = '9317388303mshd3be3ef51659df7p1a3d04jsndcc8dfa1aa33' //remove in production

async function getSongId(
  time_period = 'all_time',
  chart_genre = 'all',
  per_page = 1,
  page = 1,
) {
  const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=${time_period}&chart_genre=${chart_genre}&per_page=${per_page}&page=${page}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.text()
    return JSON.parse(result).chart_items[0].item.id
  } catch (error) {
    console.error(error)
  }
}

//helper function to parse HTML to Array
function lyricsHtmlToArray(lyricsObj) {
  // Create a temporary div to parse HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = lyricsObj.lyrics.html

  // Get text content and split into lines
  const textContent = tempDiv.textContent || tempDiv.innerText

  const lines = textContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)

  return lines
}

export async function generateLyrics(
  time_period = 'all_time',
  chart_genre = 'all',
  ranking = 1,
) {
  const songId = await getSongId(time_period, chart_genre, ranking)

  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.text()
    const lyricsObj = JSON.parse(result).lyrics
    const lyrics = lyricsHtmlToArray(lyricsObj)
    const title = `${lyricsObj.tracking_data.title} - ${lyricsObj.tracking_data.primary_artist}`
    return { title: title, lyricsArray: lyrics }
  } catch (error) {
    console.error(error)
  }
}
