import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ChevronsRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'

import { buttonVariants } from '#/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#/components/ui/carousel'
import { Dialog, DialogContent } from '#/components/ui/dialog'
import { cn } from '#/lib/utils'

export type CardImage = {
  sources: { avif?: string; webp?: string; png?: string; jpeg?: string }
  img: { src: string; w: number; h: number }
}

export type MainProductCardProps = {
  title: string
  images: CardImage[]
  description: string
  stack: string[]
  liveHref: string
  pageHref?: LinkProps['to']
  className?: string
  carouselClassName?: string
}

export function MainProductCard({
  title,
  images,
  description,
  stack,
  liveHref,
  pageHref,
  className,
  carouselClassName,
}: MainProductCardProps) {
  const [imageIdx, setImageIdx] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  const handleOpenPreview = (imgIdx: number) => {
    setImageIdx(imgIdx)
    setOpen(true)
  }
  return (
    <div className={cn('flex flex-col', className)}>
      <h3 className="mb-4 flex gap-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={liveHref}
          className="flex text-title items-baseline gap-3 text-secondary-foreground group hover:text-blue-500 transition-colors"
        >
          {title}{' '}
          <span className="flex gap-1 items-center text-lede font-medium text-muted-foreground group-hover:text-blue-500 transition-colors">
            Live <ExternalLink className="size-4" />
          </span>
        </a>
      </h3>
      <Carousel opts={{ loop: true }} className="relative group mb-10">
        <CarouselContent
          className={carouselClassName}
          viewportClassName="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] -mx-[12.5%]"
        >
          {images.map((image, idx) => (
            <CarouselItem key={image.img.src} className="basis-4/5">
              <button onClick={() => handleOpenPreview(idx)} className="w-full">
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
                    decoding="async"
                    loading="lazy"
                    className="rounded-md object-cover object-center max-h-100 w-full"
                  />
                </picture>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 shadow-lg -left-12 backdrop-blur-md size-8 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 shadow-lg -right-12 backdrop-blur-md size-8 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>
      <p className="text-caption text-muted-foreground max-w-[80ch]">
        {description}
      </p>

      {pageHref ? (
        <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
          <Link
            target="_blank"
            className={buttonVariants({
              variant: 'outline',
              className: 'text-lg w-fit',
            })}
            to={pageHref}
          >
            Read more <ChevronsRight className="size-4" />
          </Link>
          <p className="text-caption text-muted-foreground/80 font-medium">
            {stack.join(' · ')}
          </p>
        </div>
      ) : (
        <p className="text-caption text-muted-foreground/80 font-medium mt-4">
          {stack.join(' · ')}
        </p>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-500 ring-0 bg-transparent sm:p-4 p-2">
          <Carousel
            opts={{ loop: true, startIndex: imageIdx ?? 0 }}
            className="relative"
          >
            <CarouselContent
              className={carouselClassName}
              viewportClassName="[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
            >
              {images.map((image, idx) => (
                <CarouselItem key={image.img.src} className="basis-11/12">
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
                      decoding="async"
                      className="rounded-md object-contain object-center max-h-240 w-full"
                    />
                  </picture>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 shadow-lg left-0 backdrop-blur-md size-10 ms:size-12" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 shadow-lg right-0 backdrop-blur-md size-10 ms:size-12" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  )
}
