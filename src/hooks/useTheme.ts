import { useCallback, useSyncExternalStore } from 'react'

import type {ResolvedTheme, Theme} from '#/lib/theme';
import {
  applyTheme,
  resolveTheme,
  THEME_STORAGE_KEY
} from '#/lib/theme'

const THEME_CHANGE_EVENT = 'theme:change'

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) callback()
  }
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  window.addEventListener('storage', onStorage)
  window.addEventListener(THEME_CHANGE_EVENT, callback)
  mql.addEventListener('change', callback)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(THEME_CHANGE_EVENT, callback)
    mql.removeEventListener('change', callback)
  }
}

function getSnapshot(): Theme {
  const v = localStorage.getItem(THEME_STORAGE_KEY)
  return v === 'light' || v === 'dark' || v === 'system' ? v : 'system'
}

function getServerSnapshot(): Theme {
  return 'system'
}

export function useTheme(): {
  theme: Theme
  resolved: ResolvedTheme
  setTheme: (next: Theme) => void
} {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const resolved: ResolvedTheme =
    typeof window === 'undefined' ? 'light' : resolveTheme(theme)

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, next)
    applyTheme(resolveTheme(next))
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  }, [])

  return { theme, resolved, setTheme }
}
