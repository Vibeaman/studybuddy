import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Study from './pages/Study'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/study/:subject" element={<Study />} />
    </Routes>
  )
}

export default App
