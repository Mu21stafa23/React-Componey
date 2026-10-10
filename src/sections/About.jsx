import { company, offices } from '../lib/company.js'
import { useLang, useT } from '../lib/i18n.jsx'

export default function About() {
  const lang = useLang()
  const t = useT()
  return (
    <section id="about" className="bg-white py-20 sm:py-24" aria-labelledby="about-title">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h2 id="about-title" className="section-title">
            {t('About ECO', 'عن ECO')}
          </h2>
          <p className="mt-5 text-lg text-gray-700">
            {t(
              `ECO began in ${company.founded} as a small team that helped online shops read their own sales figures. The work has grown since, and the idea has stayed the same: a business decides better when it can see what its data says.`,
              `بدأت ECO عام ${company.founded} فريقاً صغيراً يساعد المتاجر الإلكترونية على قراءة أرقام مبيعاتها. كبر العمل منذ ذلك الحين وبقيت الفكرة نفسها: الشركة تقرّر أفضل حين ترى ما تقوله بياناتها.`,
            )}
          </p>
          <p className="mt-4 text-lg text-gray-700">
            {t(
              'Today our consultants, engineers and marketers work as one team, so the advice we give is advice we can also build and measure.',
              'اليوم يعمل مستشارونا ومهندسونا ومسوّقونا فريقاً واحداً، فالنصيحة التي نقدّمها نستطيع أيضاً أن نبنيها ونقيس أثرها.',
            )}
          </p>
        </div>
        <div className="rounded-lg bg-slate-100 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-900">{t('Our offices', 'مكاتبنا')}</h3>
          <ul className="mt-4 divide-y divide-slate-300">
            {offices.map((office) => (
              <li key={office.en} className="py-3 text-lg text-gray-700">
                {office[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
