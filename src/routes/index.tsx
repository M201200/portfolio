import { createFileRoute } from '@tanstack/react-router'

import { ContactForm } from '#/components/sections/ContactForm'
import { Intro } from '#/components/sections/Intro'
import { MainProject } from '#/components/sections/MainProject'
import { OtherProjects } from '#/components/sections/OtherProjects'
import { Toolkit } from '#/components/sections/Toolkit'
import { getIntroSeen } from '#/lib/intro'

export const Route = createFileRoute('/')({
  beforeLoad: async () => ({ introSeen: await getIntroSeen() }),
  component: Home,
})

function Home() {
  const { introSeen } = Route.useRouteContext()

  return (
    <main className="grid overflow-x-clip gap-y-10 sm:gap-y-14 lg:gap-y-20 px-4 grid-cols-[1fr_minmax(0,90ch)_1fr] sm:min-h-screen">
      <Intro skip={introSeen} />
      <MainProject />
      <OtherProjects />
      <Toolkit />
      <ContactForm />
    </main>
  )
}
