'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useEffect, useState } from 'react'

interface Video {
  snippet: {
    resourceId: {
      videoId: string
    }
    title: string
    description: string
  }
}

export default function PodcastPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!
  const PLAYLIST_ID = 'PLy8vFc0kw4jAvYcLXngH8RWIebCnQKguc'

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        )
        const data = await res.json()
        console.log('🔎 YouTube API Response:', data)

        if (!data.items) {
          console.error('❌ Fant ingen videoer. Respons:', data)
          setLoading(false)
          return
        }

        setVideos(data.items)
      } catch (error) {
        console.error('❌ Feil ved henting av videoer:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  return (
    <main className="min-h-screen p-8 bg-white">
      <Breadcrumbs paths={[{ name: 'Hjem', href: '/' }, { name: 'Podcast' }]} />
      <h1 className="text-3xl font-bold mb-12 text-center text-gray-800">Podcaster</h1>

      {loading && <p className="text-center text-gray-500">Laster inn videoer...</p>}

      {!loading && videos.length === 0 && (
        <p className="text-center text-red-500">Fant ingen videoer fra spillelisten.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videos.map((video, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-xl shadow">
            <iframe
              className="w-full aspect-video rounded"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              allowFullScreen
            />
            <h2 className="text-lg font-semibold mt-4 text-blue-700">
              {video.snippet.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {video.snippet.description.slice(0, 120)}...
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}