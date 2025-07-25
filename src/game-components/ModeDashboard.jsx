import { TYPING_MODES, getDefaultOptions } from '../config/typingModes'
import { useSettings } from '../hooks/useSettings'

function GlassmorphismContainer({ children }) {
  return (
    <div className="container mx-auto flex flex-col rounded-2xl border border-white/30 bg-white/20 p-2 shadow-xl backdrop-blur-md">
      {children}
    </div>
  )
}

const ModeCard = ({ onClick, children, isCurrentMode }) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-[90px] w-[90px] transform flex-col items-center justify-center rounded-2xl border-2 p-1 transition-all duration-200 hover:scale-105 active:scale-95 md:p-1.5 ${
        isCurrentMode
          ? 'border-navy bg-navy text-white shadow-lg shadow-blue-500/25'
          : 'border-white/30 bg-white/10 text-gray-700 hover:border-white/40 hover:bg-white/20'
      } `}
    >
      {children}
    </button>
  )
}

export function ModeDashboard() {
  const { changeMode, mode } = useSettings()

  return (
    <div className="">
      <GlassmorphismContainer>
        {/* Mode Cards Grid */}
        <div className="flex justify-around">
          {Object.values(TYPING_MODES).map(m => {
            const IconComponent = m.icon
            return (
              <>
                <ModeCard
                  onClick={() => changeMode(m.id)}
                  key={m.id}
                  isCurrentMode={m.id === mode}
                >
                  <IconComponent className="size-7 md:size-8" />
                  <span className="text-wrap text-center text-xs font-medium leading-tight md:text-sm">
                    {m.name}
                  </span>
                </ModeCard>
              </>
            )
          })}
        </div>
      </GlassmorphismContainer>
    </div>
  )
}
