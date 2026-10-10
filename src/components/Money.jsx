import { number, useLang } from '../lib/i18n.jsx'

const unit = (lang) => (lang === 'ar' ? 'ر.س' : 'SAR')

/** One amount: "12,500 ر.س" or "SAR 12,500". `plus` writes it as an addition. */
export function Money({ value, plus = false, className = '' }) {
  const lang = useLang()
  // English reads "+SAR 4,000"; Arabic keeps the sign on the figure: "+4,000 ر.س".
  const figure = <span className="figure">{`${plus && lang === 'ar' ? '+' : ''}${number(value)}`}</span>
  return (
    <span className={`whitespace-nowrap ${className}`}>
      {lang === 'en' && <span>{`${plus ? '+' : ''}${unit(lang)} `}</span>}
      {figure}
      {lang === 'ar' && <span> {unit(lang)}</span>}
    </span>
  )
}

/** A range: "9,000 – 10,500 ر.س". */
export function Range({ low, high, className = '' }) {
  const lang = useLang()
  return (
    <span className={`whitespace-nowrap ${className}`}>
      {lang === 'en' && <span className="text-[0.6em] font-semibold">{unit(lang)} </span>}
      <span className="figure">{number(low)}</span>
      <span aria-hidden="true"> – </span>
      <span className="sr-only">{lang === 'ar' ? ' إلى ' : ' to '}</span>
      <span className="figure">{number(high)}</span>
      {lang === 'ar' && <span className="text-[0.6em] font-semibold"> {unit(lang)}</span>}
    </span>
  )
}
