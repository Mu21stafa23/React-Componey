import { Link, useParams } from 'react-router-dom'
import Cover from '../components/Cover.jsx'
import { Range } from '../components/Money.jsx'
import { serviceNames } from '../components/ProjectLink.jsx'
import { Check } from '../components/icons.jsx'
import { projectBySlug, projects, sectorById } from '../data/work.js'
import { estimate, toQuery } from '../lib/estimate.js'
import { useTitle } from '../lib/hooks.js'
import { useLang, useT, useTo, weeksLabel } from '../lib/i18n.jsx'
import NotFound from './NotFound.jsx'

function Project({ project }) {
  const lang = useLang()
  const t = useT()
  const to = useTo()
  useTitle(`${project.name[lang]} | ${t('Moon Studio', 'مون ستوديو')}`)

  const like = estimate(project.config)
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  const facts = [
    { label: t('Sector', 'القطاع'), value: sectorById(project.sector).name[lang] },
    { label: t('City', 'المدينة'), value: project.place[lang] },
    { label: t('Year', 'السنة'), value: String(project.year) },
    { label: t('Services', 'الخدمات'), value: serviceNames(project, lang) },
  ]

  return (
    <>
      <header className="bg-forest text-white">
        <div className="wrap pb-12 pt-8">
          <Link to={to('/work')} className="inline-block rounded py-2 font-semibold text-moon underline underline-offset-4 hover:text-white">
            {t('All projects', 'كل المشاريع')}
          </Link>
          <h1 className="mt-1 text-4xl font-bold sm:text-5xl">{project.name[lang]}</h1>
          <p className="mt-3 max-w-2xl text-xl text-white/85">{project.line[lang]}</p>
        </div>
      </header>

      <div className="wrap py-10">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
          <div className="overflow-hidden rounded-2xl">
            <Cover cover={project.cover} />
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-6 py-3">
                <dt className="soft">{fact.label}</dt>
                <dd className="text-end font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <section aria-labelledby="problem">
            <h2 id="problem" className="text-2xl font-bold">
              {t('The problem', 'المشكلة')}
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{project.challenge[lang]}</p>
          </section>
          <section aria-labelledby="did">
            <h2 id="did" className="text-2xl font-bold">
              {t('What we built', 'ماذا بنينا')}
            </h2>
            <ul className="mt-3 space-y-3">
              {project.did.map((item) => (
                <li key={item.en} className="flex items-start gap-3">
                  <Check className="mt-1 shrink-0 text-forest" />
                  {item[lang]}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12" aria-labelledby="after">
          <h2 id="after" className="text-2xl font-bold">
            {t('What changed', 'ما الذي تغيّر')}
          </h2>
          <dl className="mt-4 grid gap-6 sm:grid-cols-3">
            {project.results.map((item) => {
              const value = lang === 'ar' ? (item.valueAr ?? item.value) : item.value
              return (
                <div key={item.label.en} className="flex flex-col-reverse border-t-4 border-forest pt-3">
                  <dt className="mt-1 soft">{item.label[lang]}</dt>
                  <dd className="font-display text-4xl font-bold text-forest">
                    <bdi dir={/[؀-ۿ]/.test(value) ? 'rtl' : 'ltr'}>{value}</bdi>
                  </dd>
                </div>
              )
            })}
          </dl>
          <p className="mt-4 text-sm soft">{t('An invented client with example figures: Moon Studio is a demo.', 'عميل افتراضي وأرقام للتوضيح، فمون ستوديو مشروع تجريبي.')}</p>
        </section>

        <section className="mt-12 flex flex-col items-start gap-5 rounded-2xl bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between" aria-labelledby="like">
          <div>
            <h2 id="like" className="text-xl font-bold">
              {t('A project like this one costs', 'مشروع مثل هذا يكلّف')}
            </h2>
            <p className="mt-1 text-3xl font-bold text-forest">
              <Range low={like.low} high={like.high} />
            </p>
            <p className="mt-1 soft">
              {t('about ', 'نحو ')}
              {weeksLabel(like.weeks, lang)}
            </p>
          </div>
          <Link to={`${to('/estimate')}?${toQuery(project.config).toString()}`} className="btn-flame shrink-0">
            {t('Start from this estimate', 'ابدأ من هذا التقدير')}
          </Link>
        </section>

        <p className="mt-10 border-t border-line pt-6 text-lg">
          <span className="soft">{t('Next project: ', 'المشروع التالي: ')}</span>
          <Link to={to(`/work/${next.slug}`)} className="link inline-block py-2">
            {next.name[lang]}
          </Link>
        </p>
      </div>
    </>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  return project ? <Project key={project.slug} project={project} /> : <NotFound />
}
