import { MetadataRoute } from 'next'
import { fetchFeed } from '@/lib/rss'
import { SITE_URL } from '@/lib/config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let episodeUrls: MetadataRoute.Sitemap = []

  try {
    const { episodes } = await fetchFeed()
    episodeUrls = episodes.map((ep) => ({
      url: `${SITE_URL}/episodes/${ep.slug}`,
      lastModified: ep.pubDate ? new Date(ep.pubDate) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  } catch {
    // Feed unavailable at build time — sitemap will only include static pages
  }

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/episodes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/suggest`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...episodeUrls,
  ]
}
