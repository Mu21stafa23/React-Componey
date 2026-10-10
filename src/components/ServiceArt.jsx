// A drawn picture for each service, in the site's colors. Decorative, so hidden from screen readers.

const ink = '#111827'
const panel = '#1f2937'
const indigo = '#6366f1'
const sky = '#38bdf8'
const pale = '#e0e7ff'

function Consulting() {
  return (
    <>
      {/* a dashboard: three figures and an area chart */}
      <rect x="48" y="34" width="304" height="182" rx="12" fill={panel} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${66 + i * 92} 52)`}>
          <rect width="80" height="40" rx="6" fill={ink} />
          <rect x="10" y="10" width="30" height="5" rx="2.5" fill={pale} opacity="0.5" />
          <rect x="10" y="22" width={i === 1 ? 52 : 40} height="8" rx="3" fill={i === 1 ? sky : pale} />
        </g>
      ))}
      <path d="M66 198V160l34-18 34 12 38-34 36 20 40-36 38 14v80z" fill={indigo} opacity="0.35" />
      <path d="M66 160l34-18 34 12 38-34 36 20 40-36 38 14" fill="none" stroke={indigo} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="248" cy="104" r="6" fill={sky} />
      <rect x="66" y="198" width="268" height="2" fill={pale} opacity="0.25" />
    </>
  )
}

function Product() {
  return (
    <>
      {/* a browser window with a phone in front of it */}
      <rect x="40" y="40" width="250" height="170" rx="12" fill={panel} />
      <circle cx="58" cy="56" r="4" fill={sky} />
      <circle cx="72" cy="56" r="4" fill={pale} opacity="0.35" />
      <circle cx="86" cy="56" r="4" fill={pale} opacity="0.35" />
      <rect x="40" y="70" width="250" height="1.5" fill={pale} opacity="0.18" />
      <rect x="58" y="88" width="110" height="12" rx="4" fill={pale} />
      <rect x="58" y="108" width="80" height="6" rx="3" fill={pale} opacity="0.4" />
      <rect x="58" y="128" width="56" height="20" rx="5" fill={indigo} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={58 + i * 60} y="166" width="50" height="28" rx="5" fill={ink} />
      ))}
      <rect x="258" y="70" width="104" height="160" rx="16" fill={ink} stroke={pale} strokeOpacity="0.5" strokeWidth="2" />
      <rect x="272" y="90" width="76" height="52" rx="8" fill={indigo} />
      <rect x="272" y="154" width="54" height="7" rx="3.5" fill={pale} />
      <rect x="272" y="169" width="76" height="5" rx="2.5" fill={pale} opacity="0.4" />
      <rect x="272" y="181" width="60" height="5" rx="2.5" fill={pale} opacity="0.4" />
      <rect x="272" y="198" width="76" height="18" rx="9" fill={sky} />
    </>
  )
}

function Marketing() {
  return (
    <>
      {/* a post that is being liked, and reach going up */}
      <rect x="46" y="44" width="150" height="166" rx="12" fill={panel} />
      <circle cx="68" cy="66" r="9" fill={sky} />
      <rect x="86" y="60" width="60" height="6" rx="3" fill={pale} />
      <rect x="86" y="71" width="36" height="4" rx="2" fill={pale} opacity="0.4" />
      <rect x="60" y="88" width="122" height="70" rx="8" fill={indigo} />
      <path d="M60 150l30-26 24 16 26-22 42 32v0a8 8 0 0 1-8 8H68a8 8 0 0 1-8-8z" fill={ink} opacity="0.35" />
      <path d="M72 184c-5-4-8-7-8-10a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.800c0 3-3 6-8 10z" fill={sky} />
      <rect x="90" y="174" width="40" height="6" rx="3" fill={pale} opacity="0.5" />
      {[38, 56, 50, 78, 104].map((height, i) => (
        <rect key={i} x={226 + i * 26} y={200 - height} width="16" height={height} rx="4" fill={i === 4 ? sky : indigo} opacity={i === 4 ? 1 : 0.75} />
      ))}
      <path d="M222 124l40-26 28 12 50-48" fill="none" stroke={pale} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M322 60h20v20" fill="none" stroke={pale} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="222" y="202" width="124" height="2" fill={pale} opacity="0.25" />
    </>
  )
}

const pictures = { consulting: Consulting, product: Product, marketing: Marketing }

export default function ServiceArt({ id, className = '' }) {
  const Picture = pictures[id]
  return (
    <svg viewBox="0 0 400 250" className={`block h-auto w-full ${className}`} aria-hidden="true">
      <rect width="400" height="250" fill={ink} />
      <Picture />
    </svg>
  )
}
