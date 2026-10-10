import { CARE_MONTHLY, RUSH_RATE, VAT_RATE, estimate, partLabel } from '../lib/estimate.js'
import { useAnimated } from '../lib/hooks.js'
import { money, useLang, useT, weeksLabel } from '../lib/i18n.jsx'
import { Money, Range } from './Money.jsx'
import { Crescent } from './icons.jsx'

const step = (value) => Math.round(value / 100) * 100

/**
 * The estimate, written out like a slip of paper: what was picked, what it adds up to and
 * how long it takes. `detailed` lists every option under its service.
 */
export default function QuoteSlip({ selection, detailed = false, id, className = '', children }) {
  const lang = useLang()
  const t = useT()
  const result = estimate(selection)
  const low = useAnimated(result.low)
  const high = useAnimated(result.high)
  const today = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())

  return (
    <section id={id} aria-label={t('Your estimate', 'تقديرك')} className={`text-ink drop-shadow-[0_18px_30px_rgba(10,56,45,0.22)] print:drop-shadow-none ${className}`}>
      <div className="rounded-t-2xl bg-white px-5 pb-5 pt-5 sm:px-7 sm:pt-6 print:rounded-2xl print:border print:border-line">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold">{t('Estimate', 'تقدير مبدئي')}</h2>
          <span className="flex items-center gap-2 text-sm font-semibold text-forest">
            <Crescent size={18} />
            {t('Moon Studio', 'مون ستوديو')}
          </span>
        </div>
        {detailed && <p className="mt-1 text-sm soft">{t(`Made on ${today}`, `صدر في ${today}`)}</p>}

        {result.empty ? (
          <p className="mt-5 border-t-2 border-dashed border-line pt-5 soft">{t('Pick at least one service and the estimate appears here.', 'اختر خدمة واحدة على الأقل ليظهر التقدير هنا.')}</p>
        ) : (
          <>
            <ul className="mt-4 divide-y divide-dashed divide-line border-y-2 border-dashed border-line">
              {result.lines.map((line) => (
                <li key={line.id} className="py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{line.name[lang]}</span>
                    <Money value={detailed ? line.parts[0].price : line.price} className="font-semibold" />
                  </div>
                  {detailed && line.parts.length > 1 && (
                    <ul className="mt-1.5 space-y-1 text-sm soft">
                      {line.parts.slice(1).map((part) => (
                        <li key={part.label.en} className="flex items-baseline justify-between gap-4">
                          <span>{partLabel(part, lang)}</span>
                          <Money value={part.price} plus />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {selection.rush && (
                <li className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-semibold">{t(`Rush delivery (${RUSH_RATE * 100}%)`, `تسليم مستعجل (${RUSH_RATE * 100}%)`)}</span>
                  <Money value={result.rushFee} plus className="font-semibold" />
                </li>
              )}
            </ul>

            <div className="mt-4">
              <p className="text-sm font-semibold soft">{t('Likely total', 'المجموع المتوقع')}</p>
              <p className="mt-0.5 text-[1.75rem] font-bold leading-tight text-forest min-[400px]:text-[2.1rem]" aria-hidden="true" data-total>
                <Range low={step(low)} high={step(high)} />
              </p>
              <p className="sr-only" role="status">
                {t(`Likely total ${money(result.low, 'en')} to ${money(result.high, 'en')}`, `المجموع المتوقع من ${money(result.low, 'ar')} إلى ${money(result.high, 'ar')}`)}
              </p>
            </div>

            <dl className="mt-4 space-y-1.5 text-[0.95rem]">
              <div className="flex justify-between gap-4">
                <dt className="soft">{t('Time to deliver', 'مدة التنفيذ')}</dt>
                <dd className="font-semibold" data-weeks>
                  {t('about ', 'نحو ')}
                  {weeksLabel(result.weeks, lang)}
                </dd>
              </div>
              {selection.care && (
                <div className="flex justify-between gap-4">
                  <dt className="soft">{t('Care after launch', 'متابعة بعد التسليم')}</dt>
                  <dd className="font-semibold">
                    <Money value={CARE_MONTHLY} /> {t('a month', 'شهرياً')}
                  </dd>
                </div>
              )}
            </dl>

            <p className="mt-4 text-sm soft">
              {t(
                `Before ${VAT_RATE * 100}% VAT. The range covers what only a conversation reveals; the final price is fixed in writing before work starts.`,
                `قبل ضريبة القيمة المضافة ${VAT_RATE * 100}%. الفرق بين الرقمين لما لا يتضح إلا بالحديث، والسعر النهائي يُثبَّت كتابةً قبل بدء العمل.`,
              )}
            </p>
          </>
        )}

        {children && <div className="no-print mt-5 flex flex-col gap-2.5">{children}</div>}
      </div>
      <div className="slip-edge print:hidden" aria-hidden="true" />
    </section>
  )
}
