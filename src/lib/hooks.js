import { useEffect, useRef, useState } from 'react'

/** Sets the title of the browser tab for the page being shown. */
export function useTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

/** True once the element has scrolled into view. It stays true afterwards. */
export function useSeen() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || seen) return undefined
    if (typeof IntersectionObserver !== 'function') {
      setSeen(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setSeen(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [seen])

  return [ref, seen]
}

/**
 * Counts from zero up to `target` once `running` is true, over about a second.
 * People who asked for less motion get the final number at once.
 */
export function useCountUp(target, running) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!running) return undefined
    const still = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (still) {
      setValue(target)
      return undefined
    }
    const started = performance.now()
    let frame = requestAnimationFrame(function step(now) {
      const progress = Math.min(1, (now - started) / 1200)
      setValue(Math.round(target * (1 - (1 - progress) ** 3)))
      if (progress < 1) frame = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(frame)
  }, [target, running])

  return value
}
