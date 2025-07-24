import ccLogo from '../assets/cma.png'
import ThemeToggle from './ThemeToggle'

export function Footer() {
  return (
    <footer className="bg-gray-300 shadow-lg dark:bg-navy">
      <div className="container mx-auto px-2 py-4">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <img
            src={ccLogo}
            alt="CMA CGM Logo"
            className="w-20 filter transition-all duration-300 hover:scale-105 dark:brightness-0 dark:invert md:w-24 lg:h-auto lg:w-28 lg:flex-shrink-0"
          />
          <div className="flex flex-col items-center gap-2 md:flex-1 md:items-start">
            <p className="text-center text-xs font-bold leading-tight tracking-wide text-navy dark:text-white md:text-left md:text-sm lg:text-base xl:text-lg">
              © 2024 CMA CGM GROUP. ALL RIGHTS RESERVED.
            </p>
            <p className="text-center text-xs leading-tight text-gray-600 dark:text-gray-300 md:text-left">
              Leading the future of global shipping and logistics
            </p>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
