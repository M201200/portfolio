# Vlad Iujev — Portfolio

Front-end Lead. You set the vision. I ship the product.

**Live →** https://portfolio-beta-amber-46.vercel.app
**Contact:** m201200dev@gmail.com

---

## About this site

A portfolio web site I designed and built from scratch.
It walks through the work I'm proudest of, the stack I reach for, and the way I
approach building product surfaces.

## What's featured

- **Loadhunter** — a SaaS for trucking dispatchers. I built four surfaces:
  - A Chrome/Firefox **extension** that automates load posting across DAT One,
    Truckstop and Truck Smarter (one-click and auto-emailing across multiple
    broker accounts, custom filtering, Telegram bridge).
  - **SmartBoard** — a custom load-board UI injected as an overlay to replace
    the native broker tables.
  - The **web dashboard** — emailer config, broker/shipper directories, TMS
    timeline, billing, team management.
  - The **marketing site**.
- **Loadhunt Coin** & **Loadhunt** — marketing sites with scroll-driven
  transitions, animated gradient backgrounds, live charts, 3D.

## What the site itself demonstrates

The portfolio is part of the portfolio. A few decisions worth noting if you're
reviewing the code:

- **SSR with TanStack Start** — fast first paint, real SEO, JSON-LD person
  schema, complete OG/Twitter metadata.
- **React 19 + the React Compiler** — kept the component code free of manual
  memoization noise.
- **Theme without flash** — light/dark is read from a cookie on the server,
  hydrated into a Zustand store, applied to `<html>` before the body renders.
- **Image pipeline** — every screenshot is built into AVIF/WebP/PNG sources
  with explicit dimensions; light and dark variants are swapped at runtime.
- **Accessible by default** — typewriter intro carries an `aria-label` for
  screen readers, focus states preserved across the Base UI primitives,
  semantic landmarks throughout.
- **Form done right** — contact form validated with Zod on both sides,
  submitted to a TanStack Start server function, with `sonner` for feedback.

## Stack

TypeScript · React 19 · TanStack Start · Tailwind v4 · Base UI · Zustand · Zod ·
vite-imagetools · Deployed on Vercel

Wider toolkit: see the **Toolkit** section on the site.

## Repo layout (if you want to poke around)

- [src/routes/](src/routes/) — pages (`__root.tsx`, `index.tsx`)
- [src/components/sections/](src/components/sections/) — the five page sections
- [src/components/ui/](src/components/ui/) — primitives (Base UI based)
- [src/api/contact.ts](src/api/contact.ts) — contact form server function
- [src/lib/](src/lib/) — schema, theme, cookie helpers
