import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { SubscribeButton } from '@/components/ui/SubscribeButton'
import {
  SPOTIFY_SHOW_URL,
  APPLE_PODCASTS_URL,
  YOUTUBE_CHANNEL_URL,
} from '@/lib/config'
import type { ShowMeta } from '@/lib/types'

interface HeroProps {
  show: ShowMeta
}

export function Hero({ show }: HeroProps) {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Text */}
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">A podcast by Daryl Brown</Eyebrow>
            <Divider />
            <h1 className="mt-5 mb-2">
              Profitable
            </h1>
            <h1 className="text-green italic font-playfair" style={{ fontStyle: 'italic' }}>
              Planet
            </h1>

            <p
              className="mt-6 mb-4 font-playfair text-ink-mid"
              style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              Australian businesses proving that doing good
              <em className="text-green not-italic"> and doing well</em> are the same thing.
            </p>

            <p className="mt-4 mb-8 font-dm-sans text-ink-light text-base leading-relaxed">
              {show.description ||
                'A show about the organisations proving that being profitable and regenerative are not in conflict.'}
            </p>

            {/* Subscribe buttons — outline style, side by side, stacked on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <SubscribeButton
                platform="spotify"
                href={SPOTIFY_SHOW_URL}
                variant="full"
              />
              <SubscribeButton
                platform="apple"
                href={APPLE_PODCASTS_URL}
                variant="full"
              />
              <SubscribeButton
                platform="youtube"
                href={YOUTUBE_CHANNEL_URL}
                variant="full"
              />
            </div>
          </div>

          {/* Cover art */}
          <div className="flex-shrink-0 hidden md:block">
            {show.artwork ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={show.artwork}
                alt={`${show.title} podcast cover art`}
                width={280}
                height={280}
                className="w-56 h-56 lg:w-64 lg:h-64 object-cover shadow-none"
              />
            ) : (
              /* Placeholder cover art box */
              <div
                className="w-56 h-56 lg:w-64 lg:h-64 bg-green-pale border border-warm-rule flex items-center justify-center"
                aria-label="Podcast cover art placeholder"
              >
                <p className="eyebrow text-green text-center px-4">
                  [COVER_ART_IMAGE]
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
