export interface ShowMeta {
  title: string
  description: string
  artwork: string
  link: string
  author: string
}

export interface Episode {
  slug: string
  title: string
  pubDate: string        // ISO date string e.g. "2026-04-05T00:00:00.000Z"
  duration: string       // raw value from itunes:duration e.g. "1456" or "24:16"
  episodeNumber: number | null
  season: number | null
  shortDescription: string  // itunes:subtitle or first 160 chars of description
  fullContent: string        // sanitised HTML from content:encoded
  audioUrl: string
  artwork: string            // episode artwork; falls back to show artwork at parse time
  guestName: string | null   // parsed from title if pattern "Guest - Topic" is consistent
}

export interface VideoData {
  youtubeUrl: string
  youtubeEmbedId: string
}

export type EpisodesVideoMap = Record<string, VideoData>

export interface FeedData {
  show: ShowMeta
  episodes: Episode[]
}
