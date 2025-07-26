import { MySociabble } from './app-components/MySociabble'
import { Footer } from './app-components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { TypingGame } from './app-components/TypingGame'
import { SettingsProvider } from './hooks/useSettings.jsx'

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <MySociabble />
        <SettingsProvider>
          <TypingGame />
        </SettingsProvider>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
