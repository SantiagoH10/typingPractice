import { useEffect, useState } from 'react'
import { useGenerateContent } from './useGenerateContent'
import { useSettings } from './useSettings'

export function useTypingInterface() {
  const { typeString } = useGenerateContent()
  const { preferMiddleDot } = useSettings()
  const [status, setStatus] = useState('')
  const [playerPos, setPlayerPos] = useState(0)

  const startGame = () => {
    setPlayerPos(0)
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
  }, [playerPos])

  useEffect(() => {
    if (playerPos === typeString.length) {
      startGame()
    }
  }, [playerPos])

  return {
    playerPos,
    preferMiddleDot,
  }
}
