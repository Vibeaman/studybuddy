// AI Service - handles both API mode and WebLLM mode

const API_URL = import.meta.env.VITE_API_URL || 'https://openrouter.ai/api/v1/chat/completions'
const API_KEY = import.meta.env.VITE_OPENROUTER_KEY || ''

// System prompt for the tutor
const SYSTEM_PROMPT = `You are StudyBuddy, a friendly and patient AI tutor powered by Gemma 4. Your goal is to help students learn effectively.

Guidelines:
- Be encouraging and supportive
- Break down complex topics into simple steps
- Use examples and analogies
- Ask follow-up questions to check understanding
- Adapt explanations to the student's level
- Keep responses concise but thorough
- Use emojis sparingly to keep things friendly 📚

When helping with problems:
1. Don't give the answer immediately
2. Guide the student through the thinking process
3. Celebrate their progress

Current subject: {subject}
`

// Check if we're in offline/WebLLM mode
export function getMode() {
  const params = new URLSearchParams(window.location.search)
  return params.get('mode') || 'api'
}

// API mode - uses OpenRouter
export async function chatWithAPI(messages, subject = 'general') {
  const systemPrompt = SYSTEM_PROMPT.replace('{subject}', subject)
  
  // Debug: check if API key is loaded
  if (!API_KEY) {
    console.error('OpenRouter API key not configured!')
    throw new Error('API key not configured. Please add VITE_OPENROUTER_KEY environment variable.')
  }
  
  console.log('Sending request to OpenRouter...')
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'StudyBuddy'
    },
    body: JSON.stringify({
      model: 'google/gemma-2-9b-it:free',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1024
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('API Error:', response.status, errorText)
    throw new Error(`API request failed: ${response.status} - ${errorText}`)
  }

  const data = await response.json()
  console.log('Response received:', data)
  return data.choices[0].message.content
}

// WebLLM mode - runs Gemma locally (for judges with beefy machines)
let webllmEngine = null

export async function initWebLLM(onProgress) {
  if (webllmEngine) return webllmEngine
  
  const { CreateMLCEngine } = await import('@mlc-ai/web-llm')
  
  webllmEngine = await CreateMLCEngine('gemma-2-2b-it-q4f16_1-MLC', {
    initProgressCallback: (progress) => {
      onProgress?.(progress)
    }
  })
  
  return webllmEngine
}

export async function chatWithWebLLM(messages, subject = 'general') {
  if (!webllmEngine) {
    throw new Error('WebLLM not initialized')
  }

  const systemPrompt = SYSTEM_PROMPT.replace('{subject}', subject)
  
  const response = await webllmEngine.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages
    ],
    temperature: 0.7,
    max_tokens: 1024
  })

  return response.choices[0].message.content
}

// Main chat function - auto-selects mode
export async function chat(messages, subject, onProgress) {
  const mode = getMode()
  
  if (mode === 'offline' || mode === 'webllm') {
    if (!webllmEngine) {
      await initWebLLM(onProgress)
    }
    return chatWithWebLLM(messages, subject)
  }
  
  return chatWithAPI(messages, subject)
}
