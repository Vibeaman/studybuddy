import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Study from './pages/Study'
import SubjectDetail from './pages/SubjectDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn/:subject" element={<SubjectDetail />} />
      <Route path="/study/:subject" element={<Study />} />
    </Routes>
  )
}

export default App
