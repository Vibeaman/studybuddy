// Second section illustration - Learning materials style

export default function SecondIllustration() {
  return (
    <div className="relative w-72 h-72 mx-auto">
      {/* Blue blob background */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 300 300" 
        fill="none"
      >
        <path 
          d="M150 30c70 0 120 50 120 120s-50 120-120 120S30 220 30 150 80 30 150 30z" 
          fill="#BFDBFE"
        />
      </svg>

      {/* Laptop and documents illustration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 250 220" className="w-64 h-56">
          {/* Laptop */}
          <g transform="translate(90, 20)">
            {/* Screen */}
            <rect x="0" y="0" width="100" height="70" rx="4" fill="#1E3A8A" stroke="#1E3A8A" strokeWidth="2"/>
            <rect x="5" y="5" width="90" height="55" rx="2" fill="white"/>
            {/* Screen content lines */}
            <line x1="10" y1="15" x2="85" y2="15" stroke="#E5E7EB" strokeWidth="3"/>
            <line x1="10" y1="25" x2="70" y2="25" stroke="#E5E7EB" strokeWidth="3"/>
            <line x1="10" y1="35" x2="80" y2="35" stroke="#E5E7EB" strokeWidth="3"/>
            <line x1="10" y1="45" x2="60" y2="45" stroke="#E5E7EB" strokeWidth="3"/>
            {/* Base */}
            <path d="M-10 70L110 70L120 85L-20 85Z" fill="#374151" stroke="#1E3A8A" strokeWidth="1"/>
            <ellipse cx="50" cy="77" rx="15" ry="3" fill="#4B5563"/>
          </g>

          {/* Folder stack */}
          <g transform="translate(10, 60)">
            <rect x="0" y="20" width="60" height="50" rx="3" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="1.5"/>
            <path d="M0 25c0-3 2-5 5-5h15l5 5h30c3 0 5 2 5 5" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="1.5"/>
            {/* Papers inside */}
            <rect x="5" y="30" width="50" height="35" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
          </g>

          {/* Chart document */}
          <g transform="translate(20, 120)">
            <rect x="0" y="0" width="50" height="60" rx="2" fill="white" stroke="#1E3A8A" strokeWidth="1.5"/>
            {/* Bar chart */}
            <rect x="8" y="35" width="8" height="15" fill="#3B82F6"/>
            <rect x="20" y="25" width="8" height="25" fill="#60A5FA"/>
            <rect x="32" y="30" width="8" height="20" fill="#93C5FD"/>
            {/* Pie chart */}
            <circle cx="25" cy="15" r="8" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="25 50"/>
            <circle cx="25" cy="15" r="8" fill="none" stroke="#60A5FA" strokeWidth="4" strokeDasharray="25 50" strokeDashoffset="-25"/>
          </g>

          {/* Open book */}
          <g transform="translate(100, 120)">
            <path d="M50 10c-20-5-40 0-50 5v60c10-5 30-10 50-5" fill="white" stroke="#1E3A8A" strokeWidth="1.5"/>
            <path d="M50 10c20-5 40 0 50 5v60c-10-5-30-10-50-5" fill="white" stroke="#1E3A8A" strokeWidth="1.5"/>
            <line x1="50" y1="10" x2="50" y2="70" stroke="#1E3A8A" strokeWidth="1.5"/>
            {/* Lines on pages */}
            <line x1="10" y1="25" x2="40" y2="25" stroke="#E5E7EB" strokeWidth="2"/>
            <line x1="10" y1="35" x2="35" y2="35" stroke="#E5E7EB" strokeWidth="2"/>
            <line x1="10" y1="45" x2="40" y2="45" stroke="#E5E7EB" strokeWidth="2"/>
            <line x1="60" y1="25" x2="90" y2="25" stroke="#E5E7EB" strokeWidth="2"/>
            <line x1="60" y1="35" x2="85" y2="35" stroke="#E5E7EB" strokeWidth="2"/>
            <line x1="60" y1="45" x2="90" y2="45" stroke="#E5E7EB" strokeWidth="2"/>
            {/* Diagram on book */}
            <circle cx="75" cy="55" r="8" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
            <path d="M75 47v16M67 55h16" stroke="#3B82F6" strokeWidth="1"/>
            <circle cx="75" cy="55" r="3" fill="#3B82F6"/>
          </g>

          {/* Sticky notes */}
          <g transform="translate(70, 140)">
            <rect x="0" y="0" width="25" height="25" fill="#FEF3C7" stroke="#1E3A8A" strokeWidth="1"/>
            <rect x="5" y="10" width="25" height="25" fill="#BFDBFE" stroke="#1E3A8A" strokeWidth="1"/>
          </g>

          {/* Magnifying glass */}
          <g transform="translate(180, 90)">
            <circle cx="15" cy="15" r="12" fill="none" stroke="#1E3A8A" strokeWidth="2.5"/>
            <line x1="23" y1="23" x2="35" y2="35" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round"/>
          </g>

          {/* Pencil */}
          <g transform="translate(75, 185) rotate(-30)">
            <rect x="0" y="0" width="40" height="8" fill="#60A5FA" stroke="#1E3A8A" strokeWidth="1"/>
            <polygon points="40,0 48,4 40,8" fill="#FEF3C7" stroke="#1E3A8A" strokeWidth="1"/>
            <rect x="0" y="0" width="5" height="8" fill="#374151"/>
          </g>
        </svg>
      </div>
    </div>
  )
}
