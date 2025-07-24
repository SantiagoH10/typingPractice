import ccLogo from '../assets/cma.png'

export function MySociabble() {
  return (
    <header className="bg-gray-300 shadow-lg dark:bg-navy">
      <div className="container mx-auto px-2 py-4">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <img
            src={ccLogo}
            alt="CMA CGM Logo"
            className="w-20 filter transition-all duration-300 hover:scale-105 dark:brightness-0 dark:invert md:w-24 lg:h-auto lg:w-28 lg:flex-shrink-0"
          />
          <p className="text-center text-xs font-bold leading-tight tracking-wide text-navy dark:text-white md:text-left md:text-sm lg:text-base xl:text-lg">
            WE IMAGINE BETTER WAYS TO SERVE A WORLD IN MOTION
          </p>
        </div>
      </div>
    </header>
  )
}
