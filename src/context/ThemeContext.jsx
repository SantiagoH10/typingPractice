import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

//Custom hook wrapping useContext
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

//Custom Provider and Toggle logic
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const shouldBeDark =
      savedTheme === 'dark' || (!savedTheme && systemPrefersDark)

    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    localStorage.setItem('theme', newTheme ? 'dark' : 'light')

    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const resetToSystemPreference = () => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    if (systemPrefersDark === isDark) {
      return
    } else {
      toggleTheme()
    }
  }

  const value = {
    isDark,
    toggleTheme,
    resetToSystemPreference,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
