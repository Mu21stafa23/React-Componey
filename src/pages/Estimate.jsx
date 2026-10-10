import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Money, Range } from '../components/Money.jsx'
import QuoteSlip from '../components/QuoteSlip.jsx'
import { Check } from '../components/icons.jsx'
import { CARE_MONTHLY, RUSH_RATE, emptySelection, estimate, fromQuery, services, toQuery } from '../lib/estimate.js'
import { useTitle } from '../lib/hooks.js'
import { useLang, useT, useTo, weeksLabel } from '../lib/i18n.jsx'

/** A checkbox drawn as a box with a tick, with the real input kept for the keyboard and screen readers. */
function Tick({ checked, onChange, id, className = 'mt-0.5' }) {
  return (
    <>
      <input id={id} type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <span
        aria-hidden="true"
        className={`${className} grid h-7 w-7 shrink-0 place-items-center rounded-lg border-2 peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-flame ${checked ? 'border-forest bg-forest text-white' : 'border-line bg-white'}`}
      >
        {checked && <Check width={18} height={18} strokeWidth={3} />}
      </span>
    </>
  )
}

function ServiceBlock({ service, chosen, onToggle, onOption }) {
  const lang = useLang()
  const t = useT()
  const on = Boolean(chosen)
  return (
    <div className={`relative rounded-2xl border-2 bg-white transition-colors ${on ? 'border-forest' : 'border-transparent'}`}>
      <label className="flex cursor-pointer items-start gap-4 p-4 sm:p-5">
        <Tick checked={on} onChange={onToggle} id={`service-${service.id}`} />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span className="font-display text-xl font-bold">{service.name[lang]}</span>
            <Money value={service.base} className="font-semibold text-forest" />
          </span>
          <span className="mt-0.5 block soft">{service.blurb[lang]}</span>
          <span className="mt-0.5 block text-sm soft">
            {t('about ', 'نحو ')}
            {weeksLabel(service.weeks, lang)}
          </span>
        </span>
      </label>
      {on && (
        <div className="space-y-2 border-t border-line px-4 pb-4 pt-4 sm:px-5">
          {service.options.map((option) =>
            option.choices ? (
              <fieldset key={option.id}>
                <legend className="font-semibold">{option.label[lang]}</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {option.choices.map((choice, index) => (
                    <label key={choice.label.en} className="cursor-pointer">
                      <input type="radio" name={`${service.id}-${option.id}`} className="peer sr-only" checked={(chosen[option.id] ?? 0) === index} onChange={() => onOption(option.id, index)} />
                      <span className="flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-1.5 peer-checked:border-forest peer-checked:bg-forest peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-flame">
                        {choice.label[lang]}
                        {choice.price > 0 && <Money value={choice.price} plus className="text-sm opacity-80" />}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <label key={option.id} className="relative flex min-h-11 cursor-pointer items-center gap-3">
                <Tick checked={Boolean(chosen[option.id])} onChange={() => onOption(option.id, (was) => !was)} className="" />
                <span className="flex flex-1 flex-wrap items-center justify-between gap-x-4">
                  <span>{option.label[lang]}</span>
                  <Money value={option.price} plus className="text-sm soft" />
                </span>
              </label>
            ),
          )}
        </div>
      )}
    </div>
  )
}

export default function Estimate() {
  const lang = useLang()
  const t = useT()
  const to = useTo()
  const [params, setParams] = useSearchParams()
  const selection = useMemo(() => fromQuery(params), [params])
  const result = estimate(selection)
  const [copied, setCopied] = useState(false)
  useTitle(t('Price your project | Moon Studio', 'احسب تكلفة مشروعك | مون ستوديو'))

  // The address bar holds the whole estimate, so it survives a reload and can be shared.
  // Each change starts from the address as it is at that moment, not from the last render,
  // so two quick taps cannot overwrite one another.
  const change = (edit) => {
    const now = fromQuery(new URLSearchParams(window.location.search))
    setCopied(false)
    setParams(toQuery(edit(now)), { replace: true, preventScrollReset: true })
  }
  const toggleService = (id) =>
    change((now) => {
      const picked = { ...now.picked }
      if (picked[id]) delete picked[id]
      else picked[id] = {}
      return { ...now, picked }
    })
  // `value` is the new value, or a function of the old one.
  const setOption = (id, optionId, value) =>
    change((now) => {
      const chosen = now.picked[id]
      if (!chosen) return now
      const next = typeof value === 'function' ? value(chosen[optionId]) : value
      return { ...now, picked: { ...now.picked, [id]: { ...chosen, [optionId]: next } } }
    })
  const flip = (key) => change((now) => ({ ...now, [key]: !now[key] }))

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied('done')
    } catch {
      // Some browsers refuse the clipboard; the address bar holds the same link.
      setCopied('manual')
    }
  }
  const query = toQuery(selection).toString()

  return (
    <>
      <header className="no-print bg-forest text-white">
        <div className="wrap pb-12 pt-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{t('Price your project', 'احسب تكلفة مشروعك')}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/85">
            {t('Tick what you need and answer a few questions. The estimate on the side keeps up with you.', 'اختر ما تحتاجه وأجب عن أسئلة قليلة، والتقدير بجانبك يتغيّر معك.')}
          </p>
        </div>
      </header>

      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-8 pb-28 pt-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:pb-16">
        <div className="no-print space-y-8">
          <section aria-labelledby="pick">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="pick" className="text-2xl font-bold">
                {t('What do you need?', 'ماذا تحتاج؟')}
              </h2>
              {!result.empty && (
                <button type="button" className="link py-2" onClick={() => change(() => emptySelection)}>
                  {t('Start again', 'ابدأ من جديد')}
                </button>
              )}
            </div>
            <div className="mt-4 space-y-3">
              {services.map((service) => (
                <ServiceBlock key={service.id} service={service} chosen={selection.picked[service.id]} onToggle={() => toggleService(service.id)} onOption={(optionId, value) => setOption(service.id, optionId, value)} />
              ))}
            </div>
          </section>

          <section aria-labelledby="extras">
            <h2 id="extras" className="text-2xl font-bold">
              {t('Anything else?', 'هل تريد شيئاً آخر؟')}
            </h2>
            <div className="mt-4 space-y-3">
              <label className={`relative flex cursor-pointer items-start gap-4 rounded-2xl border-2 bg-white p-4 sm:p-5 ${selection.rush ? 'border-forest' : 'border-transparent'}`}>
                <Tick checked={selection.rush} onChange={() => flip('rush')} id="rush" />
                <span className="flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-display text-xl font-bold">{t('I am in a hurry', 'أنا مستعجل')}</span>
                    <span className="figure font-semibold text-forest">+{RUSH_RATE * 100}%</span>
                  </span>
                  <span className="mt-0.5 block soft">{t('Delivered in about three quarters of the time.', 'التسليم في نحو ثلاثة أرباع المدة.')}</span>
                </span>
              </label>
              <label className={`relative flex cursor-pointer items-start gap-4 rounded-2xl border-2 bg-white p-4 sm:p-5 ${selection.care ? 'border-forest' : 'border-transparent'}`}>
                <Tick checked={selection.care} onChange={() => flip('care')} id="care" />
                <span className="flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-display text-xl font-bold">{t('Look after it once it is live', 'تابعوه بعد التسليم')}</span>
                    <span className="font-semibold text-forest">
                      <Money value={CARE_MONTHLY} /> {t('a month', 'شهرياً')}
                    </span>
                  </span>
                  <span className="mt-0.5 block soft">{t('Hosting, backups, updates and two hours of changes each month.', 'استضافة ونسخ احتياطي وتحديثات وساعتان من التعديلات كل شهر.')}</span>
                </span>
              </label>
            </div>
          </section>
        </div>

        <div className="lg:sticky lg:top-6">
          <QuoteSlip id="slip" selection={selection} detailed>
            {!result.empty && (
              <>
                <Link to={`${to('/contact')}?${query}`} className="btn-flame">
                  {t('Send this as a request', 'أرسل هذا التقدير كطلب')}
                </Link>
                <div className="grid grid-cols-2 gap-2.5">
                  <button type="button" className="btn-line px-3" onClick={copyLink}>
                    {t('Copy link', 'انسخ الرابط')}
                  </button>
                  <button type="button" className="btn-line px-3" onClick={() => window.print()}>
                    {t('Print', 'اطبع')}
                  </button>
                </div>
                <p role="status" className="min-h-5 text-center text-sm font-semibold text-forest">
                  {copied === 'done' && t('Link copied. Anyone who opens it sees this estimate.', 'نُسخ الرابط. من يفتحه يرى هذا التقدير.')}
                  {copied === 'manual' && t('Copy the address from the top of the browser: it holds this estimate.', 'انسخ العنوان من أعلى المتصفح، فهو يحمل هذا التقدير.')}
                </p>
              </>
            )}
          </QuoteSlip>
        </div>
      </div>

      {!result.empty && (
        <div className="no-print fixed inset-x-0 bottom-0 z-20 border-t border-white/15 bg-forest text-white lg:hidden">
          <div className="wrap flex items-center justify-between gap-3 py-3">
            <div className="min-w-0">
              <Range low={result.low} high={result.high} className="font-display text-lg font-bold" />
              <span className="block text-sm text-white/80">
                {t('about ', 'نحو ')}
                {weeksLabel(result.weeks, lang)}
              </span>
            </div>
            <a href="#slip" className="btn min-h-11 shrink-0 bg-moon px-4 text-forest-deep">
              {t('See estimate', 'عرض التقدير')}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
