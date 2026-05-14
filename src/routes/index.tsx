import { createFileRoute } from '@tanstack/react-router'

import { Intro } from '#/components/sections/Intro'
import { MainProject } from '#/components/sections/MainProject'
import { OtherProjects } from '#/components/sections/OtherProjects'
import { getIntroSeen } from '#/lib/intro'

export const Route = createFileRoute('/')({
  beforeLoad: async () => ({ introSeen: await getIntroSeen() }),
  component: Home,
})

function Home() {
  const { introSeen } = Route.useRouteContext()
  return (
    <main className="grid gap-20 px-2 grid-cols-[1fr_minmax(0,90ch)_1fr] min-h-screen">
      <Intro skip={introSeen} />
      <MainProject />
      <OtherProjects />
    </main>
  )
}
