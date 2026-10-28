import { ExternalLink } from 'lucide-react'

import huntTmsImg from '#/assets/other-projects/hunt-tms.webp?picture'
import lhuntCoinImg from '#/assets/other-projects/lhunt-coin.png?picture'
import loadhuntImg from '#/assets/other-projects/loadhunt.webp?picture'
import qryloImg from '#/assets/other-projects/qrylo.png?picture'
import { Card, CardContent, CardFooter } from '#/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#/components/ui/carousel'

type ProjectProps = {
  title: string
  description: string
  stack: string[]
  image: {
    sources: { avif?: string; webp?: string; png?: string; jpeg?: string }
    img: { src: string; w: number; h: number }
  }
  liveHref: string
}

const otherProjects: ProjectProps[] = [
  {
    title: 'Loadhunt',
    description:
      'Marketing site for the parent freight platform — a scroll-driven "freight road" walks a single load through five products, with live mockups, a role-based views section and an entry-point picker quiz.',
    stack: ['Next.js', 'Tailwind', 'GSAP', 'Lenis'],
    image: loadhuntImg,
    liveHref: 'https://loadhunt.ai/',
  },
  {
    title: 'huntTMS',
    description:
      'Marketing site for a dispatcher-focused TMS — interactive product mockups of the dispatch timeline, live load map and business dashboard, plus pricing tiers and an ecosystem map of the Loadhunt suite.',
    stack: ['Next.js', 'Tailwind', 'GSAP', 'Lenis'],
    image: huntTmsImg,
    liveHref: 'https://tms.loadhunt.ai/',
  },
  {
    title: 'Qrylo',
    description:
      'Built the entire frontend and REST API integration for a logistics marketplace — search with location filters, listing and posting flows, auth, chat and more. Shipped the complete feature set to spec; the current live site is a later in-house Angular rebuild.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'REST API'],
    image: qryloImg,
    liveHref: 'https://qrylo.com/',
  },
  {
    title: 'Loadhunt Coin',
    description:
      "Landing page for the project's utility token — animated gradient background, scroll-driven sections, live price chart.",
    stack: ['Next.js', 'Tailwind', 'Three.js', 'GSAP'],
    image: lhuntCoinImg,
    liveHref: 'https://coin.loadhunt.ai/',
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
      <Carousel opts={{ loop: true }} className="relative group">
        <CarouselContent viewportClassName="-my-2 py-2 sm:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {otherProjects.map((project) => (
            <CarouselItem key={project.title} className="basis-4/5">
              <ProductCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 shadow-lg lg:-left-12 left-1 backdrop-blur-md size-8 lg:opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 shadow-lg lg:-right-12 right-1 backdrop-blur-md size-8 lg:opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>
    </section>
  )
}

function ProductCard({
  title,
  description,
  stack,
  image,
  liveHref,
}: ProjectProps) {
  return (
    <Card className="pt-0 h-full">
      <CardContent className="px-0">
        <picture>
          {image.sources.avif ? (
            <source
              srcSet={image.sources.avif}
              sizes="(min-width: 1000px) 640px, 80vw"
              type="image/avif"
            />
          ) : null}
          {image.sources.webp ? (
            <source
              srcSet={image.sources.webp}
              sizes="(min-width: 1000px) 640px, 80vw"
              type="image/webp"
            />
          ) : null}
          <img
            src={image.img.src}
            width={image.img.w}
            height={image.img.h}
            alt={title}
            decoding="async"
            loading="lazy"
            className="object-cover object-top h-64 w-full"
          />
        </picture>
      </CardContent>
      <CardFooter className="grid gap-3 content-start">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={liveHref}
            className="flex text-lede items-baseline gap-3 text-secondary-foreground group/link hover:text-blue-500 transition-colors"
          >
            {title}
            <span className="flex gap-1 items-center text-caption font-medium text-muted-foreground group-hover/link:text-blue-500 transition-colors">
              Live <ExternalLink className="size-4" />
            </span>
          </a>
        </h3>
        <p className="text-caption text-muted-foreground max-w-[80ch]">
          {description}
        </p>
        <p className="text-caption text-muted-foreground/80 font-medium">
          {stack.join(' · ')}
        </p>
      </CardFooter>
    </Card>
  )
}
