import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'
import { StorySessionCTA } from '@/components/home/StorySessionCTA'

export const metadata: Metadata = {
  title: 'Suggest a Business',
  description:
    "Know a business proving that doing good and doing well aren't in conflict? Tell us about them. We read every submission.",
  alternates: { canonical: `${SITE_URL}/suggest` },
}

export default function SuggestPage() {
  return (
    <>
      <div className="bg-warm-white min-h-screen">
        {/* Header */}
        <div className="bg-warm-cream py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <Eyebrow className="mb-3">Help us find the good ones</Eyebrow>
            <Divider />
            <h1 className="mt-5">Suggest a Business</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Copy */}
            <div className="max-w-md">
              <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
                Profitable Planet exists to find the organisations proving that doing good
                and doing well aren&apos;t in conflict. The best way to find them is through
                people like you who are already close to that work.
              </p>
              <p className="text-ink-mid font-dm-sans font-light leading-relaxed mb-4">
                If you know a business — or a person — whose story deserves to be heard,
                tell us about them. We read every submission.
              </p>
              <p className="text-ink-mid font-dm-sans font-light leading-relaxed">
                If they&apos;re a good fit, Daryl will reach out directly.
              </p>
            </div>

            {/* Form */}
            <div>
              <div style={{ height: '578px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/xwJa1TBtNBBLBXwVYfoX"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                  id="inline-xwJa1TBtNBBLBXwVYfoX"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Profitable Planet Website Suggest"
                  data-height="578"
                  data-layout-iframe-id="inline-xwJa1TBtNBBLBXwVYfoX"
                  data-form-id="xwJa1TBtNBBLBXwVYfoX"
                  title="Profitable Planet Website Suggest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StorySessionCTA />
    </>
  )
}
