interface ShowNotesProps {
  /** Pre-sanitised HTML string from content:encoded */
  content: string
}

/**
 * Renders sanitised show notes HTML.
 * Sanitisation happens in lib/rss.ts at parse time — not here.
 * Brand typography is applied via the .show-notes CSS class in globals.css.
 */
export function ShowNotes({ content }: ShowNotesProps) {
  if (!content) return null

  return (
    <section aria-label="Show notes" className="py-10 max-w-2xl">
      <h2 className="text-xl mb-6 font-dm-sans font-medium text-ink-deep">Show notes</h2>
      <div
        className="show-notes"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}
