import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.megaphone.fm' },
      { protocol: 'https', hostname: '**.simplecastcdn.com' },
      { protocol: 'https', hostname: '**.podtrac.com' },
      { protocol: 'https', hostname: '**.anchor.fm' },
      { protocol: 'https', hostname: '**.spotifycdn.com' },
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: '**.npr.org' },
      { protocol: 'https', hostname: '**.buzzsprout.com' },
      { protocol: 'https', hostname: '**.libsyn.com' },
      { protocol: 'https', hostname: 'assets.cdn.filesafe.space' },
    ],
  },
}

export default nextConfig
