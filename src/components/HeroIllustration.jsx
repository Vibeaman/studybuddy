// Hero illustration component - flat style education illustration
// Using inline SVG for the blob + floating icons pattern

export default function HeroIllustration() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Blue blob background */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 400" 
        fill="none"
      >
        <path 
          d="M200 50c80 0 150 70 150 150s-70 150-150 150S50 280 50 200 120 50 200 50z" 
          fill="#BFDBFE"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
      </svg>

      {/* Central illustration - Student reading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {/* Globe */}
          <circle cx="70" cy="60" r="35" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="2"/>
          <path d="M50 60c0-15 20-30 40-30M45 70c10 5 30 5 50 0" stroke="#1E3A8A" strokeWidth="1.5" fill="none"/>
          <ellipse cx="70" cy="60" rx="35" ry="10" stroke="#1E3A8A" strokeWidth="1.5" fill="none"/>
          
          {/* Person reading book */}
          <g transform="translate(80, 90)">
            {/* Head */}
            <circle cx="50" cy="20" r="18" fill="#FEF3C7" stroke="#1E3A8A" strokeWidth="2"/>
            {/* Hair */}
            <path d="M35 15c0-12 12-18 20-15 8-3 15 3 15 15" fill="#1E3A8A"/>
            {/* Body */}
            <path d="M30 40c0 0 10 5 20 5s20-5 20-5l10 50H20L30 40z" fill="#1E3A8A" stroke="#1E3A8A" strokeWidth="2"/>
            {/* Book */}
            <rect x="25" y="50" width="50" height="35" rx="2" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2"/>
            <line x1="50" y1="50" x2="50" y2="85" stroke="#1E3A8A" strokeWidth="2"/>
            {/* Arms holding book */}
            <path d="M25 45c-10 5-15 15-10 25" stroke="#FEF3C7" strokeWidth="8" fill="none"/>
            <path d="M75 45c10 5 15 15 10 25" stroke="#FEF3C7" strokeWidth="8" fill="none"/>
          </g>
          
          {/* Books on table */}
          <rect x="100" y="170" width="40" height="8" rx="1" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="1"/>
          <rect x="105" y="163" width="30" height="7" rx="1" fill="#60A5FA" stroke="#1E3A8A" strokeWidth="1"/>
        </svg>
      </div>

      {/* Floating science icons */}
      <div className="absolute top-4 left-8 float-animation" style={{animationDelay: '0s'}}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <text x="0" y="24" fontSize="20" fill="#1E3A8A" fontStyle="italic">f(x)</text>
        </svg>
      </div>

      <div className="absolute top-8 right-12 float-animation" style={{animationDelay: '0.5s'}}>
        {/* DNA helix */}
        <svg width="28" height="40" viewBox="0 0 28 40" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <path d="M5 5c10 5 10 10 0 15s-10 10 0 15"/>
          <path d="M23 5c-10 5-10 10 0 15s10 10 0 15"/>
          <line x1="8" y1="8" x2="20" y2="8"/>
          <line x1="5" y1="15" x2="23" y2="15"/>
          <line x1="8" y1="22" x2="20" y2="22"/>
          <line x1="5" y1="29" x2="23" y2="29"/>
        </svg>
      </div>

      <div className="absolute top-16 right-4 float-animation" style={{animationDelay: '1s'}}>
        {/* Saturn */}
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <circle cx="18" cy="12" r="8"/>
          <ellipse cx="18" cy="12" rx="16" ry="4"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-4 float-animation" style={{animationDelay: '1.5s'}}>
        {/* Atom */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <circle cx="20" cy="20" r="3" fill="#1E3A8A"/>
          <ellipse cx="20" cy="20" rx="16" ry="6"/>
          <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(60 20 20)"/>
          <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(120 20 20)"/>
        </svg>
      </div>

      <div className="absolute bottom-28 right-8 float-animation" style={{animationDelay: '0.3s'}}>
        {/* Gears */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#93C5FD" strokeWidth="1.5">
          <circle cx="12" cy="16" r="6"/>
          <circle cx="12" cy="16" r="3"/>
          <circle cx="22" cy="20" r="4"/>
          <circle cx="22" cy="20" r="2"/>
        </svg>
      </div>

      <div className="absolute top-1/3 left-2 float-animation" style={{animationDelay: '0.8s'}}>
        {/* Moon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8"/>
          <circle cx="8" cy="8" r="2" fill="#1E3A8A" fillOpacity="0.3"/>
          <circle cx="14" cy="10" r="1.5" fill="#1E3A8A" fillOpacity="0.3"/>
          <circle cx="10" cy="14" r="1" fill="#1E3A8A" fillOpacity="0.3"/>
        </svg>
      </div>

      <div className="absolute bottom-12 left-12 float-animation" style={{animationDelay: '1.2s'}}>
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
          <text x="0" y="18" fontSize="16" fill="#1E3A8A" fontStyle="italic">x²</text>
        </svg>
      </div>

      <div className="absolute top-24 left-0 float-animation" style={{animationDelay: '0.7s'}}>
        {/* Venn diagram */}
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <circle cx="10" cy="12" r="8" fill="none"/>
          <circle cx="18" cy="12" r="8" fill="none"/>
          <text x="7" y="14" fontSize="8" fill="#1E3A8A">a</text>
          <text x="17" y="14" fontSize="8" fill="#1E3A8A">b</text>
        </svg>
      </div>

      <div className="absolute bottom-32 right-2 float-animation" style={{animationDelay: '1.8s'}}>
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
          <text x="0" y="16" fontSize="14" fill="#93C5FD" fontStyle="italic">x-y</text>
        </svg>
      </div>

      <div className="absolute top-2 left-1/3 float-animation" style={{animationDelay: '2s'}}>
        {/* Molecule */}
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <circle cx="8" cy="14" r="4"/>
          <circle cx="20" cy="8" r="4"/>
          <circle cx="20" cy="20" r="4"/>
          <circle cx="32" cy="14" r="3"/>
          <line x1="12" y1="12" x2="16" y2="10"/>
          <line x1="12" y1="16" x2="16" y2="18"/>
          <line x1="24" y1="10" x2="29" y2="13"/>
          <line x1="24" y1="18" x2="29" y2="15"/>
        </svg>
      </div>

      <div className="absolute top-12 right-1 float-animation" style={{animationDelay: '0.4s'}}>
        {/* Star */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1E3A8A" strokeWidth="1">
          <path d="M8 1l2 5h5l-4 3.5 1.5 5L8 12l-4.5 2.5 1.5-5L1 6h5z"/>
        </svg>
      </div>

      <div className="absolute bottom-16 right-16 float-animation" style={{animationDelay: '1.1s'}}>
        {/* Triangle/ruler */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <path d="M4 20L4 4L20 20Z"/>
        </svg>
      </div>

      <div className="absolute top-1/2 right-0 float-animation" style={{animationDelay: '0.9s'}}>
        {/* Cube */}
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" stroke="#1E3A8A" strokeWidth="1.5">
          <path d="M4 8l8-4 8 4v12l-8 4-8-4V8z"/>
          <path d="M4 8l8 4 8-4"/>
          <path d="M12 12v12"/>
        </svg>
      </div>
    </div>
  )
}
