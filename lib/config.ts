// ============================================================
// SITE CONFIG
// All placeholder values use [PLACEHOLDER_NAME] convention.
// Swap real values in .env.local (not committed) or Vercel dashboard.
// ============================================================

export const SITE_URL = 'https://profitableplanet.com.au'

// RSS feed — server-side only (no NEXT_PUBLIC_ prefix)
// Placeholder: Planet Money (reliable public feed for development)
export const RSS_FEED_URL =
  process.env.RSS_FEED_URL || 'https://feeds.npr.org/510289/podcast.xml'

// Platform URLs — public, used in client components
export const SPOTIFY_SHOW_URL =
  process.env.NEXT_PUBLIC_SPOTIFY_SHOW_URL || '[SPOTIFY_SHOW_URL]'

export const APPLE_PODCASTS_URL =
  process.env.NEXT_PUBLIC_APPLE_PODCASTS_URL || '[APPLE_PODCASTS_URL]'

export const YOUTUBE_CHANNEL_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || '[YOUTUBE_CHANNEL_URL]'

// Story Session booking URL (on darylbrown.com.au)
export const STORY_SESSION_URL =
  process.env.NEXT_PUBLIC_STORY_SESSION_URL || '[STORY_SESSION_URL]'
