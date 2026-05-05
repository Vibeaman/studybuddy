import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeroIllustration from '../components/HeroIllustration'
import SecondIllustration from '../components/SecondIllustration'

// Feature data
const features = [
  {
    icon: '🎓',
    title: 'Personal AI Tutor',
    desc: 'Get instant, personalized help with any subject, any time you need it.'
  },
  {
    icon: '📝',
    title: 'Smart Flashcard Creator',
    desc: 'Transform any content into effective flashcards for optimal retention.'
  },
  {
    icon: '📋',
    title: 'Comprehensive Notes',
    desc: 'Transform any content into well-organized, easy-to-review notes.'
  },
  {
    icon: '✨',
    title: 'Adaptive Quiz Builder',
    desc: 'Test your understanding with AI-generated practice questions.'
  }
]

const learnFeatures = [
  {
    icon: '💡',
    title: 'Smart Teaching Methods',
    desc: 'Transform complex topics into clear, digestible content with AI-powered tools.',
    slug: 'smart-teaching'
  },
  {
    icon: '📈',
    title: 'Adapts to Your Expertise',
    desc: 'Great for students looking to ace their exams, or experts keeping up with research.',
    slug: 'adaptive-learning'
  },
  {
    icon: '📴',
    title: 'Works Offline',
    desc: 'Download once, learn forever. No internet required after initial setup.',
    slug: 'offline-mode'
  }
]

export default function Home() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Status indicator */}
      <div className={`fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 ${
        isOnline ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
      }`}>
        <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-amber-500'}`}></span>
        {isOnline ? 'Online' : 'Offline'}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        {/* Blue blob background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Illustration */}
          <HeroIllustration />

          <p className="section-label">Experience the future of education</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Learning
          </h1>
          <p className="section-desc max-w-2xl mx-auto mb-8">
            AI learning tools will help you learn faster, remember longer, and understand better.
            <span className="text-blue-500 font-semibold"> Works offline</span> - no internet required.
          </p>

          <Link to="/study/general" className="btn-primary inline-block text-lg">
            Start Learning →
          </Link>
          
          <p className="mt-4 text-gray-500 text-sm">
            No account needed. Free forever.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 p-4">
                <div className="feature-icon shrink-0">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="relative overflow-hidden px-6 py-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <SecondIllustration />

          <p className="section-label">StudyBuddy can help you</p>
          <h2 className="section-title">Learn Faster and Better</h2>
          <p className="section-desc max-w-xl mx-auto">
            Master any field, from quantum physics to world history, with personalized guidance.
          </p>
        </div>
      </section>

      {/* Learn Features */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {learnFeatures.map((feature, i) => (
            <div key={i} className="flex gap-4 p-4 mb-4">
              <div className="feature-icon shrink-0">
                <span className="text-xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
                <Link to={`/learn/${feature.slug}`} className="text-blue-500 font-medium text-sm hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Ready to dive in?</h2>
          <p className="text-blue-100 text-xl mb-6">Try it out for free!</p>
          <Link to="/study/general" className="btn-secondary inline-block">
            Get started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <p className="text-gray-500 text-sm">
          Study Buddy AI — Copyright 2026
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Built for Gemma 4 Good Hackathon by <a href="https://x.com/0xvibeaman" className="text-blue-500 hover:underline">VIBÆMAN</a>
        </p>
      </footer>
    </div>
  )
}
