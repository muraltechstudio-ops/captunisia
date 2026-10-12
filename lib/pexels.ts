interface PexelsVideo {
  id: number
  video_files: {
    id: number
    quality: string
    file_type: string
    width: number
    height: number
    link: string
  }[]
}

interface PexelsResponse {
  videos: PexelsVideo[]
}

export async function fetchPexelsVideos(query: string, perPage: number = 1): Promise<string[]> {
  const apiKey = process.env.PEXELS_API_KEY

  if (!apiKey) {
    console.warn('PEXELS_API_KEY not found, returning fallback image')
    return []
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      {
        headers: {
          Authorization: apiKey,
        },
        next: { revalidate: 86400 }, // Cache for 24 hours
      }
    )

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`)
    }

    const data: PexelsResponse = await response.json()

    return data.videos
      .map(video => {
        // Find HD or best quality video file
        const hdVideo = video.video_files.find(file =>
          file.quality === 'hd' && file.width <= 1920
        ) || video.video_files[0]
        return hdVideo?.link
      })
      .filter(Boolean) as string[]
  } catch (error) {
    console.error('Error fetching Pexels videos:', error)
    return []
  }
}

export async function getHeroVideos(): Promise<string[]> {
  const queries = [
    'tunisia beach',
    'mediterranean villa',
    'luxury pool',
    'coastal city aerial'
  ]

  const videoPromises = queries.map(query => fetchPexelsVideos(query, 1))
  const results = await Promise.all(videoPromises)

  return results.flat().filter(Boolean)
}
