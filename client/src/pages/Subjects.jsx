import { Link } from 'react-router-dom'

const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    emoji: '🔢',
    color: 'from-blue-500 to-blue-600',
    topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
  },
  {
    id: 'science',
    name: 'Science',
    emoji: '🔬',
    color: 'from-green-500 to-green-600',
    topics: ['Physics', 'Chemistry', 'Biology', 'Earth Science']
  },
  {
    id: 'english',
    name: 'English',
    emoji: '📝',
    color: 'from-purple-500 to-purple-600',
    topics: ['Grammar', 'Writing', 'Reading', 'Vocabulary']
  },
  {
    id: 'history',
    name: 'History',
    emoji: '🏛️',
    color: 'from-amber-500 to-amber-600',
    topics: ['World History', 'Civilizations', 'Modern Era']
  },
  {
    id: 'coding',
    name: 'Coding',
    emoji: '💻',
    color: 'from-cyan-500 to-cyan-600',
    topics: ['Python', 'JavaScript', 'Algorithms', 'Web Dev']
  },
  {
    id: 'general',
    name: 'Ask Anything',
    emoji: '💡',
    color: 'from-primary-500 to-primary-600',
    topics: ['Any topic', 'Homework help', 'Explain concepts']
  }
]

export default function Subjects() {
  return (
    <div className="min-h-screen px-4 py-8">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8">
        <Link to="/" className="text-white/60 hover:text-white mb-4 inline-block">
          ← Back
        </Link>
        <h1 className="text-3xl font-bold mb-2">Choose a Subject</h1>
        <p className="text-white/60">What would you like to learn today?</p>
      </div>

      {/* Subject Grid */}
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            to={`/study/${subject.id}`}
            className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-200 active:scale-95 group"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
              {subject.emoji}
            </div>
            <h2 className="text-lg font-semibold mb-2">{subject.name}</h2>
            <div className="flex flex-wrap gap-1">
              {subject.topics.slice(0, 2).map((topic) => (
                <span key={topic} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/60">
                  {topic}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
