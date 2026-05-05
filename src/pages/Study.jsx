import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { chat, getMode, initWebLLM } from '../services/ai'
import VideoSuggestions from '../components/VideoSuggestions'

const subjectInfo = {
  math: { name: 'Mathematics', emoji: '🔢', bg: 'from-blue-500 to-indigo-600' },
  science: { name: 'Science', emoji: '🔬', bg: 'from-green-500 to-teal-600' },
  english: { name: 'English', emoji: '📝', bg: 'from-purple-500 to-pink-600' },
  history: { name: 'History', emoji: '🏛️', bg: 'from-amber-500 to-orange-600' },
  coding: { name: 'Coding', emoji: '💻', bg: 'from-cyan-500 to-blue-600' },
  general: { name: 'StudyBuddy', emoji: '📚', bg: 'from-blue-500 to-purple-600' }
}

export default function Study() {
  const { subject } = useParams()
  const info = subjectInfo[subject] || subjectInfo.general
  
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [modelStatus, setModelStatus] = useState('')
  const [lastQuery, setLastQuery] = useState('') // Track last user query for video suggestions
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const mode = getMode()

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Welcome message
  useEffect(() => {
    const welcome = {
      role: 'assistant',
      content: `Hey! 👋 I'm StudyBuddy, your personal AI tutor. I'm here to help you learn ${info.name === 'StudyBuddy' ? 'anything you want' : info.name}!\n\nAsk me any question, and I'll guide you through it step by step. What would you like to learn today?`
    }
    setMessages([welcome])
    setLastQuery('')
  }, [subject])

  // Initialize WebLLM if in offline mode
  useEffect(() => {
    if (mode === 'offline' || mode === 'webllm') {
      setModelStatus('Loading AI model...')
      initWebLLM((progress) => {
        setModelStatus(`Loading: ${Math.round(progress.progress * 100)}%`)
      }).then(() => {
        setModelStatus('AI Ready (Offline)')
      }).catch((err) => {
        setModelStatus('Failed to load model')
        console.error(err)
      })
    }
  }, [mode])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userQuery = input.trim()
    const userMessage = { role: 'user', content: userQuery }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)
    setLastQuery(userQuery) // Store query for video suggestions

    try {
      const chatHistory = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }))
      
      const response = await chat(chatHistory, subject)
      
      setMessages(prev => [...prev, { role: 'assistant', content: response, showVideos: true }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I couldn't process that. Please try again!",
        showVideos: false
      }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${info.bg}`}>
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Header */}
      <header className="backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-white/80 hover:text-white text-xl">
          ←
        </Link>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xl">{info.emoji}</span>
          </div>
          <div>
            <h1 className="font-semibold text-white">{info.name}</h1>
            <p className="text-xs text-white/60">
              {mode === 'api' ? 'Online • Powered by Gemma 4' : modelStatus || 'Offline Mode'}
            </p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i}>
            <div className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
            
            {/* Show video suggestions after AI response if relevant */}
            {msg.role === 'assistant' && msg.showVideos && lastQuery && (
              <div className="mt-3 max-w-[85%]">
                <VideoSuggestions query={lastQuery} />
              </div>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="chat-bubble-ai">
              <div className="typing-indicator py-1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </main>

      {/* Input */}
      <form onSubmit={handleSubmit} className="chat-input-container p-4">
        <div className="flex gap-3 max-w-3xl mx-auto">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="chat-input flex-1"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || !input.trim()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
