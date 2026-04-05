import Link from 'next/link'

interface BreadcrumbProps {
  episodeTitle: string
}

export function Breadcrumb({ episodeTitle }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 caption">
        <li>
          <Link href="/" className="hover:text-ink-deep transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-ink-faint">
          /
        </li>
        <li>
          <Link href="/episodes" className="hover:text-ink-deep transition-colors">
            Episodes
          </Link>
        </li>
        <li aria-hidden="true" className="text-ink-faint">
          /
        </li>
        <li className="text-ink-deep truncate max-w-xs md:max-w-sm" aria-current="page">
          {episodeTitle}
        </li>
      </ol>
    </nav>
  )
}
