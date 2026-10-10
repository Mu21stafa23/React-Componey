import { useEffect, useRef, useState } from 'react'

/** Sets the title of the browser tab for the page being shown. */
export function useTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

/**
 * Follows a number as it changes, moving to the new value over a third of a second, so a
 * total that jumps is seen to change. People who asked for less motion get the value at once.
 */
export function useAnimated(value) {
  const [shown, setShown] = useState(value)
  const current = useRef(value)

  useEffect(() => {
    const still = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (still || current.current === value) {
      current.current = value
      setShown(value)
      return undefined
    }
    const begin = current.current
    const started = performance.now()
    let frame = requestAnimationFrame(function step(now) {
      const progress = Math.min(1, (now - started) / 320)
      const eased = 1 - (1 - progress) ** 3
      current.current = begin + (value - begin) * eased
      setShown(current.current)
      if (progress < 1) frame = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(frame)
  }, [value])

  return shown
}
