import { TYPING_MODES, getDefaultOptions } from '../config/typingModes'
import { useSettings } from '../hooks/useSettings'

function GlassmorphismContainer({ children }) {
  return (
    <div className="container mx-auto flex flex-col rounded-2xl border border-white/30 bg-white/20 p-1 shadow-xl backdrop-blur-md">
      {children}
    </div>
  )
}

const ModeCard = ({ onClick, children, isCurrentMode }) => {
  return (
    <button
      onClick={onClick}
      className={`flex transform flex-col items-center justify-center gap-0.5 rounded-xl border-2 p-2 transition-all duration-200 hover:scale-105 active:scale-95 md:gap-1 md:p-1.5 lg:gap-1 lg:p-2 ${
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
                  <span className="text-center text-xs font-medium leading-tight md:text-sm lg:text-base">
                    {m.name}
                  </span>
                </ModeCard>
              </>
            )
          })}
        </div>

        {/* Current Selection Info - Mobile */}
        <div className="mt-6 md:hidden">
          <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-center">
            <p className="text-sm text-gray-700">
              Current:{' '}
              <span className="font-medium">{TYPING_MODES[mode]?.name}</span>
            </p>
            <p className="mt-1 text-xs text-gray-600">
              {TYPING_MODES[mode]?.description}
            </p>
          </div>
        </div>
      </GlassmorphismContainer>
    </div>
  )
}
