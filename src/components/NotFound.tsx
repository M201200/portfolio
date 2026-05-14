import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <main className="grid px-2 grid-cols-[1fr_minmax(0,90ch)_1fr] min-h-screen">
      <section className="flex flex-col col-start-2 col-end-3 justify-center min-h-[clamp(600px,85svh,1200px)] gap-12">
        <p className="text-byline flex items-center gap-1">
          404
          <span className="text-secondary-foreground/40 mx-3">·</span>
          <span className="text-secondary-foreground/60">Page not found</span>
        </p>
        <h1 className="text-display">
          <span className="block">This page wandered off.</span>
          <span className="block text-secondary-foreground/60">
            Let's head back.
          </span>
        </h1>

        <Link
          to="/"
          className="group inline-flex w-fit items-center gap-2 text-lg font-medium text-secondary-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </section>
    </main>
  )
}
