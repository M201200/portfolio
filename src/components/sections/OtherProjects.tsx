import { ExternalLink } from 'lucide-react'

import lhuntCoinImg from '#/assets/other-projects/lhunt-coin.png?picture'
import loadhuntImg from '#/assets/other-projects/loadhunt.png?picture'
import { Card, CardContent, CardFooter } from '#/components/ui/card'

type ProjectProps = {
  title: string
  description: string
  image: {
    sources: { avif?: string; webp?: string; png?: string; jpeg?: string }
    img: { src: string; w: number; h: number }
  }
  liveHref: string
}

const otherProjects: ProjectProps[] = [
  {
    title: 'Loadhunt Coin',
    description:
      "Landing page for the project's utility token — animated gradient background, scroll-driven sections, live price chart.",
    image: lhuntCoinImg,
    liveHref: 'https://coin.loadhunt.ai/',
  },
  {
    title: 'Loadhunt',
    description:
      'Marketing site for the parent trucking platform — scroll drives the slide transitions and the rotating product wheel.',
    image: loadhuntImg,
    liveHref: 'https://loadhunt.ai/',
  },
]

export function OtherProjects() {
  return (
    <section
      id="other-projects"
      className="col-start-2 col-end-3 flex flex-col gap-10 py-12"
    >
      <header className="flex flex-col gap-4 max-w-[70ch]">
        <h2 className="text-headline">Other Projects</h2>
        <p className="text-lede text-secondary-foreground/70">
          More exists — these are the ones currently public.
        </p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        {otherProjects.map((project) => (
          <ProductCard {...project} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({ title, description, image, liveHref }: ProjectProps) {
  return (
    <Card className="pt-0">
      <CardContent className="px-0">
        <picture>
          {image.sources.avif ? (
            <source srcSet={image.sources.avif} type="image/avif" />
          ) : null}
          {image.sources.webp ? (
            <source srcSet={image.sources.webp} type="image/webp" />
          ) : null}
          <img
            src={image.img.src}
            width={image.img.w}
            height={image.img.h}
            alt={title}
            decoding="async"
            loading="lazy"
            className="rounded-t-md object-cover object-center h-60 w-full"
          />
        </picture>
      </CardContent>
      <CardFooter className="grid gap-3">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={liveHref}
            className="flex text-lede items-baseline gap-3 text-secondary-foreground group hover:text-blue-500 transition-colors"
          >
            {title}
            <span className="flex gap-1 items-center text-caption font-medium text-muted-foreground group-hover:text-blue-500 transition-colors">
              Live <ExternalLink className="size-4" />
            </span>
          </a>
        </h3>
        <p className="text-caption text-muted-foreground max-w-[80ch]">
          {description}
        </p>
      </CardFooter>
    </Card>
  )
}
