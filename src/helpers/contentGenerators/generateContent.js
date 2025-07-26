import { generateWords } from './generateWords.js'
import { generateArticle } from './generateArticle.js'
import { generateQuotes } from './generateQuotes.js'

const dummyLorem = {
  title: 'Error Fallback',
  typeString:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida mi turpis, eget varius arcu auctor ac. Donec iaculis ac nisi a dictum. Duis viverra eget urna id vulputate. Donec suscipit placerat varius.',
}

export async function generateContent(mode, options = {}) {
  try {
    let newContent = {}

    switch (mode) {
      case 'words':
        newContent = await generateWords(
          options.topic,
          options.wordsPerLesson,
          options.capitalLetter,
        )
        break

      case 'articles':
        newContent = await generateArticle(options.source)
        break

      case 'quotes':
        newContent = await generateQuotes()
        break

      case 'code':
        newContent = {
          title: 'Code',
          typeString: 'This is the code content',
        }
        break

      case 'namingConventions':
        newContent = {
          title: 'Naming Convention',
          typeString: 'This is the naming conventions content',
        }
        break

      default:
        newContent = {
          title: 'Default',
          typeString: 'Default content of the switch statement',
        }
    }
    console.log(newContent)
    return newContent
  } catch (e) {
    console.error(e)
    return dummyLorem
  }
}

/*
case 'articles':
          newContent = await generateArticleContent({
            count: options.wordsPerLesson,
            source: options.source,
          })
          break
        case 'quotes':
          newContent = await generateQuotes({
            count: options.wordsPerLesson,
          })
          break
        case 'namingConventions':
          newContent = await generateNamingConventions({
            count: options.wordsPerLesson,
            convention: options.convention,
          })
          break
*/
