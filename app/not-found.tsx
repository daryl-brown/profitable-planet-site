import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-warm-white min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center py-24">
        <p className="eyebrow mb-4">Page not found</p>
        <h1 className="mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
          Nothing here.
        </h1>
        <p className="text-ink-light font-dm-sans font-light mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  )
}
