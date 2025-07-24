import { useState } from 'react'
import { MySociabble } from './app-components/MySociabble'
import { Footer } from './app-components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <MySociabble />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
