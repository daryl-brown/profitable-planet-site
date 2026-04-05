import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'

/**
 * Email signup section — GHL iframe embed.
 *
 * TO ACTIVATE:
 * Replace the placeholder div below with the GHL embed code Daryl provides.
 * The GHL form should tag subscribers as `podcast-listener`.
 *
 * Example GHL embed format:
 *   <iframe src="https://..." width="100%" height="500" frameborder="0" />
 *
 * Once replaced, delete this comment block.
 */
export function EmailSignup() {
  return (
    <section className="bg-warm-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <Eyebrow className="mb-3">Stay in the loop</Eyebrow>
          <Divider />
          <h2 className="mt-5 mb-4">New episodes, straight to your inbox</h2>
          <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-8">
            Each time a new episode drops, we&apos;ll send you a short note — who the guest is,
            what the conversation is about, and why it&apos;s worth your time. That&apos;s it.
            No noise.
          </p>

          {/* ================================================================
              GHL EMBED PLACEHOLDER
              Replace the div below with the GHL iframe embed code.
              Tag: podcast-listener
              ================================================================ */}
          <div
            className="border-l-[3px] border-warm-rule bg-green-pale p-6"
            role="note"
            aria-label="Email signup form placeholder"
          >
            <p className="eyebrow text-ink-light mb-2">Awaiting embed code</p>
            <p className="text-sm text-ink-light font-dm-sans">
              [GHL_EMAIL_FORM_EMBED] — Replace this div with the GHL iframe embed
              from Daryl&apos;s account. The form should tag new subscribers as{' '}
              <code className="font-dm-mono text-xs bg-warm-cream px-1 py-0.5">
                podcast-listener
              </code>
              .
            </p>
          </div>
          {/* ================================================================ */}
        </div>
      </div>
    </section>
  )
}
