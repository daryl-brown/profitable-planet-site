import { AudioPlayer } from './AudioPlayer'
import { YouTubeEmbed } from './YouTubeEmbed'
import type { Episode } from '@/lib/types'
import type { VideoData } from '@/lib/types'

interface PlayerBlockProps {
  episode: Episode
  videoData: VideoData | null
}

/**
 * Decides which player(s) to render.
 *
 * If videoData exists:
 *   - YouTube embed as primary player
 *   - Audio player below as "audio only" option
 *
 * Otherwise:
 *   - Audio player only
 */
export function PlayerBlock({ episode, videoData }: PlayerBlockProps) {
  return (
    <div className="space-y-6">
      {videoData ? (
        <>
          <YouTubeEmbed
            embedId={videoData.youtubeEmbedId}
            youtubeUrl={videoData.youtubeUrl}
            artworkUrl={episode.artwork}
            title={episode.title}
          />
          <div>
            <p className="eyebrow mb-3">Audio only</p>
            <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
          </div>
        </>
      ) : (
        <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
      )}
    </div>
  )
}
