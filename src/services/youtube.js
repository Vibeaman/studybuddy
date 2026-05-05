// YouTube video suggestions - curated educational content
// Primary source: The Organic Chemistry Tutor (https://www.youtube.com/@TheOrganicChemistryTutor)

const ORGANIC_CHEM_TUTOR = {
  name: 'The Organic Chemistry Tutor',
  channelUrl: 'https://www.youtube.com/@TheOrganicChemistryTutor',
  avatar: '🧪',
  description: 'One of the best STEM tutors on YouTube - covers chemistry, physics, math, and more'
}

// Curated video database - specific videos for common topics
export const videoDatabase = {
  // PHYSICS
  'kinematics': {
    title: 'Kinematics In One Dimension - Physics',
    videoId: 'GHxz3d-FTdM',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['position', 'velocity', 'acceleration', 'motion', 'displacement']
  },
  'projectile motion': {
    title: 'Projectile Motion Physics Problems',
    videoId: 'aY8z2qO44WA',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['trajectory', 'launch angle', 'range', 'projectile']
  },
  'newton laws': {
    title: "Newton's Laws of Motion - Physics",
    videoId: 'kKKM8Y-u7ds',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['force', 'mass', 'acceleration', 'inertia', 'action reaction']
  },
  'momentum': {
    title: 'Momentum and Impulse Physics Problems',
    videoId: 'Fp7D5V8Vwvs',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['collision', 'impulse', 'conservation of momentum']
  },
  'energy': {
    title: 'Work, Energy, and Power - Physics',
    videoId: 'w4QFJb9a8vo',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['kinetic energy', 'potential energy', 'work', 'power', 'joules']
  },
  'circular motion': {
    title: 'Circular Motion Physics Problems',
    videoId: 'bpFK2VCRHUs',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['centripetal', 'angular velocity', 'rotation']
  },
  'waves': {
    title: 'Waves - Physics',
    videoId: 'TfYCnOvNnFU',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['frequency', 'wavelength', 'amplitude', 'sound waves', 'light waves']
  },
  'electricity': {
    title: 'Electric Circuits - Physics',
    videoId: 'F_vLWkkOETI',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['voltage', 'current', 'resistance', 'ohms law', 'circuit']
  },
  'thermodynamics': {
    title: 'Thermodynamics - Physics',
    videoId: 'ErKuh0Fu8Sw',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['heat', 'temperature', 'entropy', 'energy transfer']
  },
  'quantum physics': {
    title: 'Quantum Physics Introduction',
    videoId: 'QXf95_EKS6E',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['quantum mechanics', 'photons', 'wave-particle duality', 'uncertainty']
  },
  
  // CHEMISTRY
  'organic chemistry': {
    title: 'Organic Chemistry Basic Introduction',
    videoId: '_OjJGNhBDPc',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['carbon', 'functional groups', 'hydrocarbons', 'organic compounds']
  },
  'chemical reactions': {
    title: 'Types of Chemical Reactions',
    videoId: 'OttRV5ykP7A',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['synthesis', 'decomposition', 'combustion', 'oxidation', 'reduction']
  },
  'stoichiometry': {
    title: 'Stoichiometry Basic Introduction',
    videoId: 'UL1jmJaUkaQ',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['moles', 'molar mass', 'balancing equations', 'limiting reagent']
  },
  'acids bases': {
    title: 'Acids and Bases Chemistry',
    videoId: 'ANi709MYnWg',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['pH', 'pOH', 'acid', 'base', 'neutralization', 'buffer']
  },
  'atomic structure': {
    title: 'Atomic Structure - Chemistry',
    videoId: 'VPbiTBnTfQU',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['electrons', 'protons', 'neutrons', 'orbitals', 'electron configuration']
  },
  'periodic table': {
    title: 'Periodic Table Explained',
    videoId: 'YKQA_SZcNmI',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['elements', 'groups', 'periods', 'metals', 'nonmetals']
  },
  'chemical bonding': {
    title: 'Chemical Bonding - Ionic vs Covalent',
    videoId: 'FR5jT7YsJec',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['ionic bonds', 'covalent bonds', 'electronegativity', 'lewis structures']
  },
  'gas laws': {
    title: 'Gas Laws - Chemistry',
    videoId: 'TqLlfHBFY28',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['ideal gas law', 'boyles law', 'charles law', 'pressure', 'volume']
  },
  
  // MATH - ALGEBRA
  'algebra': {
    title: 'Algebra Introduction - Basic Overview',
    videoId: 'grnP3mduZkM',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['variables', 'equations', 'expressions', 'solving']
  },
  'quadratic equations': {
    title: 'Solving Quadratic Equations',
    videoId: 'IlNAJl36-10',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['quadratic formula', 'factoring', 'completing the square', 'parabola']
  },
  'linear equations': {
    title: 'Linear Equations - Algebra',
    videoId: 'HhXhFT2gwl4',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['slope', 'y-intercept', 'graphing', 'slope-intercept form']
  },
  'exponents': {
    title: 'Exponents and Powers - Rules',
    videoId: 'XZRQhkii0h0',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['power rules', 'negative exponents', 'scientific notation']
  },
  'logarithms': {
    title: 'Logarithms Explained',
    videoId: 'Zw5t6BTQYRU',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['log', 'natural log', 'log rules', 'exponential']
  },
  'polynomials': {
    title: 'Polynomials - Adding, Subtracting, Multiplying',
    videoId: 'Vm7H0VTlIco',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['polynomial', 'degree', 'coefficients', 'FOIL']
  },
  
  // MATH - TRIGONOMETRY
  'trigonometry': {
    title: 'Trigonometry Introduction',
    videoId: 'PUB0TaZ7bhA',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['sine', 'cosine', 'tangent', 'angles', 'triangles', 'soh cah toa']
  },
  'unit circle': {
    title: 'Unit Circle Trigonometry',
    videoId: 'WRiYjmSZfWg',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['radians', 'degrees', 'unit circle', 'trig values']
  },
  
  // MATH - CALCULUS
  'calculus': {
    title: 'Calculus 1 Introduction',
    videoId: 'WUvTyaaNkzM',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['limits', 'derivatives', 'integrals', 'calculus basics']
  },
  'derivatives': {
    title: 'Derivatives - Calculus',
    videoId: '5yfh5cf4-0w',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['differentiation', 'derivative rules', 'chain rule', 'power rule']
  },
  'integrals': {
    title: 'Integrals - Calculus',
    videoId: 'rfG8ce4nNh0',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['integration', 'antiderivative', 'definite integral', 'area under curve']
  },
  'limits': {
    title: 'Limits - Calculus',
    videoId: 'riXcZT2ICjA',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['limit', 'continuity', 'approaching', 'infinity']
  },
  
  // MATH - PRECALCULUS
  'precalculus': {
    title: 'Precalculus Introduction',
    videoId: 'eI4an8aSsgw',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['functions', 'graphing', 'transformations']
  },
  'functions': {
    title: 'Functions - Domain and Range',
    videoId: 'OxZ8Lm9En3I',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['domain', 'range', 'function notation', 'graphing functions']
  },
  
  // STATISTICS
  'statistics': {
    title: 'Statistics Introduction',
    videoId: 'hjZJIVWHnPE',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['mean', 'median', 'mode', 'standard deviation', 'probability']
  },
  'probability': {
    title: 'Probability Introduction',
    videoId: 'KzfWUEJjG18',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['probability', 'odds', 'events', 'combinations', 'permutations']
  },
  
  // BIOLOGY
  'biology': {
    title: 'Biology Introduction',
    videoId: 'T59lCLUH7Vs',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['cells', 'DNA', 'genetics', 'evolution', 'organisms']
  },
  'cell biology': {
    title: 'Cell Structure and Function',
    videoId: 'URUJD5NEXC8',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['cell', 'organelles', 'mitochondria', 'nucleus', 'membrane']
  },
  'dna': {
    title: 'DNA Structure and Replication',
    videoId: '8kK2zwjRV0M',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['DNA', 'replication', 'nucleotides', 'double helix', 'genetics']
  },
  'photosynthesis': {
    title: 'Photosynthesis - Biology',
    videoId: 'yfR36PMWegg',
    tutor: ORGANIC_CHEM_TUTOR,
    topics: ['photosynthesis', 'chlorophyll', 'light reactions', 'calvin cycle']
  }
}

// Find relevant videos based on user query
export function findRelevantVideos(query, maxResults = 2) {
  const queryLower = query.toLowerCase()
  const results = []
  
  for (const [key, video] of Object.entries(videoDatabase)) {
    // Check if query matches topic key
    if (queryLower.includes(key)) {
      results.push({ ...video, matchScore: 3 })
      continue
    }
    
    // Check if query matches any topic keywords
    const topicMatch = video.topics.some(topic => queryLower.includes(topic))
    if (topicMatch) {
      results.push({ ...video, matchScore: 2 })
      continue
    }
    
    // Check if video title contains query words
    const queryWords = queryLower.split(' ').filter(w => w.length > 3)
    const titleMatch = queryWords.some(word => video.title.toLowerCase().includes(word))
    if (titleMatch) {
      results.push({ ...video, matchScore: 1 })
    }
  }
  
  // Sort by match score and return top results
  return results
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, maxResults)
    .map(({ matchScore, ...video }) => video)
}

// Get YouTube embed URL
export function getEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}`
}

// Get YouTube watch URL
export function getWatchUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`
}

// Get thumbnail URL
export function getThumbnailUrl(videoId) {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
}
