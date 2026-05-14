const toolkit = {
  Languages: ['TypeScript', 'JavaScript'],
  Frameworks: ['React', 'Next.js', 'Astro'],
  Styles: ['Tailwind', 'SASS'],
  Graphics: ['Three.js', 'GSAP'],
  Browser: [
    'Chrome/Firefox Extensions',
    'Web/Service Workers',
    'Messaging APIs',
    'DOM Events',
  ],
}

const backend = ['PostgreSQL', 'MySQL', 'Drizzle', 'NextAuth']

export function Toolkit() {
  return (
    <section
      id="toolkit"
      className="col-start-2 col-end-3 flex flex-col gap-10 py-12"
    >
      <header className="flex flex-col gap-4 max-w-[70ch]">
        <h2 className="text-headline">Toolkit</h2>
        <p className="text-lede text-secondary-foreground/70">
          A wider list of what I'm comfortable working with.
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {Object.entries(toolkit).map(([category, items]) => (
          <div
            key={category}
            className="grid grid-cols-[10rem_1fr] gap-6 items-baseline text-title"
          >
            <span className="text-muted-foreground/50">{category}</span>
            <span>{items.join(', ')}</span>
          </div>
        ))}
        <div className="mt-2 -mb-4 grid grid-cols-[10rem_1fr] gap-6 items-baseline">
          <span></span>
          <span className="text-caption text-muted-foreground italic">
            From solo projects
          </span>
        </div>
        <div className="grid grid-cols-[10rem_1fr] gap-6 items-baseline text-title">
          <span className="text-muted-foreground/50">Backend</span>
          <span>{backend.join(', ')}</span>
        </div>
      </div>
    </section>
  )
}
