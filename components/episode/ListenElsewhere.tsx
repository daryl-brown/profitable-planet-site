import { SubscribeButton } from '@/components/ui/SubscribeButton'
import {
  SPOTIFY_SHOW_URL,
  APPLE_PODCASTS_URL,
  YOUTUBE_CHANNEL_URL,
} from '@/lib/config'

/** Small strip below the player. "Also available on Spotify / Apple / YouTube." */
export function ListenElsewhere() {
  return (
    <div className="py-6 border-t border-b border-warm-rule flex flex-wrap items-center gap-4">
      <span className="caption">Also available on</span>
      <div className="flex flex-wrap items-center gap-4">
        <SubscribeButton platform="spotify" href={SPOTIFY_SHOW_URL} variant="strip" />
        <SubscribeButton platform="apple" href={APPLE_PODCASTS_URL} variant="strip" />
        <SubscribeButton platform="youtube" href={YOUTUBE_CHANNEL_URL} variant="strip" />
      </div>
    </div>
  )
}
