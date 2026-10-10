import { Building, Globe, MapIcon, Person } from '../components/icons.jsx'
import { company, stats } from '../lib/company.js'
import { useCountUp, useSeen } from '../lib/hooks.js'
import { useLang, useT } from '../lib/i18n.jsx'

const icons = { founded: Building, team: Person, countries: Globe, offices: MapIcon }

function Stat({ stat, running }) {
  const lang = useLang()
  const counted = useCountUp(stat.value, running && stat.count)
  const Icon = icons[stat.id]
  // A year is written as it is: 2010, never 2,010.
  const shown = stat.count ? counted.toLocaleString('en') : String(stat.value)
  return (
    <div className="flex flex-col items-center text-center">
      <dd className="text-4xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl" dir="ltr">
        <span aria-hidden="true">{shown}</span>
        <span className="sr-only">{stat.value}</span>
      </dd>
      <Icon width={36} height={36} className="mt-3 text-white" />
      <dt className="mt-3 text-gray-200">{stat.label[lang]}</dt>
    </div>
  )
}

export default function Stats() {
  const t = useT()
  const [ref, seen] = useSeen()
  return (
    <section ref={ref} className="bg-night py-14" aria-label={t(`${company.name.en} in numbers`, `${company.name.ar} بالأرقام`)}>
      <dl className="wrap grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => (
          <Stat key={stat.id} stat={stat} running={seen} />
        ))}
      </dl>
    </section>
  )
}
