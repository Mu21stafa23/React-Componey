import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Money } from '../components/Money.jsx'
import ProjectLink from '../components/ProjectLink.jsx'
import QuoteSlip from '../components/QuoteSlip.jsx'
import { Check } from '../components/icons.jsx'
import { projects } from '../data/work.js'
import { estimate, services, toQuery } from '../lib/estimate.js'
import { useTitle } from '../lib/hooks.js'
import { useLang, useT, useTo, weeksLabel } from '../lib/i18n.jsx'

const steps = [
  {
    title: { en: 'An estimate in two minutes', ar: 'تقدير في دقيقتين' },
    text: { en: 'Pick what you need in the estimator. You see a likely price and a timeline before any call.', ar: 'تختار ما تحتاجه من الحاسبة، فتعرف السعر المتوقع والمدة قبل أي اتصال.' },
  },
  {
    title: { en: 'A half-hour call', ar: 'جلسة نصف ساعة' },
    text: { en: 'We hear the details, then send a written offer with a fixed price and a delivery date.', ar: 'نسمع منك التفاصيل، ثم نرسل عرضاً مكتوباً بسعر ثابت وتاريخ تسليم.' },
  },
  {
    title: { en: 'Built in stages', ar: 'بناء على مراحل' },
    text: { en: 'You see the work every week on a private link, and pay in three parts tied to what you received.', ar: 'ترى العمل كل أسبوع على رابط خاص، وتدفع على ثلاث دفعات مرتبطة بما استلمته.' },
  },
  {
    title: { en: 'Launch, then thirty days', ar: 'إطلاق ثم ثلاثون يوماً' },
    text: { en: 'We publish, train your team, and stay for thirty days to fix anything at no charge.', ar: 'ننشر العمل وندرّب فريقك، ونبقى ثلاثين يوماً نصلح أي شيء بلا مقابل.' },
  },
]

const questions = [
  {
    q: { en: 'Is the estimator’s price final?', ar: 'هل السعر في الحاسبة نهائي؟' },
    a: {
      en: 'No. It is a range built from what you picked. The final price is written in the offer after a short call, and it only changes after that if what you ask for changes.',
      ar: 'لا. هو مدى مبني على ما اخترته. السعر النهائي يُكتب في العرض بعد جلسة قصيرة، ولا يتغير بعدها إلا إذا تغيّر المطلوب.',
    },
  },
  {
    q: { en: 'Why do you publish prices?', ar: 'لماذا تعلنون الأسعار؟' },
    a: {
      en: 'Because “how much?” is every owner’s first question, and nobody should sit through three meetings to hear the answer.',
      ar: 'لأن «بكم؟» أول سؤال عند كل صاحب منشأة، ولا ينبغي أن يحضر ثلاثة اجتماعات ليسمع الجواب.',
    },
  },
  {
    q: { en: 'What if I need something that is not on the list?', ar: 'ماذا لو احتجت شيئاً غير موجود في القائمة؟' },
    a: {
      en: 'Write it in your message. Most projects have something of their own, and we price it in the offer.',
      ar: 'اكتبه في رسالتك. في أغلب المشاريع شيء خاص بها، ونسعّره في العرض.',
    },
  },
  {
    q: { en: 'Who owns the work when it is done?', ar: 'من يملك العمل بعد التسليم؟' },
    a: {
      en: 'You do: the code, the designs and every account are in your name. Monthly care is optional.',
      ar: 'أنت: الكود والتصاميم وكل الحسابات باسمك. والمتابعة الشهرية اختيارية.',
    },
  },
]

