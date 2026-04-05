import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { AudioPlayer } from '@/components/episode/AudioPlayer'
import { formatDate, formatDuration } from '@/lib/utils'
import type { Episode, ShowMeta } from '@/lib/types'

interface LatestEpisodeProps {
  episode: Episode
  show: ShowMeta
}

export function LatestEpisode({ episode, show }: LatestEpisodeProps) {
  const artwork = episode.artwork || show.artwork

  return (
    <section className="bg-warm-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow className="mb-3">Latest episode</Eyebrow>
        <Divider />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Artwork */}
          {artwork && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={artwork}
              alt={`${episode.title} artwork`}
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 object-cover flex-shrink-0 border-l-[3px] border-green"
            />
          )}

          {/* Content */}
          <div>
            {episode.episodeNumber !== null && (
              <p className="eyebrow mb-2">Episode {episode.episodeNumber}</p>
            )}

            <Link href={`/episodes/${episode.slug}`}>
              <h2 className="hover:text-green transition-colors mb-2 leading-snug">
                {episode.title}
              </h2>
            </Link>

            {episode.guestName && (
              <p className="text-ink-light font-dm-sans text-sm mb-3">
                with {episode.guestName}
              </p>
            )}

            <div className="caption flex flex-wrap gap-2 mb-4">
              {episode.pubDate && <span>{formatDate(episode.pubDate)}</span>}
              {episode.pubDate && episode.duration && (
                <span className="text-ink-faint">·</span>
              )}
              {episode.duration && <span>{formatDuration(episode.duration)}</span>}
            </div>

            {episode.shortDescription && (
              <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-6 max-w-xl">
                {episode.shortDescription}
              </p>
            )}

            {/* Player */}
            {episode.audioUrl && (
              <div className="max-w-xl">
                <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
              </div>
            )}

            <div className="mt-4">
              <Link
                href={`/episodes/${episode.slug}`}
                className="caption text-green hover:text-green-mid transition-colors font-medium"
              >
                Show notes & transcript →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
