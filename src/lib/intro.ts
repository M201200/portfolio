import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'

const INTRO_COOKIE = 'intro-seen'

export const getIntroSeen = createServerFn({ method: 'GET' }).handler(() => {
  const seen = getCookie(INTRO_COOKIE) === '1'
  if (!seen) {
    setCookie(INTRO_COOKIE, '1', { path: '/', sameSite: 'lax' })
  }
  return seen
})
