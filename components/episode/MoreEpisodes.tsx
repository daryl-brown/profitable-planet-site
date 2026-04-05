import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { formatDate, formatDuration } from '@/lib/utils'
import type { Episode } from '@/lib/types'

interface MoreEpisodesProps {
  episodes: Episode[]
  currentSlug: string
}

/**
 * Shows the previous episode + up to two other recent episodes,
 * excluding the current one.
 */
export function MoreEpisodes({ episodes, currentSlug }: MoreEpisodesProps) {
  const others = episodes.filter((ep) => ep.slug !== currentSlug).slice(0, 3)
  if (others.length === 0) return null

  return (
    <section className="py-12 border-t border-warm-rule" aria-label="More episodes">
      <Eyebrow className="mb-3">More episodes</Eyebrow>
      <Divider />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {others.map((ep) => (
          <Link
            key={ep.slug}
            href={`/episodes/${ep.slug}`}
            className="card group block p-5 hover:bg-green-pale transition-colors"
          >
            {ep.episodeNumber !== null && (
              <p className="eyebrow mb-2">Episode {ep.episodeNumber}</p>
            )}
            <h3 className="font-playfair font-semibold text-base text-ink-deep leading-snug mb-2 group-hover:text-green transition-colors line-clamp-2">
              {ep.title}
            </h3>
            {ep.guestName && (
              <p className="caption mb-2">with {ep.guestName}</p>
            )}
            <div className="caption flex gap-2">
              <span>{formatDate(ep.pubDate)}</span>
              {ep.duration && (
                <>
                  <span className="text-ink-faint">·</span>
                  <span>{formatDuration(ep.duration)}</span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/episodes"
          className="caption text-green hover:text-green-mid transition-colors font-medium"
        >
          View all episodes →
        </Link>
      </div>
    </section>
  )
}
