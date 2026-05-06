import { Intro } from '#/components/blocks/Intro'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="grid grid-cols-[1fr_minmax(0,80ch)_1fr] min-h-screen">
      <Intro />
    </main>
  )
}