export default function Home() {
  const lang = useLang()
  const t = useT()
  const to = useTo()
  const [selection, setSelection] = useState({ picked: { site: {} }, rush: false, care: false })
  const empty = estimate(selection).empty
  useTitle(t('Moon Studio | A website or store at a price you know before we talk', 'مون ستوديو | موقعك أو متجرك بسعر تعرفه قبل أن نتحدث'))

  const toggle = (id) => {
    const picked = { ...selection.picked }
    if (picked[id]) delete picked[id]
    else picked[id] = {}
    setSelection({ ...selection, picked })
  }
  const query = toQuery(selection).toString()
  const [first, ...rest] = projects.slice(0, 3)

  return (
    <>
      <section className="bg-forest text-white">
        <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-10 pb-14 pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14 lg:pb-0 lg:pt-14">
          <div className="lg:pb-16">
            <h1 className="text-[2.4rem] font-bold sm:text-5xl lg:text-[3.4rem] ltr:leading-[1.08]">
              {t('Your website or store, at a price you know before we talk', 'موقعك أو متجرك، بسعر تعرفه قبل أن نتحدث')}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              {t(
                'Moon Studio builds websites, stores and apps for small businesses. Our prices are public: tap what you need and the estimate adds itself up.',
                'مون ستوديو يبني المواقع والمتاجر والتطبيقات للمنشآت الصغيرة. أسعارنا معلنة: اضغط على ما تحتاجه والتقدير يُجمع أمامك.',
              )}
            </p>
            <fieldset className="mt-8">
              <legend className="font-display text-lg font-semibold text-moon">{t('What do you need?', 'ماذا تحتاج؟')}</legend>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {services.map((service) => {
                  const on = Boolean(selection.picked[service.id])
                  return (
                    <button
                      key={service.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(service.id)}
                      className={`flex min-h-[3.75rem] items-center gap-3 rounded-xl border px-4 py-2 text-start transition-colors ${on ? 'border-moon bg-moon text-forest-deep' : 'border-white/30 text-white hover:border-white/70 hover:bg-white/5'}`}
                    >
                      <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border ${on ? 'border-forest bg-forest text-moon' : 'border-white/50'}`}>{on && <Check width={16} height={16} strokeWidth={3} />}</span>
                      <span className="min-w-0">
                        <span className="block font-semibold">{service.name[lang]}</span>
                        <span className={`block text-sm ${on ? 'text-forest' : 'text-white/75'}`}>
                          {t('from ', 'من ')}
                          <Money value={service.base} />
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </fieldset>
          </div>
          <QuoteSlip selection={selection} className="lg:mt-2">
            {!empty && (
              <Link to={`${to('/estimate')}?${query}`} className="btn-flame">
                {t('Add the details', 'أضف التفاصيل')}
              </Link>
            )}
          </QuoteSlip>
        </div>
      </section>

      <section className="wrap py-16" aria-labelledby="build">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="build" className="text-3xl font-bold sm:text-4xl">
            {t('What we build, and what it starts at', 'ما نبنيه، وبكم يبدأ')}
          </h2>
          <Link to={to('/services')} className="link inline-block py-2">
            {t('Every price, line by line', 'كل الأسعار بالتفصيل')}
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.id} className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-[15rem_minmax(0,1fr)_11rem] md:items-baseline">
              <h3 className="text-xl font-bold text-forest">{service.name[lang]}</h3>
              <p className="soft">{service.blurb[lang]}</p>
              <p className="md:text-end">
                <span className="font-semibold">
                  {t('from ', 'من ')}
                  <Money value={service.base} />
                </span>
                <span className="block text-sm soft">
                  {t('about ', 'نحو ')}
                  {weeksLabel(service.weeks, lang)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-leaf/60 py-16" aria-labelledby="work">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="work" className="text-3xl font-bold sm:text-4xl">
              {t('Recent work', 'من أعمالنا')}
            </h2>
            <Link to={to('/work')} className="link inline-block py-2">
              {t('All projects', 'كل المشاريع')}
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-10">
            <ProjectLink project={first} wide />
            <div className="grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-2">
              {rest.map((project) => (
                <ProjectLink key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-16" aria-labelledby="how">
        <h2 id="how" className="text-3xl font-bold sm:text-4xl">
          {t('From the first number to launch day', 'من أول رقم إلى يوم الإطلاق')}
        </h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title.en} className="border-t-4 border-forest pt-4">
              <span className="figure block text-4xl font-bold text-flame ltr:text-left rtl:text-right">{index + 1}</span>
              <h3 className="mt-1 text-xl font-bold">{step.title[lang]}</h3>
              <p className="mt-1.5 soft">{step.text[lang]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap pb-16" aria-labelledby="questions">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <h2 id="questions" className="text-3xl font-bold sm:text-4xl">
            {t('Straight answers about price', 'أجوبة مباشرة عن السعر')}
          </h2>
          <div className="divide-y divide-line border-y border-line">
            {questions.map((item) => (
              <details key={item.q.en} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-3 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q[lang]}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf text-xl leading-none text-forest transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-4 soft">{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="wrap flex flex-col items-start gap-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{t('Know what your project costs, now', 'اعرف تكلفة مشروعك الآن')}</h2>
            <p className="mt-1 text-white/85">{t('Two minutes, no sign-up, and nobody calls you unless you ask.', 'دقيقتان، بلا تسجيل، ولن يتصل بك أحد إلا إن طلبت.')}</p>
          </div>
          <Link to={to('/estimate')} className="btn-flame shrink-0">
            {t('Open the estimator', 'افتح الحاسبة')}
          </Link>
        </div>
      </section>
    </>
  )
}
