import { useEffect, useState } from 'react'
import { useSettings } from './useSettings.jsx'
import { generateContent } from '../helpers/contentGenerators/generateContent.js'

export function useTypingInterface() {
  const [content, setContent] = useState({ title: '', typeString: '' })
  const { preferMiddleDot, mode, options } = useSettings()
  const [status, setStatus] = useState('')
  const [playerPos, setPlayerPos] = useState(0)

  const startGame = async () => {
    setStatus('loading')
    setPlayerPos(0)
    try {
      let newContent = await generateContent(mode, options)
      setContent(newContent)
    } catch (e) {
      console.error('Error fetching content', e)
    }
  }

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === ' ') {
        event.preventDefault()
      }

      if (event.key === content.typeString[playerPos]) {
        setPlayerPos(pos => pos + 1)
        return
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [playerPos, content])

  useEffect(() => {
    if (mode) {
      startGame()
    }
  }, [mode])

  useEffect(() => {
    if (playerPos > 0 && playerPos === content.typeString.length) {
      startGame()
    }
  }, [playerPos])

  return {
    playerPos,
    preferMiddleDot,
    content,
    status,
  }
}
