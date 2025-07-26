import { getDefaultOptions } from '../../config/typingModes.js'
import { getRandomDate } from '../getRandomDate.js'

const VITE_RAPID_API_KEY = '9317388303mshd3be3ef51659df7p1a3d04jsndcc8dfa1aa33' //remove in production

async function genLoremIpsum(paragraphNum = 1) {
  const url = `https://lorem-ipsum-api.p.rapidapi.com/paragraph?amount=${paragraphNum}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': VITE_RAPID_API_KEY, //replace with import.meta.url.VITE_RAPID_API_KEY in production
      'x-rapidapi-host': 'lorem-ipsum-api.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options)
    const result = await response.text()
    return { title: 'Lorem Ipsum', typeString: JSON.parse(result).text }
  } catch (error) {
    console.error(error)
  }
}

//Random wikipedia article : https://en.wikipedia.org/api/rest_v1/page/random/summary
//Featured article (need to specify day) : https://api.wikimedia.org/feed/v1/wikipedia/en/featured/YYYY/MM/DD

async function genWikipedia() {
  try {
    const dateStr = getRandomDate(3)
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '/')
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${dateStr}`
    const response = await fetch(url)
    const data = await response.json()

    return {
      title: data.tfa.title.replace(/_/g, ' '),
      typeString: data.tfa.extract,
    }
  } catch (error) {
    console.error(error)
    return { title: 'Error', typeString: 'Failed to fetch featured article' }
  }
}

/*const generateMediumArticle = async () => {
  const response = await fetch('https://medium2.p.rapidapi.com/article/1c560214fbac/content', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'medium2.p.rapidapi.com',
      'x-rapidapi-key': VITE_RAPID_API_KEY,
    }
  });

  const data = await response.json();



  return data;
};*/

const DEFAULTS = getDefaultOptions('articles')

export async function generateArticle(source = DEFAULTS.source) {
  try {
    let article = {}
    switch (source) {
      case 'wikipedia':
        article = await genWikipedia()
        break
      case 'loremipsum':
        article = await genLoremIpsum()
        break
      default:
        article = {
          title: 'Default',
          typeString: 'Default content of the switch statement',
        }
    }
    return article
  } catch (e) {
    console.error(e)
  }
}
