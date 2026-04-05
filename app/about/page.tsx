import type { Metadata } from 'next'
import Link from 'next/link'
import { fetchFeed } from '@/lib/rss'
import { SITE_URL } from '@/lib/config'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { StorySessionCTA } from '@/components/home/StorySessionCTA'
import { ExternalLinkIcon } from '@/components/ui/PlatformIcons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Profitable Planet — a podcast about Australian businesses proving that being profitable and regenerative are not in conflict. Hosted by Daryl Brown.',
  alternates: { canonical: `${SITE_URL}/about` },
}

export default async function AboutPage() {
  const { show } = await fetchFeed()

  return (
    <>
      <div className="bg-warm-white min-h-screen">
        {/* Header */}
        <div className="bg-warm-cream py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <Eyebrow className="mb-3">About the show</Eyebrow>
            <Divider />
            <h1 className="mt-5">Profitable Planet</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
            {/* Main content */}
            <div className="max-w-2xl">
              <h2 className="mb-6" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>
                The show
              </h2>

              <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
                {show.description ||
                  'Profitable Planet is a podcast about Australian businesses proving that being profitable and regenerative are not in conflict.'}
              </p>

              <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
                Every episode, host Daryl Brown sits down with founders, operators, and
                leaders who have built organisations that do right by people, planet, and
                profit — not as a trade-off, but as a strategy.
              </p>

              <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-12">
                These aren&apos;t case studies or thought leadership. They&apos;re honest
                conversations about what it actually takes, and what it actually looks like
                when it works.
              </p>

              {/* Divider rule */}
              <div className="section-rule mb-10" />

              <h2 className="mb-6" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>
                The host
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                {/* Photo placeholder */}
                <div
                  className="w-24 h-24 flex-shrink-0 bg-green-pale border-l-[3px] border-green flex items-center justify-center"
                  aria-label="Daryl's photo placeholder"
                >
                  <p className="eyebrow text-green text-center text-[9px] px-2">
                    [DARYL_PHOTO]
                  </p>
                </div>

                <div>
                  <h3 className="mb-3">Daryl Brown</h3>
                  <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-3">
                    Daryl is a Sydney-based filmmaker and content strategist. He has spent
                    years working with organisations to find and tell the stories that
                    matter — the ones that change how people think, not just what they buy.
                  </p>
                  <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-3">
                    Profitable Planet is his way of finding and sharing the evidence: the
                    businesses already proving that profit and purpose don&apos;t have to be
                    in conflict.
                  </p>
                  <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
                    Outside the podcast, he works with founders and leadership teams through
                    his freelance practice at{' '}
                    <a
                      href="https://darylbrown.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green hover:text-green-mid underline underline-offset-2 transition-colors"
                    >
                      darylbrown.com.au
                    </a>
                    .
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://darylbrown.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="caption text-green hover:text-green-mid transition-colors flex items-center gap-1 font-medium"
                    >
                      darylbrown.com.au
                      <ExternalLinkIcon size={11} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Suggest a business link */}
              <div className="mt-12 border-t border-warm-rule pt-10">
                <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
                  Know a business that should be featured on the show?
                </p>
                <Link href="/suggest" className="btn btn-primary">
                  Suggest a business
                </Link>
              </div>
            </div>

            {/* Show artwork sidebar */}
            {show.artwork && (
              <div className="hidden md:block flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={show.artwork}
                  alt="Profitable Planet podcast cover art"
                  width={200}
                  height={200}
                  className="w-44 h-44 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <StorySessionCTA />
    </>
  )
}
