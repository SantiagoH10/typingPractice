import { Settings } from 'lucide-react'

export const SettingsIcon = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white/95 p-1 shadow-lg backdrop-blur-sm transition-all duration-200 ease-in-out hover:scale-110 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
      aria-label="Settings"
      title="Open settings"
    >
      <Settings className="size-6 text-slate-600 transition-colors duration-200 group-hover:rotate-90 group-hover:text-slate-800" />
    </button>
  )
}
