import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../src/firebase/firebase.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const __filename = fileURLToPath(import.meta.url)
const wordSetsDir = path.dirname(__filename)

const argv = yargs(hideBin(process.argv)).option('file', {
  alias: 'f',
  describe: 'JSON file to upload (without .json extension)',
  type: 'string',
  demandOption: true,
}).argv

async function uploadWordSet() {
  try {
    const filePath = path.join(wordSetsDir, `${argv.file}.json`)
    const wordSetData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    const docRef = doc(db, 'wordSets', wordSetData.id)
    const docSnap = await getDoc(docRef)

    const docData = {
      ...wordSetData,
      ...(docSnap.exists()
        ? { updatedAt: new Date() }
        : { createdAt: new Date() }),
      totalWords: wordSetData.words?.length || 0,
    }

    await setDoc(docRef, docData)

    console.log(
      `✓ ${docSnap.exists() ? 'Updated' : 'Created'} "${wordSetData.name}" (${docData.totalWords} words)`,
    )
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

uploadWordSet()
