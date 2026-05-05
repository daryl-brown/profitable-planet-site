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

          <div style={{ minHeight: '400px' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/loktIy17bZWP1divYizp"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', minHeight: '400px' }}
              id="inline-loktIy17bZWP1divYizp"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Profitable Planet Subscribe"
              data-height="undefined"
              data-layout-iframe-id="inline-loktIy17bZWP1divYizp"
              data-form-id="loktIy17bZWP1divYizp"
              title="Profitable Planet Subscribe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
