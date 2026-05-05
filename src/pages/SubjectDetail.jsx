import { Link, useParams } from 'react-router-dom'

// Subject details data
const subjectData = {
  'smart-teaching': {
    icon: '💡',
    title: 'Smart Teaching Methods',
    tagline: 'Complex topics made simple',
    description: 'Our AI breaks down difficult concepts into clear, digestible explanations tailored to your level.',
    features: [
      'Step-by-step explanations for complex topics',
      'Visual analogies and real-world examples',
      'Adaptive difficulty based on your understanding',
      'Multiple explanation styles (visual, logical, practical)'
    ],
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
    studyPath: 'general'
  },
  'adaptive-learning': {
    icon: '📈',
    title: 'Adapts to Your Expertise',
    tagline: 'Learning that grows with you',
    description: 'Whether you\'re a beginner or an expert, StudyBuddy adjusts its teaching style and depth to match your current level.',
    features: [
      'Beginner-friendly introductions',
      'Advanced deep-dives for experts',
      'Progress tracking and skill assessment',
      'Personalized learning recommendations'
    ],
    subjects: ['All Subjects', 'Exam Prep', 'Research', 'Professional Development'],
    studyPath: 'general'
  },
  'offline-mode': {
    icon: '📴',
    title: 'Works Offline',
    tagline: 'Learn anywhere, anytime',
    description: 'Download the AI model once and study without internet. Perfect for commutes, travel, or areas with poor connectivity.',
    features: [
      'One-time download, learn forever',
      'No data sent to servers (complete privacy)',
      'Works on planes, trains, and remote areas',
      'Runs directly in your browser'
    ],
    subjects: ['All Subjects Available Offline'],
    studyPath: 'general',
    note: 'Add ?mode=offline to any study URL to use offline mode'
  },
  'physics': {
    icon: '⚛️',
    title: 'Physics',
    tagline: 'Understand the universe',
    description: 'From classical mechanics to quantum physics, master the fundamental laws that govern our universe.',
    features: [
      'Kinematics and motion problems',
      'Newton\'s laws and force analysis',
      'Energy, momentum, and collisions',
      'Waves, electricity, and magnetism',
      'Thermodynamics and quantum basics'
    ],
    subjects: ['Mechanics', 'Electromagnetism', 'Thermodynamics', 'Quantum Physics', 'Waves & Optics'],
    studyPath: 'physics'
  },
  'chemistry': {
    icon: '🧪',
    title: 'Chemistry',
    tagline: 'Explore matter and reactions',
    description: 'Understand atoms, molecules, reactions, and the chemical processes that shape our world.',
    features: [
      'Atomic structure and periodic table',
      'Chemical bonding and molecular geometry',
      'Stoichiometry and balancing equations',
      'Acids, bases, and pH calculations',
      'Organic chemistry fundamentals'
    ],
    subjects: ['General Chemistry', 'Organic Chemistry', 'Biochemistry', 'Lab Techniques'],
    studyPath: 'chemistry'
  },
  'math': {
    icon: '📐',
    title: 'Mathematics',
    tagline: 'Build your mathematical foundation',
    description: 'From algebra to calculus, develop strong mathematical skills with clear explanations and practice.',
    features: [
      'Algebra and equation solving',
      'Trigonometry and the unit circle',
      'Calculus (derivatives and integrals)',
      'Statistics and probability',
      'Pre-calculus and functions'
    ],
    subjects: ['Algebra', 'Trigonometry', 'Calculus', 'Statistics', 'Pre-Calculus'],
    studyPath: 'math'
  },
  'programming': {
    icon: '💻',
    title: 'Programming & Coding',
    tagline: 'Code your future',
    description: 'Learn to code from scratch or level up your skills with hands-on programming tutorials.',
    features: [
      'Python for beginners and advanced',
      'JavaScript and web development',
      'HTML, CSS, and responsive design',
      'Data structures and algorithms',
      'Git, SQL, and developer tools'
    ],
    subjects: ['Python', 'JavaScript', 'HTML/CSS', 'React', 'Data Structures'],
    studyPath: 'programming'
  },
  'biology': {
    icon: '🧬',
    title: 'Biology',
    tagline: 'Discover life sciences',
    description: 'Explore the science of life, from cellular biology to genetics and ecosystems.',
    features: [
      'Cell structure and function',
      'DNA, genetics, and heredity',
      'Photosynthesis and respiration',
      'Human anatomy and physiology',
      'Evolution and ecology'
    ],
    subjects: ['Cell Biology', 'Genetics', 'Anatomy', 'Ecology', 'Microbiology'],
    studyPath: 'biology'
  }
}

export default function SubjectDetail() {
  const { subject } = useParams()
  const data = subjectData[subject]

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject not found</h1>
          <Link to="/" className="text-blue-500 hover:underline">← Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b">
        <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">← Back to home</Link>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-6xl mb-4 block">{data.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <p className="text-xl text-blue-500 font-medium mb-4">{data.tagline}</p>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">{data.description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
          <ul className="space-y-4">
            {data.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Topics */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics covered</h2>
          <div className="flex flex-wrap gap-3">
            {data.subjects.map((subj, i) => (
              <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {subj}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Note if exists */}
      {data.note && (
        <section className="px-6 py-8">
          <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">💡 <strong>Tip:</strong> {data.note}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <Link 
            to={`/study/${data.studyPath}`} 
            className="btn-primary inline-block text-lg px-8 py-3"
          >
            Start Learning {data.title} →
          </Link>
          <p className="mt-4 text-gray-500 text-sm">Free • No account needed</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center border-t">
        <p className="text-gray-500 text-sm">Study Buddy AI — Copyright 2026</p>
      </footer>
    </div>
  )
}
