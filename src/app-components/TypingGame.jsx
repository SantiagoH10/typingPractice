import { ModeDashboard } from '../game-components/ModeDashboard'
import { TypingInterface } from '../game-components/TypingInterface'

export function TypingGame() {
  return (
    <div className="container mx-auto flex flex-col">
      <ModeDashboard />
      <TypingInterface />
    </div>
  )
}
