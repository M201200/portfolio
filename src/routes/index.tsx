import { createFileRoute } from '@tanstack/react-router'

import { Intro } from '#/components/blocks/Intro'
import { MainProject } from '#/components/blocks/MainProject'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="grid gap-20 px-2 grid-cols-[1fr_minmax(0,100ch)_1fr] min-h-screen">
      <Intro />
      <MainProject />
    </main>
  )
}
