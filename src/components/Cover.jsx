// A drawn thumbnail for a project: a small picture of the kind of thing that was built,
// in that client's colors. Decorative, so it is hidden from screen readers.

function Frame({ c, children }) {
  return (
    <g>
      <rect x="44" y="34" width="312" height="206" rx="12" fill={c.panel} />
      <circle cx="62" cy="50" r="4" fill={c.accent} />
      <circle cx="76" cy="50" r="4" fill={c.ink} opacity="0.25" />
      <circle cx="90" cy="50" r="4" fill={c.ink} opacity="0.25" />
      <rect x="44" y="64" width="312" height="1.5" fill={c.ink} opacity="0.12" />
      {children}
    </g>
  )
}

const Letter = ({ c, x, y, size = 30, fill }) => (
  <text x={x} y={y} fontFamily="Changa, sans-serif" fontWeight="700" fontSize={size} textAnchor="middle" fill={fill ?? c.ink}>
    {c.letter}
  </text>
)

function Store({ c }) {
  return (
    <Frame c={c}>
      <Letter c={c} x={330} y={94} size={22} />
      <rect x="62" y="80" width="70" height="8" rx="4" fill={c.ink} opacity="0.2" />
      <circle cx="74" cy="84" r="9" fill={c.accent} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${62 + i * 96} 110)`}>
          <rect width="84" height="80" rx="8" fill={c.ink} opacity={i === 1 ? 0.14 : 0.08} />
          <rect x="27" y="16" width="30" height="46" rx="6" fill={i === 1 ? c.accent : c.ink} opacity={i === 1 ? 1 : 0.55} />
          <rect x="33" y="30" width="18" height="12" rx="2" fill={c.panel} />
          <rect y="90" width="56" height="7" rx="3.5" fill={c.ink} opacity="0.6" />
          <rect y="104" width="34" height="7" rx="3.5" fill={c.accent} />
        </g>
      ))}
    </Frame>
  )
}

function Site({ c }) {
  return (
    <Frame c={c}>
      <Letter c={c} x={330} y={94} size={22} />
      <rect x="62" y="82" width="120" height="14" rx="4" fill={c.ink} />
      <rect x="62" y="104" width="150" height="14" rx="4" fill={c.ink} />
      <rect x="62" y="130" width="110" height="6" rx="3" fill={c.ink} opacity="0.35" />
      <rect x="62" y="142" width="90" height="6" rx="3" fill={c.ink} opacity="0.35" />
      <rect x="62" y="160" width="62" height="20" rx="10" fill={c.accent} />
      <rect x="232" y="108" width="106" height="78" rx="8" fill={c.accent} opacity="0.9" />
      <path d="M232 170l30-28 22 18 20-14 34 30v2a8 8 0 0 1-8 8h-90a8 8 0 0 1-8-8z" fill={c.ink} opacity="0.35" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={62 + i * 96} y="202" width="84" height="24" rx="6" fill={c.ink} opacity="0.1" />
      ))}
    </Frame>
  )
}

function App({ c }) {
  const bars = [34, 52, 40, 66, 58, 78]
  return (
    <Frame c={c}>
      <rect x="44" y="65" width="64" height="175" fill={c.ink} opacity="0.92" />
      <path d="M44 228V65h64v175H56a12 12 0 0 1-12-12z" fill={c.ink} />
      <Letter c={c} x={76} y={98} size={22} fill={c.panel} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="58" y={118 + i * 18} width="36" height="6" rx="3" fill={c.panel} opacity={i === 0 ? 0.95 : 0.35} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${122 + i * 76} 80)`}>
          <rect width="66" height="38" rx="6" fill={c.ink} opacity="0.08" />
          <rect x="8" y="9" width="26" height="5" rx="2.5" fill={c.ink} opacity="0.4" />
          <rect x="8" y="21" width="38" height="9" rx="3" fill={i === 0 ? c.accent : c.ink} />
        </g>
      ))}
      {bars.map((height, i) => (
        <rect key={i} x={126 + i * 22} y={206 - height} width="14" height={height} rx="3" fill={i === bars.length - 1 ? c.accent : c.ink} opacity={i === bars.length - 1 ? 1 : 0.5} />
      ))}
      <rect x="122" y="208" width="140" height="1.5" fill={c.ink} opacity="0.3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(274 ${134 + i * 20})`}>
          <circle cx="5" cy="5" r="5" fill={i === 1 ? c.accent : c.ink} opacity={i === 1 ? 1 : 0.3} />
          <rect x="16" y="2" width="50" height="6" rx="3" fill={c.ink} opacity="0.3" />
        </g>
      ))}
    </Frame>
  )
}

function Brand({ c }) {
  return (
    <g>
      <rect x="44" y="34" width="190" height="206" rx="12" fill={c.panel} />
      <circle cx="139" cy="124" r="52" fill={c.accent} />
      <Letter c={c} x={139} y={146} size={62} fill={c.panel} />
      <rect x="99" y="198" width="80" height="8" rx="4" fill={c.ink} />
      <rect x="114" y="214" width="50" height="6" rx="3" fill={c.ink} opacity="0.35" />
      <rect x="250" y="34" width="106" height="60" rx="12" fill={c.accent} />
      <rect x="250" y="107" width="106" height="60" rx="12" fill={c.ink} />
      <rect x="250" y="180" width="106" height="60" rx="12" fill={c.panel} />
      <Letter c={c} x={303} y={222} size={30} />
    </g>
  )
}

function Campaign({ c }) {
  return (
    <g>
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${88 + i * 128} ${i === 0 ? 30 : 46})`}>
          <rect width="104" height="200" rx="16" fill={c.panel} />
          <rect x="10" y="12" width="84" height="84" rx="8" fill={i === 0 ? c.accent : c.ink} />
          <Letter c={c} x={52} y={70} size={44} fill={c.panel} />
          <rect x="10" y="108" width="70" height="8" rx="4" fill={c.ink} />
          <rect x="10" y="124" width="84" height="6" rx="3" fill={c.ink} opacity="0.3" />
          <rect x="10" y="136" width="60" height="6" rx="3" fill={c.ink} opacity="0.3" />
          <rect x="10" y="158" width="84" height="24" rx="12" fill={i === 0 ? c.ink : c.accent} />
        </g>
      ))}
    </g>
  )
}

const kinds = { store: Store, site: Site, app: App, brand: Brand, campaign: Campaign }

export default function Cover({ cover, className = '' }) {
  const Kind = kinds[cover.kind] ?? Site
  return (
    <svg viewBox="0 0 400 270" className={`block h-auto w-full ${className}`} aria-hidden="true">
      <rect width="400" height="270" fill={cover.bg} />
      <Kind c={cover} />
    </svg>
  )
}
