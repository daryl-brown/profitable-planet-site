import { cn } from '@/lib/utils'
import { SpotifyIcon, ApplePodcastsIcon, YoutubeIcon } from '@/components/ui/PlatformIcons'

type Platform = 'spotify' | 'apple' | 'youtube'

interface SubscribeButtonProps {
  platform: Platform
  href: string
  /** 'full' = icon + label (hero). 'icon' = icon only (footer). 'strip' = small icon + name (episode page). */
  variant?: 'full' | 'icon' | 'strip'
  className?: string
}

const LABELS: Record<Platform, string> = {
  spotify: 'Listen on Spotify',
  apple: 'Listen on Apple Podcasts',
  youtube: 'Watch on YouTube',
}

const PLATFORM_CLASS: Record<Platform, string> = {
  spotify: 'btn-subscribe-spotify',
  apple: 'btn-subscribe-apple',
  youtube: 'btn-subscribe-youtube',
}

const ICONS: Record<Platform, React.FC<{ size?: number }>> = {
  spotify: SpotifyIcon,
  apple: ApplePodcastsIcon,
  youtube: YoutubeIcon,
}

export function SubscribeButton({
  platform,
  href,
  variant = 'full',
  className,
}: SubscribeButtonProps) {
  const Icon = ICONS[platform]
  const label = LABELS[platform]
  const isPlaceholder = href.startsWith('[')

  if (isPlaceholder) {
    // Don't render a dead link for placeholder URLs
    return null
  }

  if (variant === 'icon') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-70',
          className
        )}
      >
        <Icon size={24} />
      </a>
    )
  }

  if (variant === 'strip') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 font-dm-mono text-xs text-ink-light hover:text-ink-deep transition-colors',
          className
        )}
      >
        <Icon size={16} />
        <span>{label}</span>
      </a>
    )
  }

  // 'full' variant — hero subscribe buttons
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('btn btn-subscribe', PLATFORM_CLASS[platform], className)}
    >
      <Icon size={18} />
      <span>{label}</span>
    </a>
  )
}
