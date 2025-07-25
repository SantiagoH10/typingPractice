import { useState, useCallback, useEffect } from 'react'
import { TYPING_MODES, getDefaultOptions } from '../config/typingModes'
import { useLocalStorage } from './useLocalStorage'

export function useSettings() {
  const [savedSettings, setSavedSettings, clearSavedSettings] = useLocalStorage(
    'typing-app-settings',
    {
      mode: 'words',
      options: getDefaultOptions('words'),
      preferMiddleDot: true,
    },
  )

  //General settings (any mode)
  const [preferMiddleDot, setPreferMiddleDot] = useState(
    savedSettings.preferMiddleDot,
  )

  //Mode state
  const [mode, setMode] = useState(savedSettings.mode)
  const [options, setOptions] = useState(savedSettings.options)

  useEffect(() => {
    setSavedSettings({ mode, options })
  }, [mode, options, preferMiddleDot, setSavedSettings])

  const changeMode = useCallback(newMode => {
    if (!TYPING_MODES[newMode]) return
    setMode(newMode)
    setOptions(getDefaultOptions(newMode))
    console.log('mode changed to', newMode)
  }, [])

  const updateOption = useCallback((optionKey, value) => {
    setOptions(prev => ({ ...prev, [optionKey]: value }))
  }, [])

  return {
    mode,
    options,
    preferMiddleDot,
    changeMode,
    updateOption,
  }
}
