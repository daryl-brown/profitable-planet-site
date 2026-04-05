'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/episodes', label: 'Episodes' },
  { href: '/about', label: 'About' },
  { href: '/suggest', label: 'Suggest a Business' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-warm-white transition-all duration-200',
        scrolled ? 'border-b border-warm-rule' : ''
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-playfair text-ink-deep font-semibold text-xl leading-none tracking-tight hover:text-green transition-colors"
        >
          Profitable Planet
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'font-dm-sans text-sm font-400 transition-colors',
                pathname.startsWith(href)
                  ? 'text-green font-medium'
                  : 'text-ink-mid hover:text-ink-deep'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-ink-deep"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              'block w-5 h-0.5 bg-current transition-transform duration-200',
              menuOpen ? 'translate-y-2 rotate-45' : ''
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-current transition-opacity duration-200',
              menuOpen ? 'opacity-0' : ''
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-current transition-transform duration-200',
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-warm-white border-t border-warm-rule px-6 py-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'font-dm-sans text-base transition-colors',
                    pathname.startsWith(href)
                      ? 'text-green font-medium'
                      : 'text-ink-mid hover:text-ink-deep'
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
