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
            {t(`About ${company.name.en}`, `عن ${company.name.ar}`)}
          </h2>
          <p className="mt-5 text-lg text-gray-700">
            {t(
              `${company.name.en} began in ${company.founded} as four people helping online shops read their own sales figures. The team is larger now and the idea has not changed: a business decides better when it can see what its data says.`,
              `بدأت ${company.name.ar} عام ${company.founded} بأربعة أشخاص يساعدون المتاجر الإلكترونية على قراءة أرقام مبيعاتها. كبر الفريق وبقيت الفكرة نفسها: الشركة تقرّر أفضل حين ترى ما تقوله بياناتها.`,
            )}
          </p>
          <p className="mt-4 text-lg text-gray-700">
            {t(
              'The name describes how we like to work: close to the client, on a steady course, and back every week with something to show.',
              'والاسم يصف طريقتنا في العمل: قريبون من العميل، على مسار ثابت، ونعود كل أسبوع بشيء نعرضه.',
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
