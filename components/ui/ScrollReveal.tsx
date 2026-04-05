'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  /** Delay the animation in milliseconds (for staggered reveals) */
  delay?: number
}

/**
 * Wraps children in a div with IntersectionObserver-based reveal animation.
 *
 * Requires .js-ready on <body> (set in layout) — without it, content is fully
 * visible by default so the site works even if JavaScript fails.
 *
 * CSS: .js-ready .reveal { opacity: 0; transform: translateY(24px); }
 *      .js-ready .reveal.is-visible { opacity: 1; transform: none; transition: ... }
 */
export function ScrollReveal({ children, className, delay }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mark body as js-ready so CSS scopes the initial hidden state
    document.body.classList.add('js-ready')

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              setTimeout(() => entry.target.classList.add('is-visible'), delay)
            } else {
              entry.target.classList.add('is-visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
