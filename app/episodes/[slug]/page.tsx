import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { fetchFeed, getVideoData } from '@/lib/rss'
import { SITE_URL } from '@/lib/config'
import { truncate } from '@/lib/utils'

import { Breadcrumb } from '@/components/episode/Breadcrumb'
import { EpisodeHeader } from '@/components/episode/EpisodeHeader'
import { PlayerBlock } from '@/components/episode/PlayerBlock'
import { ListenElsewhere } from '@/components/episode/ListenElsewhere'
import { ShowNotes } from '@/components/episode/ShowNotes'
import { ShareStrip } from '@/components/episode/ShareStrip'
import { StorySessionCTA } from '@/components/home/StorySessionCTA'
import { MoreEpisodes } from '@/components/episode/MoreEpisodes'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const { episodes } = await fetchFeed()
    return episodes.map((ep) => ({ slug: ep.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { show, episodes } = await fetchFeed()
  const episode = episodes.find((ep) => ep.slug === slug)

  if (!episode) {
    return { title: 'Episode not found' }
  }

  const description = truncate(episode.shortDescription || show.description, 160)
  const image = episode.artwork || show.artwork
  const canonicalUrl = `${SITE_URL}/episodes/${slug}`

  return {
    title: episode.title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${episode.title} - Profitable Planet`,
      description,
      url: canonicalUrl,
      type: 'article',
      ...(image && { images: [{ url: image, width: 1400, height: 1400 }] }),
    },
  }
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params
  const { show, episodes } = await fetchFeed()
  const episode = episodes.find((ep) => ep.slug === slug)

  if (!episode) {
    notFound()
  }

  const videoData = getVideoData(slug)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: episode.title,
    datePublished: episode.pubDate
      ? new Date(episode.pubDate).toISOString().split('T')[0]
      : undefined,
    description: episode.shortDescription,
    url: `${SITE_URL}/episodes/${slug}`,
    ...(episode.artwork && {
      image: episode.artwork,
    }),
    ...(episode.audioUrl && {
      associatedMedia: {
        '@type': 'MediaObject',
        contentUrl: episode.audioUrl,
        encodingFormat: 'audio/mpeg',
      },
    }),
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: show.title,
      url: SITE_URL,
    },
    ...(episode.episodeNumber !== null && {
      episodeNumber: episode.episodeNumber,
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-warm-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb episodeTitle={episode.title} />
          <EpisodeHeader episode={episode} show={show} />
        </div>

        {/* Player — slightly wider container */}
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <PlayerBlock episode={episode} videoData={videoData} />
          <ListenElsewhere />
          <ShowNotes content={episode.fullContent} />
          <ShareStrip episodeSlug={episode.slug} episodeTitle={episode.title} />
        </div>
      </div>

      <StorySessionCTA />

      <div className="bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <MoreEpisodes episodes={episodes} currentSlug={slug} />
        </div>
      </div>
    </>
  )
}
