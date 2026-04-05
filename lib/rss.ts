import { XMLParser } from 'fast-xml-parser'
import sanitizeHtml from 'sanitize-html'
import { RSS_FEED_URL } from './config'
import { generateSlug, extractGuestName, truncate } from './utils'
import type { Episode, ShowMeta, FeedData } from './types'

// ============================================================
// XML PARSER CONFIGURATION
// attributeNamePrefix '@_' avoids collisions with element names.
// isArray ensures item is always an array even with one episode.
// ============================================================
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  parseAttributeValue: false,  // keep values as strings for safety
  allowBooleanAttributes: true,
  isArray: (name) => name === 'item',
})

// ============================================================
// SANITIZE-HTML CONFIG
// Permits rich show-note markup but strips scripts and iframes.
// ============================================================
const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    'h2', 'h3', 'h4', 'p', 'br', 'strong', 'em', 'b', 'i',
    'ul', 'ol', 'li', 'blockquote', 'a', 'hr',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'noopener noreferrer' }),
  },
}

// ============================================================
// MAIN FETCH FUNCTION
// Called from server components. Revalidates every hour.
// Falls back to empty feed on error so the build never crashes.
// ============================================================
export async function fetchFeed(): Promise<FeedData> {
  try {
    const res = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`RSS fetch returned ${res.status}`)
    }

    const xml = await res.text()
    return parseFeed(xml)
  } catch (error) {
    console.warn('[rss] Feed fetch failed, returning empty feed:', error)
    return {
      show: {
        title: 'Profitable Planet',
        description:
          'Australian businesses proving that doing good and doing well are the same thing.',
        artwork: '',
        link: 'https://profitableplanet.com.au',
        author: 'Daryl Brown',
      },
      episodes: [],
    }
  }
}

// ============================================================
// PARSER
// ============================================================
export function parseFeed(xml: string): FeedData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsed: any = parser.parse(xml)
  const channel = parsed?.rss?.channel ?? parsed?.feed ?? {}

  const show: ShowMeta = {
    title: channel.title ?? 'Profitable Planet',
    description: channel.description ?? channel['itunes:summary'] ?? '',
    artwork:
      channel['itunes:image']?.['@_href'] ??
      channel.image?.url ??
      '',
    link: channel.link ?? '',
    author: channel['itunes:author'] ?? channel['managingEditor'] ?? 'Daryl Brown',
  }

  const showArtwork = show.artwork

  const rawItems: RawItem[] = Array.isArray(channel.item)
    ? channel.item
    : channel.item
    ? [channel.item]
    : []

  const episodes: Episode[] = rawItems
    .map((item) => parseItem(item, showArtwork))
    .filter((ep): ep is Episode => ep !== null)

  return { show, episodes }
}

// ============================================================
// EPISODE PARSER
// ============================================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawItem = Record<string, any>

function parseItem(item: RawItem, showArtwork: string): Episode | null {
  try {
    const title: string = String(item.title ?? '').trim()
    if (!title) return null

    const slug = generateSlug(title)
    if (!slug) return null

    const pubDate: string = item.pubDate ?? item['dc:date'] ?? ''

    const duration: string = String(
      item['itunes:duration'] ?? ''
    ).trim()

    const episodeNumber = item['itunes:episode']
      ? parseInt(String(item['itunes:episode']), 10)
      : null

    const season = item['itunes:season']
      ? parseInt(String(item['itunes:season']), 10)
      : null

    // Short description: prefer itunes:subtitle, then truncated description
    const rawDescription: string = String(
      item.description ?? item['itunes:summary'] ?? ''
    )
    const subtitle: string = String(item['itunes:subtitle'] ?? '').trim()
    const shortDescription = subtitle || truncate(stripHtml(rawDescription), 160)

    // Full show notes: content:encoded, with HTML sanitisation
    const rawContent: string = String(
      item['content:encoded'] ?? item.description ?? ''
    )
    const fullContent = sanitizeHtml(rawContent, SANITIZE_OPTIONS)

    // Audio URL from enclosure
    const audioUrl: string =
      item.enclosure?.['@_url'] ??
      item.enclosure?.url ??
      ''

    // Episode artwork falls back to show artwork
    const artwork: string =
      item['itunes:image']?.['@_href'] ??
      item['itunes:image'] ??
      showArtwork

    const guestName = extractGuestName(title)

    return {
      slug,
      title,
      pubDate,
      duration,
      episodeNumber: isNaN(episodeNumber as number) ? null : episodeNumber,
      season: isNaN(season as number) ? null : season,
      shortDescription,
      fullContent,
      audioUrl,
      artwork,
      guestName,
    }
  } catch {
    return null
  }
}

// ============================================================
// HELPERS
// ============================================================

/** Strip HTML tags for plain-text truncation of description */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Merge video config into episodes.
 * Called in page components after fetchFeed().
 */
export function getVideoData(slug: string): { youtubeUrl: string; youtubeEmbedId: string } | null {
  // Dynamically imported so the JSON is read at request time (not build-cached)
  // This is intentional: Daryl can push new video entries without a full rebuild.
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const videoMap = require('@/data/episodes-video.json') as Record<
      string,
      { youtubeUrl: string; youtubeEmbedId: string }
    >
    return videoMap[slug] ?? null
  } catch {
    return null
  }
}
