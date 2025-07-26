import { generateWords } from './generateWords.js'

const dummyLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida mi turpis, eget varius arcu auctor ac. Donec iaculis ac nisi a dictum. Duis viverra eget urna id vulputate. Donec suscipit placerat varius.'

export async function generateContent(mode, options = {}) {
  try {
    let newContent = ''

    switch (mode) {
      case 'words':
        newContent = await generateWords(
          options.topic,
          options.wordsPerLesson,
          options.capitalLetter,
        )
        break

      case 'articles':
        newContent = 'This is the article content'
        break

      case 'quotes':
        newContent = 'This is the quotes content'
        break

      case 'code':
        newContent = 'This is the code content'
        break

      case 'namingConventions':
        newContent = 'This is the naming conventions content'
        break

      default:
        newContent = 'Default content of the switch statement'
    }
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
