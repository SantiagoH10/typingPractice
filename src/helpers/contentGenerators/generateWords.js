import { processWordArray } from '../shuffleArray.js'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase.js'

import { getDefaultOptions } from '../../config/typingModes.js'

const DEFAULTS = getDefaultOptions('words')

export async function generateWords(
  topicId = DEFAULTS.topicId,
  wordsPerLesson = DEFAULTS.wordsPerLesson,
  capitalLetter = DEFAULTS.capitalLetter,
) {
  try {
    const docRef = doc(db, 'wordSets', topicId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {
        title: docSnap.data().name,
        typeString: processWordArray(
          docSnap.data().words,
          wordsPerLesson,
          capitalLetter,
        ),
      }
    } else {
      console.warn(`Word set "${topicId}" not found`)
      return null
    }
  } catch (error) {
    console.error('Error fetching word set:', error)
    throw error
  }
}
