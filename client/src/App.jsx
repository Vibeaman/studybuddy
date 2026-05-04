import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Study from './pages/Study'
import Subjects from './pages/Subjects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/study/:subject" element={<Study />} />
      </Routes>
    </div>
  )
}

export default App
