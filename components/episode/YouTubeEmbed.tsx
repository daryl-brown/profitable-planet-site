'use client'

import { useState } from 'react'
import { PlayIcon, ExternalLinkIcon } from '@/components/ui/PlatformIcons'

interface YouTubeEmbedProps {
  embedId: string
  youtubeUrl: string
  artworkUrl: string
  title: string
}

/**
 * Lazy-loading YouTube embed.
 *
 * Shows the episode artwork with a play overlay until the user clicks.
 * Only loads the iframe (and YouTube JS) on interaction — avoids tracking
 * visitors who never actively choose to watch.
 */
export function YouTubeEmbed({ embedId, youtubeUrl, artworkUrl, title }: YouTubeEmbedProps) {
  const [isActive, setIsActive] = useState(false)

  const embedUrl = `https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1&autoplay=1`

  return (
    <div>
      {/* Eyebrow label */}
      <div className="flex items-center gap-2 mb-2">
        <p className="eyebrow">Watch on YouTube</p>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-faint hover:text-ink-light transition-colors"
          aria-label="Open on YouTube"
        >
          <ExternalLinkIcon size={12} />
        </a>
      </div>

      {/* 16:9 responsive wrapper */}
      <div className="video-wrapper bg-ink-deep">
        {isActive ? (
          <iframe
            className="video-poster"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // Poster: artwork + play button overlay
          <button
            className="video-poster w-full h-full relative overflow-hidden group"
            onClick={() => setIsActive(true)}
            aria-label={`Play video: ${title}`}
          >
            {/* Artwork */}
            {artworkUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={artworkUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-ink-deep" />
            )}

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 bg-youtube flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#FF0000' }}
              >
                <PlayIcon size={28} className="text-white ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
