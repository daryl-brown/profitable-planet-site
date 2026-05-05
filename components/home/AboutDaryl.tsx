import Link from 'next/link'
import { Divider } from '@/components/ui/Divider'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ExternalLinkIcon } from '@/components/ui/PlatformIcons'

export function AboutDaryl() {
  return (
    <section className="bg-warm-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center max-w-3xl">
          {/* Photo */}
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.cdn.filesafe.space/Gr9GT9COWAml3vXv07yO/media/69d4b2dbbec7abdef13036ec.png"
              alt="Daryl Brown"
              width={128}
              height={128}
              className="w-28 h-28 md:w-32 md:h-32 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <Eyebrow className="mb-3">The host</Eyebrow>
            <Divider />
            <h2 className="mt-4 mb-4" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>
              Daryl Brown
            </h2>
            <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
              Daryl is a Sydney-based filmmaker and content strategist who has spent
              years helping organisations tell the stories that matter. Profitable Planet
              is his way of finding and amplifying the businesses already proving that
              profit and purpose aren&apos;t in conflict.
            </p>
            <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-6">
              When he&apos;s not recording, he works with founders and leadership teams
              on the one story they should be telling but aren&apos;t.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="caption text-green hover:text-green-mid transition-colors font-medium"
              >
                More about Daryl →
              </Link>
              <a
                href="https://darylbrown.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="caption text-ink-light hover:text-ink-deep transition-colors flex items-center gap-1"
              >
                darylbrown.com.au
                <ExternalLinkIcon size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
