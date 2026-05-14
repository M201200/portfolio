import { Moon, Sun } from 'lucide-react'

import { useThemeStore } from '#/stores/theme'

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme)
  const setTheme = useThemeStore((s) => s.setTheme)
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="px-2 py-1 text-secondary-foreground/70 transition-colors hover:text-foreground"
    >
      {theme === 'dark' ? (
        <Moon className="size-5" />
      ) : (
        <Sun className="size-5" />
      )}
    </button>
  )
}
