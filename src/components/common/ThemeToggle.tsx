import { useTheme } from '#/hooks/useTheme'
import type { Theme } from '#/lib/theme'

const NEXT: Record<Theme, Theme> = {
  light: 'dark',
  dark: 'system',
  system: 'light',
}

const LABEL: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'Auto',
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={() => setTheme(NEXT[theme])}
      aria-label={`Theme: ${LABEL[theme]}. Click to switch to ${LABEL[NEXT[theme]]}.`}
      className="rounded-md border px-2 py-1 text-sm"
    >
      {LABEL[theme]}
    </button>
  )
}
