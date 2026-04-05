// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Generate a URL slug from an episode title.
 * Lowercase, hyphens, no special characters.
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')           // remove smart quotes before hyphenation
    .replace(/[^a-z0-9]+/g, '-')   // non-alphanumeric → hyphen
    .replace(/^-+|-+$/g, '')        // trim leading/trailing hyphens
    .slice(0, 100)                   // reasonable max length
}

/**
 * Format an itunes:duration value into a human-readable string.
 * RSS duration can be "HH:MM:SS", "MM:SS", or plain seconds as string or number.
 * Output: "24 min" or "1 hr 4 min"
 */
export function formatDuration(raw: string | number | undefined): string {
  if (!raw) return ''

  const str = String(raw).trim()

  let totalSeconds: number

  if (str.includes(':')) {
    const parts = str.split(':').map(Number)
    if (parts.length === 3) {
      totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2]
    } else if (parts.length === 2) {
      totalSeconds = parts[0] * 60 + parts[1]
    } else {
      return str
    }
  } else {
    totalSeconds = parseInt(str, 10)
    if (isNaN(totalSeconds)) return str
  }

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.round((totalSeconds % 3600) / 60)

  if (hours > 0) {
    return minutes > 0 ? `${hours} hr ${minutes} min` : `${hours} hr`
  }
  return `${minutes} min`
}

/**
 * Format a pubDate string (RFC 2822 from RSS) as "12 April 2026".
 */
export function formatDate(pubDate: string): string {
  if (!pubDate) return ''
  try {
    const date = new Date(pubDate)
    return date.toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return pubDate
  }
}

/**
 * Try to extract a guest name from an episode title.
 * Expects the pattern "Guest Name - Topic" or "Guest Name — Topic".
 * Returns null if the pattern is inconsistent — never guesses.
 */
export function extractGuestName(title: string): string | null {
  // Match "Something - Something else" with a dash/em-dash separator
  const match = title.match(/^(.+?)\s+[–—-]\s+.+$/)
  if (!match) return null

  const candidate = match[1].trim()

  // Reject if the candidate looks like a number, "Episode N", or is very short
  if (/^\d+$/.test(candidate)) return null
  if (/^episode\s+\d+$/i.test(candidate)) return null
  if (candidate.length < 3) return null

  // Reject if the candidate contains common non-name patterns
  if (/^(how|why|what|when|where|the|a|an)\s/i.test(candidate)) return null

  return candidate
}

/**
 * Truncate text to maxLength, breaking at a word boundary, appending ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  const trimmed = text.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(' ')
  return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed) + '…'
}

/**
 * Compose class names, filtering out falsy values.
 * Lightweight alternative to clsx for this project.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format seconds to mm:ss for the audio player time display.
 */
export function formatPlayerTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}
