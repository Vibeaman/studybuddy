import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { chat, getMode, initWebLLM } from '../services/ai'

const subjectInfo = {
  math: { name: 'Mathematics', emoji: '🔢' },
  science: { name: 'Science', emoji: '🔬' },
  english: { name: 'English', emoji: '📝' },
  history: { name: 'History', emoji: '🏛️' },
  coding: { name: 'Coding', emoji: '💻' },
  general: { name: 'Ask Anything', emoji: '💡' }
}

export default function Study() {
  const { subject } = useParams()
  const info = subjectInfo[subject] || subjectInfo.general
  
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [modelStatus, setModelStatus] = useState('')
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
      content: `Hey! 👋 I'm StudyBuddy, your AI tutor for ${info.name}. What would you like to learn about today? Feel free to ask me anything!`
    }
    setMessages([welcome])
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

    const userMessage = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const chatHistory = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }))
      
      const response = await chat(chatHistory, subject)
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I couldn't process that. Please try again!" 
      }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass border-b border-white/10 px-4 py-3 flex items-center gap-4">
        <Link to="/subjects" className="text-white/60 hover:text-white">
          ←
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{info.emoji}</span>
          <div>
            <h1 className="font-semibold">{info.name}</h1>
            <p className="text-xs text-white/40">
              {mode === 'api' ? 'Online Mode' : modelStatus || 'Offline Mode'}
            </p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div className={msg.role === 'user' ? 'bubble-user' : 'bubble-ai'}>
              {msg.content}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bubble-ai">
              <div className="typing-indicator">
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
      <form onSubmit={handleSubmit} className="p-4 glass border-t border-white/10">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="input flex-1"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="btn-primary px-6"
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
