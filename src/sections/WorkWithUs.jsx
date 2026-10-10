import { offers } from '../lib/company.js'
import { useLang, useT } from '../lib/i18n.jsx'

export default function WorkWithUs() {
  const lang = useLang()
  const t = useT()
  return (
    <section id="work" className="bg-slate-100 py-20 sm:py-24" aria-labelledby="work-title">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="work-title" className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">
            {t('WORK WITH US', 'اعمل معنا')}
          </h2>
          <p className="mt-5 text-lg text-gray-700">
            {t(
              "We offer innovative solutions to help your business grow. Whether you're a startup or an established enterprise, our services are designed to meet your needs and exceed expectations. Let's build something extraordinary together.",
              'نقدّم حلولاً مبتكرة تساعد أعمالك على النمو. سواء كنت شركة ناشئة أو مؤسسة قائمة، خدماتنا مصممة لتلبّي احتياجاتك وتتجاوز توقعاتك. لنبنِ معاً شيئاً مميزاً.',
            )}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
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
