import { Link } from '@tanstack/react-router'
import { ArrowDown } from 'lucide-react'

import { ThemeToggle } from './common/ThemeToggle'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 grid grid-cols-[1fr_minmax(0,90ch)_1fr] z-9999 sm:py-2">
      <nav className="flex gap-2 justify-between items-center col-start-2 col-end-3 p-2 rounded-md bg-background/10  backdrop-blur-md">
        <Link
          to="/"
          className="text-title font-semibold leading-none text-foreground px-2"
        >
          VI
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="group inline-flex w-fit items-center gap-2 text-caption text-secondary-foreground/70 transition-colors hover:text-foreground"
          >
            Get In Touch <ArrowDown className="size-3.5" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
