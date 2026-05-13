import { create } from 'zustand'

import type { Theme } from '#/lib/theme'
import { setThemeCookie } from '#/lib/theme'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  setTheme: (theme) => {
    set({ theme })
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
    void setThemeCookie({ data: theme })
  },
}))
