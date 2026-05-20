import { Mail } from 'lucide-react'

import { GithubIcon } from './svg/GithubIcon'
import { LinkedinIcon } from './svg/LinkedinIcon'
import { TelegramIcon } from './svg/TelegramIcon'

const EMAIL = 'm201200dev@gmail.com'
const GITHUB_URL = 'https://github.com/M201200'
const LINKEDIN_URL = 'https://www.linkedin.com/in/vlad-iujev-a15454306/'
const TELEGRAM_URL = 'https://t.me/VYm201200'

const linkClass =
  'inline-flex items-center gap-2 text-caption text-secondary-foreground/70 transition-colors hover:text-foreground'

export function Footer() {
  return (
    <footer className="border-t mt-16 px-4 py-6 grid grid-cols-[1fr_minmax(0,90ch)_1fr]">
      <div className="col-start-2 col-end-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          <Mail className="size-4 translate-y-px" />
          {EMAIL}
        </a>
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            <GithubIcon className="size-3.5" />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            <LinkedinIcon className="size-3.5" />
            LinkedIn
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            <TelegramIcon className="size-3.5" />
            Telegram
          </a>
        </div>
      </div>
    </footer>
  )
}
