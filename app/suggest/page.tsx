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
              {/* ================================================================
                  SUGGEST FORM EMBED PLACEHOLDER
                  Replace this div with the GHL iframe or Formspree form.
                  See the homepage SuggestStrip component for context.

                  Formspree: <form action="https://formspree.io/f/[FORM_ID]" method="POST">
                  GHL:       <iframe src="https://..." width="100%" height="700" />

                  Form fields required:
                  - Your name (text, required)
                  - Your email (email, required)
                  - Business or person name (text, required)
                  - Website or LinkedIn URL (url, optional)
                  - Why should they be on the show? (textarea, optional)
                    Placeholder: "What are they doing that others aren't? What's the story worth telling?"

                  Post-submit message:
                  "Thank you. We will look into them and reach out if they're a good fit for the show."
                  ================================================================ */}
              <div
                className="border-l-[3px] border-warm-rule bg-green-pale p-6"
                role="note"
                aria-label="Suggest a business form placeholder"
              >
                <p className="eyebrow text-ink-light mb-2">Awaiting form embed</p>
                <p className="text-sm text-ink-light font-dm-sans mb-4">
                  [SUGGEST_FORM_EMBED] — Replace this div with the GHL iframe embed
                  or Formspree form.
                </p>
                <div className="space-y-2">
                  {[
                    'Your name (required)',
                    'Your email (required)',
                    'Business or person name (required)',
                    'Website or LinkedIn URL (optional)',
                    'Why should they be on the show? (textarea, optional)',
                  ].map((field) => (
                    <p key={field} className="text-xs text-ink-faint font-dm-mono">
                      · {field}
                    </p>
                  ))}
                </div>
              </div>
              {/* ================================================================ */}
            </div>
          </div>
        </div>
      </div>

      <StorySessionCTA />
    </>
  )
}
