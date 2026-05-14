import db1Light from '#/assets/dashboard/dashboard-1.png?picture'
import db2Light from '#/assets/dashboard/dashboard-2.png?picture'
import db3Light from '#/assets/dashboard/dashboard-3.png?picture'
import db4Light from '#/assets/dashboard/dashboard-4.png?picture'
import db1Dark from '#/assets/dashboard/dashboard-dark-1.png?picture'
import db2Dark from '#/assets/dashboard/dashboard-dark-2.png?picture'
import db3Dark from '#/assets/dashboard/dashboard-dark-3.png?picture'
import db4Dark from '#/assets/dashboard/dashboard-dark-4.png?picture'
import ext1Light from '#/assets/extension/ext-1.png?picture'
import ext2Light from '#/assets/extension/ext-2.png?picture'
import ext3Light from '#/assets/extension/ext-3.png?picture'
import ext4Light from '#/assets/extension/ext-4.png?picture'
import ext1Dark from '#/assets/extension/ext-dark-1.png?picture'
import ext2Dark from '#/assets/extension/ext-dark-2.png?picture'
import ext3Dark from '#/assets/extension/ext-dark-3.png?picture'
import ext4Dark from '#/assets/extension/ext-dark-4.png?picture'
import lp1 from '#/assets/landing/landing-1.png?picture'
import lp2 from '#/assets/landing/landing-2.png?picture'
import lp3 from '#/assets/landing/landing-3.png?picture'
import sb1Light from '#/assets/smartboard/smartboard-1.png?picture'
import sb2Light from '#/assets/smartboard/smartboard-2.png?picture'
import sb3Light from '#/assets/smartboard/smartboard-3.png?picture'
import sb4Light from '#/assets/smartboard/smartboard-4.png?picture'
import sb1Dark from '#/assets/smartboard/smartboard-dark-1.png?picture'
import sb2Dark from '#/assets/smartboard/smartboard-dark-2.png?picture'
import sb3Dark from '#/assets/smartboard/smartboard-dark-3.png?picture'
import sb4Dark from '#/assets/smartboard/smartboard-dark-4.png?picture'
import type { MainProductCardProps } from '#/components/common/MainProductCard'
import { MainProductCard } from '#/components/common/MainProductCard'
import { useThemeStore } from '#/stores/theme'

const extensionImages = {
  light: [ext1Light, ext2Light, ext3Light, ext4Light],
  dark: [ext1Dark, ext2Dark, ext3Dark, ext4Dark],
}

const smartboardImages = {
  light: [sb1Light, sb2Light, sb3Light, sb4Light],
  dark: [sb1Dark, sb2Dark, sb3Dark, sb4Dark],
}

const dashboardImages = {
  light: [db1Light, db2Light, db3Light, db4Light],
  dark: [db1Dark, db2Dark, db3Dark, db4Dark],
}

const landingImages = [lp1, lp2, lp3]

export function MainProject() {
  const theme = useThemeStore((s) => s.theme)

  const products: MainProductCardProps[] = [
    {
      title: 'Browser Extension',
      images: extensionImages[theme],
      description:
        'Chrome and Firefox extension for DAT One, Truckstop and Truck Smarter. One-click and auto-emailing across multiple broker accounts, custom load filtering, Telegram bridge. Hosts the SmartBoard overlay.',
      stack: ['Extension APIs', 'Browser APIs', 'React', 'TypeScript'],
      liveHref:
        'https://chromewebstore.google.com/detail/loadhunter/ogepjnnfghfpkpjjieenkcppifhmmcdg',
      pageHref: '/',
    },
    {
      title: 'SmartBoard',
      images: smartboardImages[theme],
      description:
        'Custom load board UI that replaces the native tables on DAT One and Truckstop. Ships as an iframe overlay injected by the extension on the Pro tier.',
      stack: ['Browser APIs', 'React', 'Tailwind', 'TypeScript'],
      liveHref:
        'https://chromewebstore.google.com/detail/loadhunter/ogepjnnfghfpkpjjieenkcppifhmmcdg',
      pageHref: '/',
    },
    {
      title: 'Dashboard',
      images: dashboardImages[theme],
      description:
        "Standalone web app. Configure the extension's emailer (templates, factoring accounts), browse broker and shipper directories, run a full TMS timeline, manage profile, billing and team.",
      stack: ['Browser APIs', 'React', 'Tailwind', 'TypeScript'],
      liveHref: 'https://app.loadhunter.io/',
      pageHref: '/',
    },
    {
      title: 'Landing',
      images: landingImages,
      stack: ['Next.js', 'Tailwind', 'TypeScript'],
      description: 'Marketing site. Go here for the full product overview.',
      liveHref: 'https://loadhunter.io/',
    },
  ]

  return (
    <section
      id="main-project"
      className="col-start-2 col-end-3 flex flex-col gap-32 py-12"
    >
      <header className="flex flex-col gap-4 max-w-[70ch]">
        <p className="text-caption text-muted-foreground uppercase tracking-wider">
          Main Project
        </p>
        <h2 className="text-headline">Loadhunter</h2>
        <p className="text-lede text-secondary-foreground/70">
          A SaaS for trucking dispatchers. Four surfaces I built — a Chrome
          extension with a custom load board overlay, a full web dashboard, and
          the marketing site.
        </p>
      </header>
      <div className="grid gap-20">
        {products.map((product) => (
          <MainProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}
