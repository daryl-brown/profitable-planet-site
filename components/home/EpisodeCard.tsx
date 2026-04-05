import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { VideoIcon } from '@/components/ui/PlatformIcons'
import { formatDate, formatDuration } from '@/lib/utils'
import type { Episode } from '@/lib/types'

interface EpisodeCardProps {
  episode: Episode
  hasVideo?: boolean
}

export function EpisodeCard({ episode, hasVideo = false }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className="card group block p-6 bg-warm-white hover:bg-green-pale transition-colors"
    >
      {/* Eyebrow row: episode number + optional video badge */}
      <div className="flex items-center justify-between mb-3">
        {episode.episodeNumber !== null ? (
          <Eyebrow>Episode {episode.episodeNumber}</Eyebrow>
        ) : (
          <div />
        )}
        {hasVideo && (
          <span className="flex items-center gap-1 caption text-ink-faint">
            <VideoIcon size={12} />
            Video
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-playfair font-semibold text-ink-deep leading-snug mb-2 group-hover:text-green transition-colors line-clamp-2">
        {episode.title}
      </h3>

      {/* Guest */}
      {episode.guestName && (
        <p className="caption mb-3">with {episode.guestName}</p>
      )}

      {/* Meta */}
      <div className="caption flex flex-wrap gap-2 mb-3">
        {episode.pubDate && <span>{formatDate(episode.pubDate)}</span>}
        {episode.pubDate && episode.duration && (
          <span className="text-ink-faint">·</span>
        )}
        {episode.duration && <span>{formatDuration(episode.duration)}</span>}
      </div>

      {/* Short description */}
      {episode.shortDescription && (
        <p className="text-ink-light text-sm leading-relaxed line-clamp-3 font-dm-sans">
          {episode.shortDescription}
        </p>
      )}

      {/* Listen link indicator */}
      <p className="mt-4 caption text-green group-hover:text-green-mid transition-colors font-medium">
        Listen →
      </p>
    </Link>
  )
}
