// Vercel Serverless Function - proxies requests to OpenRouter

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const API_KEY = process.env.OPENROUTER_KEY
  
  if (!API_KEY) {
    console.error('OPENROUTER_KEY not configured')
    return res.status(500).json({ error: 'API key not configured' })
  }

  try {
    const { messages, subject } = req.body
    
    const systemPrompt = `You are StudyBuddy, a friendly and patient AI tutor powered by Gemma 4. Your goal is to help students learn effectively.

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

Current subject: ${subject || 'general'}`

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': 'https://studybuddy-zeta.vercel.app',
        'X-Title': 'StudyBuddy'
      },
      body: JSON.stringify({
        model: 'google/gemma-4-31b-it:free',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error('OpenRouter error:', data)
      return res.status(response.status).json({ error: data.error?.message || 'API error' })
    }

    return res.status(200).json({
      content: data.choices[0].message.content
    })
  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}
