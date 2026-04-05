import Link from 'next/link'

export default function EpisodeNotFound() {
  return (
    <div className="bg-warm-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="eyebrow mb-4">Episode not found</p>
        <h1 className="mb-6">We couldn&apos;t find that episode.</h1>
        <p className="text-ink-light mb-8 max-w-md mx-auto">
          It may have been removed, or the link might be incorrect.
        </p>
        <Link href="/episodes" className="btn btn-primary">
          Browse all episodes
        </Link>
      </div>
    </div>
  )
}
