import { findRelevantVideos, getThumbnailUrl, getWatchUrl } from '../services/youtube'

export default function VideoSuggestions({ query }) {
  const videos = findRelevantVideos(query)
  
  if (videos.length === 0) return null
  
  return (
    <div className="mt-4 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-red-500 text-lg">▶️</span>
        <h3 className="font-semibold text-gray-900 text-sm">Recommended Videos</h3>
      </div>
      
      <div className="space-y-3">
        {videos.map((video) => (
          <a
            key={video.videoId}
            href={getWatchUrl(video.videoId)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors group"
          >
            {/* Thumbnail */}
            <div className="relative w-28 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-200">
              <img 
                src={getThumbnailUrl(video.videoId)} 
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                {video.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span>{video.tutor.avatar}</span>
                {video.tutor.name}
              </p>
            </div>
          </a>
        ))}
      </div>
      
      <p className="text-xs text-gray-400 mt-3 text-center">
        Videos by The Organic Chemistry Tutor
      </p>
    </div>
  )
}
