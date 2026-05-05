import { Eyebrow } from '@/components/ui/Eyebrow'
import { Divider } from '@/components/ui/Divider'

/**
 * Suggest a business section — GHL form embed (or Formspree fallback).
 *
 * TO ACTIVATE:
 * Replace the placeholder div with the GHL or Formspree embed code Daryl provides.
 *
 * Formspree example:
 *   <form action="https://formspree.io/f/[FORM_ID]" method="POST">...</form>
 *
 * GHL example:
 *   <iframe src="https://..." width="100%" height="700" frameborder="0" />
 *
 * Once replaced, delete this comment block.
 */
export function SuggestStrip() {
  return (
    <section className="bg-warm-cream py-16 md:py-20" id="suggest">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Copy */}
          <div>
            <Eyebrow className="mb-3">Help us find the good ones</Eyebrow>
            <Divider />
            <h2 className="mt-5 mb-4">
              Know a business that should be on this show?
            </h2>
            <p className="text-ink-mid font-dm-sans font-light leading-relaxed">
              Profitable Planet exists to find the organisations proving that doing good
              and doing well aren&apos;t in conflict. The best way to find them is through
              people like you who are already close to that work.
            </p>
            <p className="mt-4 text-ink-mid font-dm-sans font-light leading-relaxed">
              If you know a business — or a person — whose story deserves to be heard,
              tell us about them. We read every submission.
            </p>
          </div>

          {/* Form embed */}
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
    </section>
  )
}
