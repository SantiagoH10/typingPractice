// SettingsContext.js
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { TYPING_MODES, getDefaultOptions } from '../config/typingModes'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  // Load initial settings from localStorage (synchronously)
  const getInitialSettings = () => {
    try {
      const saved = localStorage.getItem('typing-app-settings')
      if (saved) {
        const parsedSettings = JSON.parse(saved)
        return {
          mode: parsedSettings.mode || 'words',
          options: parsedSettings.options || getDefaultOptions('words'),
          preferMiddleDot: parsedSettings.preferMiddleDot ?? true,
        }
      }
    } catch (error) {
      console.warn('Failed to load settings from localStorage:', error)
    }

    // Return defaults if localStorage fails or is empty
    return {
      mode: 'words',
      options: getDefaultOptions('words'),
      preferMiddleDot: true,
    }
  }

  const initialSettings = getInitialSettings()

  // General settings (any mode)
  const [preferMiddleDot, setPreferMiddleDot] = useState(
    initialSettings.preferMiddleDot,
  )

  // Mode state - initialize with loaded values or defaults
  const [mode, setMode] = useState(initialSettings.mode)
  const [options, setOptions] = useState(initialSettings.options)

  // Save to localStorage when settings change
  useEffect(() => {
    try {
      const settingsToSave = {
        mode,
        options,
        preferMiddleDot,
      }
      localStorage.setItem(
        'typing-app-settings',
        JSON.stringify(settingsToSave),
      )
      console.log('Settings saved to localStorage:', settingsToSave)
    } catch (error) {
      console.warn('Failed to save settings to localStorage:', error)
    }
  }, [mode, options, preferMiddleDot])

  const changeMode = useCallback(newMode => {
    if (!TYPING_MODES[newMode]) return
    setMode(newMode)
    setOptions(getDefaultOptions(newMode))
    console.log('mode changed to', newMode)
  }, [])

  const updateOption = useCallback((optionKey, value) => {
    setOptions(prev => ({ ...prev, [optionKey]: value }))
  }, [])

  const value = {
    mode,
    options,
    preferMiddleDot,
    changeMode,
    updateOption,
    setPreferMiddleDot,
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}
