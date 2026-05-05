// ============================================================
// SITE CONFIG
// All placeholder values use [PLACEHOLDER_NAME] convention.
// Swap real values in .env.local (not committed) or Vercel dashboard.
// ============================================================

export const SITE_URL = 'https://profitableplanet.com.au'

// RSS feed — server-side only (no NEXT_PUBLIC_ prefix)
// Placeholder: Planet Money (reliable public feed for development)
export const RSS_FEED_URL =
  process.env.RSS_FEED_URL || 'https://anchor.fm/s/11209438c/podcast/rss'

// Platform URLs — public, used in client components
export const SPOTIFY_SHOW_URL =
  process.env.NEXT_PUBLIC_SPOTIFY_SHOW_URL ||
  'https://open.spotify.com/show/4GJynQGZQQaoZ5FOYxbN6U?si=WDSyVieJSLms03UwCMlqCg'

export const APPLE_PODCASTS_URL =
  process.env.NEXT_PUBLIC_APPLE_PODCASTS_URL ||
  'https://podcasts.apple.com/us/podcast/profitable-planet/id1896283110'

export const YOUTUBE_CHANNEL_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ||
  'https://youtube.com/@profitableplanetpodcast?si=LPuN0X76DXUCsjEc'

// Story Session booking URL (on darylbrown.com.au)
export const STORY_SESSION_URL =
  process.env.NEXT_PUBLIC_STORY_SESSION_URL || 'https://darylbrown.com.au/storysession'
