import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '#/components/ui/carousel'
import { cn } from '#/lib/utils'

export type CardImage = {
  sources: { avif?: string; webp?: string; png?: string; jpeg?: string }
  img: { src: string; w: number; h: number }
}

export type MainProductCardProps = {
  title: string
  images: CardImage[]
  description: string
  liveHref: string
  pageHref?: LinkProps['to']
  className?: string
  carouselClassName?: string
}

export function MainProductCard({
  title,
  images,
  description,
  liveHref,
  pageHref,
  className,
  carouselClassName,
}: MainProductCardProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <h3>{title}</h3>
      <Carousel opts={{ loop: true }}>
        <CarouselContent className={carouselClassName}>
          {images.map((image, idx) => (
            <CarouselItem key={image.img.src}>
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
                  alt={`${title} screenshot ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p>{description}</p>
      <a href={liveHref}>Live link</a>
      {pageHref ? <Link to={pageHref}>Read more</Link> : null}
    </div>
  )
}
