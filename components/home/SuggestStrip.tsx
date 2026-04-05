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
            {/* ================================================================
                SUGGEST FORM EMBED PLACEHOLDER
                Replace the div below with the GHL iframe embed or Formspree form.
                ================================================================ */}
            <div
              className="border-l-[3px] border-warm-rule bg-warm-white p-6"
              role="note"
              aria-label="Suggest a business form placeholder"
            >
              <p className="eyebrow text-ink-light mb-2">Awaiting form embed</p>
              <p className="text-sm text-ink-light font-dm-sans mb-4">
                [SUGGEST_FORM_EMBED] — Replace this div with the GHL iframe embed
                or Formspree form. Daryl to confirm which.
              </p>
              <p className="text-xs text-ink-faint font-dm-mono">
                Form fields: Your name (required) · Your email (required) ·
                Business or person name (required) · Website or LinkedIn URL (optional) ·
                Why should they be on the show? (textarea, optional)
              </p>
            </div>
            {/* ================================================================ */}
          </div>
        </div>
      </div>
    </section>
  )
}
