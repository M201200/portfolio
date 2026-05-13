import { useEffect, useState } from 'react'

export type Segment = { text: string; delayBefore?: number; speed?: number }

export function useTypewriter(
  segments: Segment[],
  { skip = false }: { skip?: boolean } = {},
) {
  const [output, setOutput] = useState<string[]>(() =>
    skip ? segments.map((s) => s.text) : segments.map(() => ''),
  )
  const [index, setIndex] = useState(() =>
    skip ? Math.max(0, segments.length - 1) : 0,
  )
  const [done, setDone] = useState(skip)

  useEffect(() => {
    if (skip) return

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')

    const finish = () => {
      setOutput(segments.map((s) => s.text))
      setIndex(Math.max(0, segments.length - 1))
      setDone(true)
    }

    if (mql.matches) {
      finish()
      return
    }

    let timer: ReturnType<typeof setTimeout> | undefined
    let segIdx = 0
    let charIdx = 0
    let waited = false

    const step = () => {
      if (segIdx >= segments.length) {
        setDone(true)
        return
      }

      const { text, delayBefore = 0, speed = 45 } = segments[segIdx]

      if (!waited && delayBefore) {
        waited = true
        timer = setTimeout(step, delayBefore)
        return
      }

      if (charIdx < text.length) {
        if (charIdx === 0) setIndex(segIdx)
        charIdx++
        const slice = text.slice(0, charIdx)
        setOutput((prev) => {
          const next = [...prev]
          next[segIdx] = slice
          return next
        })
        timer = setTimeout(step, speed)
        return
      }

      segIdx++
      charIdx = 0
      waited = false
      step()
    }

    timer = setTimeout(step, 0)

    const onMotionChange = () => {
      if (mql.matches) {
        if (timer) clearTimeout(timer)
        finish()
      }
    }
    mql.addEventListener('change', onMotionChange)

    return () => {
      if (timer) clearTimeout(timer)
      mql.removeEventListener('change', onMotionChange)
    }
  }, [])

  return { output, index, done }
}
