import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { STORY_SESSION_URL } from '@/lib/config'

/**
 * Forest Green background CTA.
 * Used on homepage and every episode page.
 */
export function StorySessionCTA() {
  const isPlaceholder = STORY_SESSION_URL.startsWith('[')

  return (
    <section className="bg-green py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <Eyebrow variant="dark" className="mb-3">From the host</Eyebrow>
          <Divider />
          <h2
            className="mt-5 mb-4 text-warm-white"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
          >
            Is your organisation telling
            <em className="text-green-light"> the right story?</em>
          </h2>
          <p className="text-green-light font-dm-sans font-light leading-relaxed mb-4">
            I offer a free 20-minute conversation called the Story Session. I&apos;ll look at
            how your organisation is currently telling its story, identify the one story
            you should be telling but aren&apos;t, and give you a concrete idea for what to
            do about it.
          </p>
          <p className="text-green-light font-dm-sans font-light leading-relaxed mb-8">
            No charge. No preparation. No obligation. If that&apos;s you, or if you know
            someone it might be for, I&apos;d love to hear from you.
          </p>

          {isPlaceholder ? (
            <div className="inline-flex items-center gap-2 btn btn-ghost opacity-60 cursor-not-allowed">
              <span>Book a Story Session</span>
              <span className="font-dm-mono text-xs normal-case tracking-normal opacity-70">
                [STORY_SESSION_URL pending]
              </span>
            </div>
          ) : (
            <a
              href={STORY_SESSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Book a Story Session
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
