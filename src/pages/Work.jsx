import { useSearchParams } from 'react-router-dom'
import ProjectLink from '../components/ProjectLink.jsx'
import { projects, sectors } from '../data/work.js'
import { services } from '../lib/estimate.js'
import { useTitle } from '../lib/hooks.js'
import { useLang, useT } from '../lib/i18n.jsx'

function countLabel(count, lang) {
  if (lang === 'en') return count === 1 ? '1 project' : `${count} projects`
  if (count === 1) return 'مشروع واحد'
  if (count === 2) return 'مشروعان'
  return count <= 10 ? `${count} مشاريع` : `${count} مشروعاً`
}

function Chips({ legend, name, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="font-semibold">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option.id} className="relative cursor-pointer">
            <input type="radio" name={name} className="peer sr-only" checked={value === option.id} onChange={() => onChange(option.id)} />
            <span className="flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-1.5 peer-checked:border-forest peer-checked:bg-forest peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-flame">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function Work() {
  const lang = useLang()
  const t = useT()
  const [params, setParams] = useSearchParams()
  useTitle(t('Work | Moon Studio', 'أعمالنا | مون ستوديو'))

  const used = services.filter((service) => projects.some((project) => project.services.includes(service.id)))
  // An unknown value in the address counts as "all", so a mistyped link still shows projects.
  const service = used.some((item) => item.id === params.get('service')) ? params.get('service') : ''
  const sector = sectors.some((item) => item.id === params.get('sector')) ? params.get('sector') : ''
  const shown = projects.filter((project) => (!service || project.services.includes(service)) && (!sector || project.sector === sector))

  const set = (key, value) => {
    // From the address as it is now, so two quick taps cannot overwrite one another.
    const next = new URLSearchParams(window.location.search)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true, preventScrollReset: true })
  }
  const all = { id: '', label: t('All', 'الكل') }

  return (
    <>
      <header className="bg-forest text-white">
        <div className="wrap pb-12 pt-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{t('Work', 'أعمالنا')}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/85">{t('What the problem was, what we built, and what changed afterwards.', 'ما المشكلة، وماذا بنينا، وما الذي تغيّر بعدها.')}</p>
        </div>
      </header>

      <div className="wrap py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <Chips legend={t('Service', 'الخدمة')} name="service" value={service} onChange={(value) => set('service', value)} options={[all, ...used.map((item) => ({ id: item.id, label: item.name[lang] }))]} />
          <Chips legend={t('Sector', 'القطاع')} name="sector" value={sector} onChange={(value) => set('sector', value)} options={[all, ...sectors.map((item) => ({ id: item.id, label: item.name[lang] }))]} />
        </div>

        <p role="status" className="mt-8 font-semibold soft">
          {shown.length === 0 ? t('No project matches both choices.', 'لا يوجد مشروع يطابق الاختيارين معاً.') : countLabel(shown.length, lang)}
        </p>

        {shown.length === 0 ? (
          <button type="button" className="btn-line mt-4" onClick={() => setParams({}, { replace: true, preventScrollReset: true })}>
            {t('Show all projects', 'اعرض كل المشاريع')}
          </button>
        ) : (
          <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-x-8 gap-y-12 md:grid-cols-2">
            {shown.map((project) => (
              <li key={project.slug} className="min-w-0">
                <ProjectLink project={project} heading="h2" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
