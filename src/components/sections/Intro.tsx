import { ArrowDown } from 'lucide-react'

import { useTypewriter } from '#/hooks/useTypewriter'

export function Intro({ skip = false }: { skip?: boolean }) {
  const { output, index, done } = useTypewriter(
    [
      { text: 'You set the vision.', speed: 45 },
      { text: 'I ship the product.', delayBefore: 500, speed: 45 },
    ],
    { skip },
  )

  const cursor = (
    <span
      className={`ml-1 inline-block w-1 h-[0.9em] -mb-1 bg-current ${
        done ? 'animate-pulse' : 'opacity-100'
      }`}
    />
  )

  return (
    <header className="flex flex-col col-start-2 col-end-3 justify-center min-h-[clamp(600px,85svh,1200px)] gap-12">
      <p className="text-byline flex items-center gap-1">
        Vlad Iuzhev
        <span className="text-secondary-foreground/40 mx-3">·</span>
        <span className="text-secondary-foreground/60"> Front-end Lead</span>
      </p>
      <h1
        className="text-display min-h-[2.1em]"
        aria-label="You set the vision. I ship the product."
      >
        <span aria-hidden="true" className="block">
          {output[0]}
          {index === 0 && cursor}
        </span>
        <span aria-hidden="true" className="block text-secondary-foreground/60">
          {output[1]}
          {index === 1 && cursor}
        </span>
      </h1>

      <a
        href="#main-project"
        className="group inline-flex w-fit items-center gap-2 text-lg font-medium text-secondary-foreground/70 transition-colors hover:text-foreground"
      >
        View projects
        <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
      </a>
    </header>
  )
}
