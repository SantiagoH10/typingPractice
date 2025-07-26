import { useEffect, useState } from 'react'
import { useSettings } from './useSettings.jsx'
import { generateContent } from '../helpers/contentGenerators/generateContent.js'

export function useTypingInterface() {
  const [typeString, setTypeString] = useState('')
  const { preferMiddleDot, mode, options } = useSettings()
  const [status, setStatus] = useState('')
  const [playerPos, setPlayerPos] = useState(0)

  const startGame = async () => {
    setStatus('loading')
    setPlayerPos(0)
    try {
      let newContent = await generateContent(mode, options)
      setTypeString(newContent)
    } catch (e) {
      console.error('Error fetching content', e)
    }
  }

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === ' ') {
        event.preventDefault()
      }

      if (event.key === typeString[playerPos]) {
        setPlayerPos(pos => pos + 1)
        console.log(playerPos)
        return
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [playerPos, typeString])

  useEffect(() => {
    startGame()
  }, [mode])

  useEffect(() => {
    if (playerPos === typeString.length) {
      startGame()
    }
  }, [playerPos])

  return {
    playerPos,
    preferMiddleDot,
    typeString,
    status,
  }
}
