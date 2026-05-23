import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { NotFound } from '#/components/NotFound'
import { getThemeFromCookie } from '#/lib/theme'
import { useThemeStore } from '#/stores/theme'
import appCss from '#/styles.css?url'

const SITE_URL = 'https://portfolio-beta-amber-46.vercel.app'
const SITE_TITLE = 'Vlad Iujev | Portfolio'
const SITE_DESCRIPTION =
  'Vlad Iujev, Front-end Lead. You set the vision. I ship the product. React, TypeScript, design systems, accessibility.'
const OG_IMAGE = `${SITE_URL}/og-image.png`

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vlad Iujev',
  url: SITE_URL,
  jobTitle: 'Front-end Lead',
  email: 'mailto:m201200dev@gmail.com',
  description: SITE_DESCRIPTION,
  image: OG_IMAGE,
}

export const Route = createRootRoute({
  beforeLoad: async () => ({ theme: await getThemeFromCookie() }),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE_TITLE },
      { name: 'description', content: SITE_DESCRIPTION },
      { name: 'author', content: 'Vlad Iujev' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#09090b' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Vlad Iujev' },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'icon', type: 'image/svg+xml', href: '/icons/icon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/icon-32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/icon-16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/icon-180.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = Route.useRouteContext()
  useThemeStore.setState({ theme })

  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : undefined}>
      <head>
        <HeadContent />
      </head>
      <body className="relative">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
