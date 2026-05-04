# StudyBuddy 📚

> Your personal AI tutor that works anywhere, even offline.

**Built for the Gemma 4 Good Hackathon 2026**

## 🎯 The Problem

Millions of students worldwide lack access to quality education resources due to:
- Unreliable or no internet connectivity
- High costs of tutoring services
- Limited availability of teachers in rural areas

## 💡 The Solution

StudyBuddy is an offline-first AI tutor powered by **Gemma 4** that runs entirely on-device. No internet? No problem. Every student deserves a personal tutor, regardless of connectivity.

## ✨ Features

- 🧠 **Powered by Gemma 4** - State-of-the-art AI for educational assistance
- 📴 **Works Offline** - Download once, learn forever (WebLLM + Gemma 2B)
- 🎯 **Adaptive Learning** - Adjusts explanations to student's level
- 📱 **PWA** - Install on any device like a native app
- 🆓 **Free Forever** - No accounts, no subscriptions

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TailwindCSS
- **AI (Online)**: Gemma via OpenRouter API
- **AI (Offline)**: Gemma 2B via WebLLM (WebGPU)
- **PWA**: Vite PWA Plugin + Service Workers

## 🚀 Quick Start

```bash
cd client
npm install
npm run dev
```

### Environment Variables

```
VITE_OPENROUTER_KEY=your_key_here
```

### Testing Modes

- **API Mode (default)**: `http://localhost:5173`
- **Offline Mode**: `http://localhost:5173?mode=offline`

## 📦 Deployment

```bash
npm run build
# Deploy dist/ to Vercel
```

## 🏆 Hackathon Track

**Future of Education** - Reimagine the learning journey by building multi-tool agents that adapt to the individual.

## 👤 Credits

Built by **VIBÆMAN** ([@0xvibeaman](https://x.com/0xvibeaman))

---

*Every student deserves a personal tutor. StudyBuddy makes it possible.*
