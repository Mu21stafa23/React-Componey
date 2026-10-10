import { Link } from 'react-router-dom'
import { Money } from '../components/Money.jsx'
import { Check } from '../components/icons.jsx'
import { CARE_MONTHLY, RUSH_RATE, services } from '../lib/estimate.js'
import { useTitle } from '../lib/hooks.js'
import { useLang, useT, useTo, weeksLabel } from '../lib/i18n.jsx'

export default function Services() {
  const lang = useLang()
  const t = useT()
  const to = useTo()
  useTitle(t('Services and prices | Moon Studio', 'الخدمات والأسعار | مون ستوديو'))

  return (
    <>
      <header className="bg-forest text-white">
        <div className="wrap pb-12 pt-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{t('Services and prices', 'الخدمات والأسعار')}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/85">
            {t('Six things we do, what each one includes, and what every extra adds. The estimator uses exactly these numbers.', 'ستة أشياء نعملها، وما يشمله كل منها، وما تضيفه كل زيادة. والحاسبة تستخدم هذه الأرقام نفسها.')}
          </p>
        </div>
      </header>

      <div className="wrap py-6">
        {services.map((service) => (
          <article key={service.id} id={service.id} className="grid grid-cols-[minmax(0,1fr)] gap-6 border-b border-line py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-forest">{service.name[lang]}</h2>
              <p className="mt-2 text-lg">{service.blurb[lang]}</p>
              <ul className="mt-5 space-y-2">
                {service.includes.map((item) => (
                  <li key={item.en} className="flex items-start gap-2.5">
                    <Check className="mt-1 shrink-0 text-forest" />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 sm:p-6">
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-dashed border-line pb-4">
                <div>
                  <p className="font-semibold">{t('Starts at', 'يبدأ من')}</p>
                  <p className="text-sm soft">
                    {t('about ', 'نحو ')}
                    {weeksLabel(service.weeks, lang)}
                  </p>
                </div>
                <Money value={service.base} className="text-2xl font-bold text-forest" />
              </div>
              <dl className="divide-y divide-dashed divide-line">
                {service.options.map((option) =>
                  option.choices ? (
                    <div key={option.id} className="py-3">
                      <dt className="font-semibold">{option.label[lang]}</dt>
                      {option.choices.map((choice) => (
                        <dd key={choice.label.en} className="mt-1 flex items-baseline justify-between gap-4 soft">
                          <span>{choice.label[lang]}</span>
                          {choice.price > 0 ? <Money value={choice.price} plus /> : <span>{t('included', 'ضمن السعر')}</span>}
                        </dd>
                      ))}
                    </div>
                  ) : (
                    <div key={option.id} className="flex items-baseline justify-between gap-4 py-3">
                      <dt>{option.label[lang]}</dt>
                      <dd>
                        <Money value={option.price} plus />
                      </dd>
                    </div>
                  ),
                )}
              </dl>
              <Link to={`${to('/estimate')}?need=${service.id}`} className="btn-line mt-4 w-full">
                {t('Add to an estimate', 'أضفه إلى التقدير')}
              </Link>
            </div>
          </article>
        ))}

        <section className="py-10" aria-labelledby="extras">
          <h2 id="extras" className="text-3xl font-bold">
            {t('Two extras for any project', 'إضافتان لأي مشروع')}
          </h2>
          <dl className="mt-6 grid gap-8 md:grid-cols-2">
            <div className="border-t-4 border-flame pt-4">
              <dt className="font-display text-xl font-bold">
                {t('Rush delivery, ', 'تسليم مستعجل، ')}
                <span className="figure">+{RUSH_RATE * 100}%</span>
              </dt>
              <dd className="mt-1.5 soft">{t('We put a second team on it and deliver in about three quarters of the time.', 'نضع فريقاً ثانياً على المشروع ونسلّم في نحو ثلاثة أرباع المدة.')}</dd>
            </div>
            <div className="border-t-4 border-forest pt-4">
              <dt className="font-display text-xl font-bold">
                {t('Care after launch, ', 'متابعة بعد التسليم، ')}
                <Money value={CARE_MONTHLY} />
                {t(' a month', ' شهرياً')}
              </dt>
              <dd className="mt-1.5 soft">{t('Hosting, backups, updates and two hours of changes each month. Cancel whenever you like.', 'استضافة ونسخ احتياطي وتحديثات وساعتان من التعديلات كل شهر. تلغيها متى شئت.')}</dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  )
}
