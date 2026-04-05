import { fetchFeed } from '@/lib/rss'
import { Hero } from '@/components/home/Hero'
import { LatestEpisode } from '@/components/home/LatestEpisode'
import { EpisodeGrid } from '@/components/home/EpisodeGrid'
import { EmailSignup } from '@/components/home/EmailSignup'
import { SuggestStrip } from '@/components/home/SuggestStrip'
import { AboutDaryl } from '@/components/home/AboutDaryl'
import { StorySessionCTA } from '@/components/home/StorySessionCTA'

export default async function HomePage() {
  const { show, episodes } = await fetchFeed()
  const [latestEpisode, ...restEpisodes] = episodes

  return (
    <>
      <Hero show={show} />

      {latestEpisode && (
        <LatestEpisode episode={latestEpisode} show={show} />
      )}

      {restEpisodes.length > 0 && (
        <EpisodeGrid episodes={restEpisodes} />
      )}

      {episodes.length === 0 && (
        <section className="bg-warm-white py-20 text-center">
          <div className="max-w-md mx-auto px-6">
            <p className="eyebrow mb-4">Coming soon</p>
            <h2 className="mb-4">Episodes are on their way.</h2>
            <p className="text-ink-light font-dm-sans font-light">
              The first episode will appear here automatically when it publishes.
              Sign up below to be notified.
            </p>
          </div>
        </section>
      )}

      <EmailSignup />
      <SuggestStrip />
      <AboutDaryl />
      <StorySessionCTA />
    </>
  )
}
