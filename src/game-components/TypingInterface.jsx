import { useGenerateContent } from '../hooks/useGenerateContent'
import { useTypingInterface } from '../hooks/useTypingInterface'

export function TypingInterface() {
  const { playerPos } = useTypingInterface()
  const { typeString } = useGenerateContent()

  return (
    <div className="container mx-auto flex items-center justify-center bg-blue-100 p-3">
      <div
        className="relative text-center text-xl leading-6 text-gray-600"
        style={{
          fontFamily: '"Ubuntu Mono", monospace',
        }}
      >
        {/* Render each character individually */}
        {typeString.split('').map((char, index) => (
          <span
            key={`${typeString.length}-${index}`}
            className={`relative ${index > playerPos - 1 ? 'opacity-100' : 'opacity-70'}`}
          >
            {char}
            {/* Platform appears below the current character */}
            {index === playerPos && (
              <div
                className="pointer-events-none absolute left-1/2 h-0.5 w-3 -translate-x-1/2 bg-navy transition-all duration-200 ease-out"
                style={{
                  top: '100%',
                  marginTop: '2px',
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
