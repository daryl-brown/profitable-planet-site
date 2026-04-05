import Link from 'next/link'
import {
  SpotifyIcon,
  ApplePodcastsIcon,
  YoutubeIcon,
  RSSIcon,
} from '@/components/ui/PlatformIcons'
import {
  SPOTIFY_SHOW_URL,
  APPLE_PODCASTS_URL,
  YOUTUBE_CHANNEL_URL,
  RSS_FEED_URL,
  SITE_URL,
} from '@/lib/config'

const NAV_LINKS = [
  { href: '/episodes', label: 'Episodes' },
  { href: '/about', label: 'About' },
  { href: '/suggest', label: 'Suggest a Business' },
]

const PLATFORM_LINKS = [
  {
    href: SPOTIFY_SHOW_URL,
    icon: SpotifyIcon,
    label: 'Listen on Spotify',
  },
  {
    href: APPLE_PODCASTS_URL,
    icon: ApplePodcastsIcon,
    label: 'Listen on Apple Podcasts',
  },
  {
    href: YOUTUBE_CHANNEL_URL,
    icon: YoutubeIcon,
    label: 'Watch on YouTube',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green text-warm-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Wordmark + description */}
          <div>
            <p className="font-playfair text-lg font-semibold text-warm-white mb-3">
              Profitable Planet
            </p>
            <p className="text-sm text-green-light font-dm-sans font-light leading-relaxed">
              Australian businesses proving that doing good and doing well
              are the same thing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow-dark mb-4">Navigate</p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-green-light hover:text-warm-white transition-colors font-dm-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen */}
          <div>
            <p className="eyebrow-dark mb-4">Listen on</p>
            <div className="flex items-center gap-4">
              {PLATFORM_LINKS.map(({ href, icon: Icon, label }) => {
                if (href.startsWith('[')) return null
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-green-light hover:text-warm-white transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
              {/* RSS feed link for podcast apps */}
              <a
                href={RSS_FEED_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
                className="text-green-light hover:text-warm-white transition-colors"
              >
                <RSSIcon size={24} />
              </a>
            </div>
            <a
              href={RSS_FEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-text text-green-light hover:text-warm-white transition-colors mt-3 inline-block"
            >
              RSS Feed
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-mid pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="footer-text text-green-light">
            © {currentYear} Daryl Brown. All rights reserved.
          </p>
          <p className="footer-text text-green-light">
            <a
              href="https://darylbrown.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-white transition-colors"
            >
              darylbrown.com.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
