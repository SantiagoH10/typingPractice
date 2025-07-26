import { Settings } from 'lucide-react'

function GlassmorphismContainer({ children }) {
  return (
    <div className="mx-auto flex items-center gap-2 rounded-2xl border border-white/30 bg-white/20 p-2 shadow-xl backdrop-blur-md">
      {children}
    </div>
  )
}

export const AdvancedOptionsButton = ({ onClick }) => {
  return (
    <GlassmorphismContainer>
      <button
        onClick={onClick}
        className="group flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-100"
        aria-label="Settings"
        title="Open settings"
      >
        <Settings className="size-4 text-navy transition-all duration-200 group-hover:rotate-90 group-hover:scale-105 group-hover:text-slate-800 md:size-6" />
        <p className="text-xs font-semibold text-navy transition-colors duration-200 group-hover:text-slate-800 md:text-xl">
          Advanced Settings
        </p>
      </button>
    </GlassmorphismContainer>
  )
}
