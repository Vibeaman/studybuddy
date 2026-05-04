import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [modelReady, setModelReady] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    // Check if model is cached
    if ('caches' in window) {
      caches.has('gemma-model').then(setModelReady)
    }
    
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Status bar */}
      <div className={`px-4 py-2 text-center text-sm font-medium ${
        isOnline ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
      }`}>
        {isOnline ? '🟢 Online' : '🟡 Offline Mode'}
        {modelReady && ' • AI Model Ready'}
      </div>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-primary-500/30">
              📚
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            StudyBuddy
          </h1>
          
          <p className="text-xl text-white/60 mb-8">
            Your personal AI tutor that works <span className="text-primary-400 font-semibold">anywhere</span>, 
            even without internet.
          </p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="glass rounded-2xl p-4">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm text-white/80">Powered by Gemma 4</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-2xl mb-2">📴</div>
              <div className="text-sm text-white/80">Works Offline</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm text-white/80">Adaptive Learning</div>
            </div>
          </div>

          {/* CTA */}
          <Link to="/subjects" className="btn-primary inline-block text-lg px-8 py-4">
            Start Learning →
          </Link>

          {/* Subtitle */}
          <p className="mt-6 text-white/40 text-sm">
            No account needed. Free forever.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-white/30 text-sm">
        Built for Gemma 4 Good Hackathon 2026
        <br />
        <span className="text-white/50">by VIBÆMAN</span>
      </footer>
    </div>
  )
}
