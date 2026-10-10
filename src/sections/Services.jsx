import ServiceArt from '../components/ServiceArt.jsx'
import { Check } from '../components/icons.jsx'
import { services } from '../lib/company.js'
import { useLang, useT } from '../lib/i18n.jsx'

export default function Services() {
  const lang = useLang()
  const t = useT()
  return (
    <section id="services" className="bg-slate-100 pb-20 sm:pb-24" aria-labelledby="services-title">
      <div className="wrap">
        <div className="mx-auto max-w-3xl border-t border-slate-300 pt-16 text-center">
          <h2 id="services-title" className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            {t('Our services', 'خدماتنا')}
          </h2>
          <p className="mt-3 text-lg text-gray-700">{t('Three services that each work on their own, and work better together.', 'ثلاث خدمات تعمل كلٌّ منها وحدها، وتعمل أفضل معاً.')}</p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <ServiceArt id={service.id} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900">{service.title[lang]}</h3>
                <p className="mt-2 text-gray-600">{service.text[lang]}</p>
                <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 text-gray-700">
                  {service.includes.map((item) => (
                    <li key={item.en} className="flex items-start gap-2.5">
                      <Check width={20} height={20} className="mt-0.5 shrink-0 text-indigo-600" />
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
