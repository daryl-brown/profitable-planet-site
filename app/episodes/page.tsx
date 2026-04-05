import type { Metadata } from 'next'
import { fetchFeed, getVideoData } from '@/lib/rss'
import { SITE_URL } from '@/lib/config'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { EpisodeCard } from '@/components/home/EpisodeCard'

export const metadata: Metadata = {
  title: 'Episodes',
  description:
    'All episodes of Profitable Planet — Australian businesses proving that doing good and doing well are the same thing.',
  alternates: { canonical: `${SITE_URL}/episodes` },
}

export default async function EpisodesPage() {
  const { show, episodes } = await fetchFeed()

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Page header */}
      <div className="bg-warm-cream py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Eyebrow className="mb-3">The archive</Eyebrow>
          <Divider />
          <h1 className="mt-5">All Episodes</h1>
          {show.description && (
            <p className="mt-4 text-ink-light font-dm-sans font-light max-w-xl leading-relaxed">
              {show.description}
            </p>
          )}
        </div>
      </div>

      {/* Episode grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {episodes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {episodes.map((episode) => {
              const videoData = getVideoData(episode.slug)
              return (
                <EpisodeCard
                  key={episode.slug}
                  episode={episode}
                  hasVideo={!!videoData}
                />
              )
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="eyebrow mb-4">Coming soon</p>
            <h2 className="mb-4">No episodes yet.</h2>
            <p className="text-ink-light font-dm-sans font-light">
              Episodes will appear here automatically when they publish.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
