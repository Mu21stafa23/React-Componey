import { reasons } from '../lib/company.js'
import { useLang, useT } from '../lib/i18n.jsx'

export default function WorkWithUs() {
  const lang = useLang()
  const t = useT()
  return (
    <section id="work" className="bg-slate-100 py-20 sm:py-24" aria-labelledby="work-title">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="work-title" className="text-3xl font-bold tracking-tight text-brand sm:text-5xl">
            {t('Why companies work with us', 'لماذا تعمل الشركات معنا')}
          </h2>
          <p className="mt-5 text-lg text-gray-700">
            {t(
              'Most companies hire a consultant, a developer and an agency, then spend their time translating between the three. With us it is one team and one plan.',
              'أغلب الشركات تتعاقد مع مستشار ومبرمج ووكالة تسويق، ثم تقضي وقتها في الترجمة بين الثلاثة. معنا فريق واحد وخطة واحدة.',
            )}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((offer) => (
            <li key={offer.id} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brand">{offer.title[lang]}</h3>
              <p className="mt-3 text-gray-600">{offer.text[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
