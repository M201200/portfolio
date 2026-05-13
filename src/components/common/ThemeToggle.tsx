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
      className="rounded-md border px-2 py-1 text-sm"
    >
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}
