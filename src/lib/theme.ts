import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'

export type Theme = 'light' | 'dark'

export const THEME_COOKIE = 'theme'

export const getThemeFromCookie = createServerFn({ method: 'GET' }).handler(
  (): Theme => (getCookie(THEME_COOKIE) === 'light' ? 'light' : 'dark'),
)

export const setThemeCookie = createServerFn({ method: 'POST' })
  .inputValidator(
    (theme: unknown): Theme => (theme === 'light' ? 'light' : 'dark'),
  )
  .handler(({ data }) => {
    setCookie(THEME_COOKIE, data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
  })
