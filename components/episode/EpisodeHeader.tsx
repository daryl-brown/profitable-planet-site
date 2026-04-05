import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { formatDate, formatDuration } from '@/lib/utils'
import type { Episode, ShowMeta } from '@/lib/types'

interface EpisodeHeaderProps {
  episode: Episode
  show: ShowMeta
}

export function EpisodeHeader({ episode, show }: EpisodeHeaderProps) {
  const artworkSrc = episode.artwork || show.artwork

  return (
    <div className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
        {/* Text side */}
        <div>
          {/* Eyebrow: Episode N [· Season N] */}
          {episode.episodeNumber !== null && (
            <Eyebrow className="mb-3">
              Episode {episode.episodeNumber}
              {episode.season !== null && ` · Season ${episode.season}`}
            </Eyebrow>
          )}

          <Divider />

          <h1 className="mt-4 mb-4">{episode.title}</h1>

          {/* Guest name */}
          {episode.guestName && (
            <p className="font-dm-sans text-base font-medium text-ink-light mb-4">
              with {episode.guestName}
            </p>
          )}

          {/* Meta row: date · duration */}
          <div className="flex flex-wrap items-center gap-3 caption">
            {episode.pubDate && (
              <span>{formatDate(episode.pubDate)}</span>
            )}
            {episode.pubDate && episode.duration && (
              <span className="text-ink-faint">·</span>
            )}
            {episode.duration && (
              <span>{formatDuration(episode.duration)}</span>
            )}
          </div>

          {/* Short description */}
          {episode.shortDescription && (
            <p className="mt-6 text-ink-mid font-dm-sans font-light text-base leading-relaxed max-w-2xl">
              {episode.shortDescription}
            </p>
          )}
        </div>

        {/* Artwork */}
        {artworkSrc && (
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={artworkSrc}
              alt={`${episode.title} artwork`}
              width={220}
              height={220}
              className="w-40 h-40 md:w-52 md:h-52 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}
