const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const Menu = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const Check = (props) => (
  <svg {...base} strokeWidth={2.2} {...props}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const Building = (props) => (
  <svg {...base} {...props}>
    <path d="M6 21V4h12v17M3.5 21h17M9.5 8h1.5M13 8h1.5M9.5 11.5h1.5M13 11.5h1.5M9.5 15h1.5M13 15h1.5M10.5 21v-2.5h3V21" />
  </svg>
)

export const Person = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M5 20.5c0-3.6 3.1-6 7-6s7 2.4 7 6z" />
  </svg>
)

export const Globe = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.4 4 5.5 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.5-4-9s1.4-6.6 4-9z" />
  </svg>
)

export const MapIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3.5 6.500l5.5-2.5 6 2.5 5.5-2.500v13.500l-5.5 2.5-6-2.5-5.5 2.500zM9 4v13.500M15 6.500V20" />
  </svg>
)

/** The company's mark: a crescent moon with one orbit around it. */
export function Mark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <g transform="rotate(-22 20 20)" fill="none" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#38bdf8" />
      </g>
      <path d="M22.4 8.3a12 12 0 1 0 9.6 15.900A9.8 9.8 0 0 1 22.4 8.300z" fill="currentColor" />
      <g transform="rotate(-22 20 20)" fill="none" strokeWidth="2" strokeLinecap="round">
        <path d="M2 20a18 6.5 0 0 0 36 0" stroke="#38bdf8" />
        <circle cx="38" cy="20" r="2.6" fill="#f59e0b" />
      </g>
    </svg>
  )
}

export function Logo({ name, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xl font-bold tracking-tight text-brand ${className}`}>
      <Mark />
      {name}
    </span>
  )
}
