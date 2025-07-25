import { useState, useEffect } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : defaultValue
    } catch (error) {
      console.warn(`Failed to load ${key} from localStorage:`, error)
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Failed to save ${key} to localStorage:`, error)
    }
  }, [key, value])

  const clearValue = () => {
    localStorage.removeItem(key)
    setValue(defaultValue)
  }

  return [value, setValue, clearValue]
}
