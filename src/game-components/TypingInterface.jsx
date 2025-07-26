import { useTypingInterface } from '../hooks/useTypingInterface.js'

export function TypingInterface() {
  const { playerPos, content } = useTypingInterface()
  const preferMiddleDot = true
  //const { preferMiddleDot } = useSettings()

  const renderWordAwareText = () => {
    const words = content.typeString.split(' ')
    const elements = []
    let charIndex = 0

    words.forEach((word, wordIndex) => {
      // Create word container - keeps characters together as a unit
      const wordElement = (
        <span key={`word-${wordIndex}`} className="inline-block">
          {word.split('').map((char, i) => {
            const currentIndex = charIndex++
            return (
              <span
                key={`${content.typeString.length}-${currentIndex}`}
                className={`relative ${currentIndex > playerPos - 1 ? 'opacity-100' : 'opacity-70'}`}
              >
                {char}
                {currentIndex === playerPos && (
                  <div className="pointer-events-none absolute left-[42%] top-full mt-0.5 h-0.5 w-2.5 -translate-x-[42%] rounded-full bg-navy transition-all duration-200 ease-out" />
                )}
              </span>
            )
          })}
        </span>
      )
      elements.push(wordElement)

      // Add space after word (except last word)
      if (wordIndex < words.length - 1) {
        const spaceIndex = charIndex++
        elements.push(
          <span
            key={`space-${wordIndex}`}
            className={`relative ${spaceIndex > playerPos - 1 ? 'opacity-100' : 'opacity-70'}`}
          >
            <span className="text-lg text-gray-500 md:text-2xl">
              {preferMiddleDot ? '·' : ' '}
            </span>
            {spaceIndex === playerPos && (
              <div className="pointer-events-none absolute left-[42%] top-full mt-0.5 h-0.5 w-2.5 -translate-x-[42%] rounded-full bg-navy transition-all duration-200 ease-out" />
            )}
          </span>,
        )
      }
    })

    return elements
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-2 bg-blue-100 p-3">
      <p className="rounded-full bg-blue-200 p-2 px-3 font-semibold text-navy shadow-sm md:text-xl">
        {content.title}
      </p>
      <div className="relative text-center font-ubuntu-mono text-xl leading-snug text-gray-600 md:text-3xl">
        {renderWordAwareText()}
      </div>
    </div>
  )
}
