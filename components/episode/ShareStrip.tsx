'use client'

import { useState } from 'react'
import { LinkedInIcon, CopyIcon } from '@/components/ui/PlatformIcons'
import { SITE_URL } from '@/lib/config'

interface ShareStripProps {
  episodeSlug: string
  episodeTitle: string
}

/** LinkedIn share + copy link. Two buttons only. */
export function ShareStrip({ episodeSlug, episodeTitle }: ShareStripProps) {
  const [copied, setCopied] = useState(false)
  const episodeUrl = `${SITE_URL}/episodes/${episodeSlug}`

  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(episodeUrl)}&title=${encodeURIComponent(episodeTitle)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(episodeUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without clipboard API
      const input = document.createElement('input')
      input.value = episodeUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="py-8 border-t border-warm-rule">
      <p className="eyebrow mb-4">Share this episode</p>
      <div className="flex items-center gap-3">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex items-center gap-2 text-sm py-2.5 px-4"
        >
          <LinkedInIcon size={16} />
          Share on LinkedIn
        </a>

        <button
          onClick={handleCopy}
          className="btn border border-warm-rule text-ink-mid hover:border-green hover:text-green transition-colors text-sm py-2.5 px-4 flex items-center gap-2"
        >
          <CopyIcon size={14} />
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>
    </div>
  )
}
