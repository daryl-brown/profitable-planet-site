import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { EpisodeCard } from './EpisodeCard'
import { getVideoData } from '@/lib/rss'
import type { Episode } from '@/lib/types'

interface EpisodeGridProps {
  episodes: Episode[]
}

export function EpisodeGrid({ episodes }: EpisodeGridProps) {
  if (episodes.length === 0) return null

  return (
    <section className="bg-warm-cream py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow className="mb-3">All episodes</Eyebrow>
        <Divider />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {episodes.map((episode, i) => {
            const videoData = getVideoData(episode.slug)
            return (
              <ScrollReveal key={episode.slug} delay={i * 60}>
                <EpisodeCard
                  episode={episode}
                  hasVideo={!!videoData}
                />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
