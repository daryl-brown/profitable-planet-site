'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { PlayIcon, PauseIcon, DownloadIcon } from '@/components/ui/PlatformIcons'
import { formatPlayerTime } from '@/lib/utils'

interface AudioPlayerProps {
  audioUrl: string
  title: string
}

export function AudioPlayer({ audioUrl, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      setIsLoading(true)
      audio.play().catch(() => setIsLoading(false))
    }
  }, [isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => { setIsPlaying(true); setIsLoading(false) }
    const onPause = () => setIsPlaying(false)
    const onEnded = () => { setIsPlaying(false); setCurrentTime(0) }
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onWaiting = () => setIsLoading(true)
    const onCanPlay = () => setIsLoading(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('waiting', onWaiting)
    audio.addEventListener('canplay', onCanPlay)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('waiting', onWaiting)
      audio.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const time = parseFloat(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-warm-cream border-l-[3px] border-green p-6">
      {/* Hidden native audio element */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Play / Pause */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
          disabled={isLoading}
          style={{ minWidth: 48, minHeight: 48 }}
          className="flex items-center justify-center w-12 h-12 bg-green text-warm-white hover:bg-green-mid transition-colors disabled:opacity-60"
        >
          {isLoading ? (
            <span className="block w-5 h-5 border-2 border-warm-white/40 border-t-warm-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <PauseIcon size={20} />
          ) : (
            <PlayIcon size={20} />
          )}
        </button>

        {/* Title */}
        <p className="font-dm-sans text-sm font-medium text-ink-deep leading-snug flex-1 min-w-0 truncate">
          {title}
        </p>
      </div>

      {/* Scrub bar */}
      <div className="mb-2 relative">
        {/* Visual fill track */}
        <div
          className="absolute top-1/2 left-0 h-[4px] bg-green pointer-events-none z-10"
          style={{ width: `${progressPercent}%`, marginTop: '-2px' }}
          aria-hidden="true"
        />
        <input
          type="range"
          className="audio-scrub relative z-20"
          min={0}
          max={duration || 0}
          value={currentTime}
          step={1}
          onChange={handleSeek}
          aria-label="Seek"
        />
      </div>

      {/* Time display + download */}
      <div className="flex items-center justify-between">
        <span className="caption" aria-live="off" aria-atomic="true">
          {formatPlayerTime(currentTime)} / {formatPlayerTime(duration)}
        </span>

        <a
          href={audioUrl}
          download
          className="caption flex items-center gap-1.5 hover:text-ink-deep transition-colors"
          aria-label="Download episode audio"
        >
          <DownloadIcon size={12} />
          Download episode
        </a>
      </div>
    </div>
  )
}
