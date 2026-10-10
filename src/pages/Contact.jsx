import { useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Range } from '../components/Money.jsx'
import { Check } from '../components/icons.jsx'
import { estimate, fromQuery, summarize, toQuery } from '../lib/estimate.js'
import { useTitle } from '../lib/hooks.js'
import { useLang, useT, useTo, weeksLabel } from '../lib/i18n.jsx'
import { checkRequest } from '../lib/validate.js'

const blank = { name: '', company: '', email: '', phone: '', message: '' }

const problemText = {
  name: { en: 'Write your name, so we know who to answer.', ar: 'اكتب اسمك لنعرف من نجيب.' },
  emailMissing: { en: 'Write an e-mail address for the reply.', ar: 'اكتب بريداً إلكترونياً ليصلك الرد.' },
  emailShape: { en: 'This address looks incomplete. It should read like name@example.com.', ar: 'هذا العنوان يبدو ناقصاً. الشكل الصحيح مثل name@example.com.' },
  phone: { en: 'A Saudi mobile number has ten digits and starts with 05. Or leave this empty.', ar: 'رقم الجوال السعودي عشرة أرقام ويبدأ بـ 05. أو اترك الخانة فارغة.' },
  message: { en: 'Tell us in a sentence or two what you need.', ar: 'اكتب في جملة أو جملتين ما الذي تحتاجه.' },
}

function Field({ id, label, hint, problem, children }) {
  const lang = useLang()
  return (
    <div>
      <label htmlFor={id} className="font-semibold">
        {label}
        {hint && <span className="font-normal soft"> ({hint})</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {problem && (
        <p id={`${id}-problem`} className="mt-1.5 text-sm font-semibold text-flame-deep">
          {problemText[problem][lang]}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const lang = useLang()
  const t = useT()
  const to = useTo()
  const [params] = useSearchParams()
  const selection = useMemo(() => fromQuery(params), [params])
  const result = estimate(selection)
  const hasEstimate = !result.empty
  const [values, setValues] = useState(blank)
  const [problems, setProblems] = useState({})
  const [sent, setSent] = useState(false)
  const form = useRef(null)
  useTitle(t('Contact | Moon Studio', 'تواصل | مون ستوديو'))

  const set = (field) => (event) => {
    const next = { ...values, [field]: event.target.value }
    setValues(next)
    // Once a field has been flagged, clear the flag as soon as it is put right.
    if (problems[field]) setProblems(checkRequest(next, hasEstimate))
  }
  const submit = (event) => {
    event.preventDefault()
    const found = checkRequest(values, hasEstimate)
    setProblems(found)
    const first = Object.keys(found)[0]
    if (first) form.current?.querySelector(`#${first}`)?.focus()
    else setSent(true)
  }
  const props = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: set(field),
    className: `field ${problems[field] ? 'field-invalid' : ''}`,
    'aria-invalid': problems[field] ? true : undefined,
    'aria-describedby': problems[field] ? `${field}-problem` : undefined,
  })
  const query = toQuery(selection).toString()

  return (
    <>
      <header className="bg-forest text-white">
        <div className="wrap pb-12 pt-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{hasEstimate ? t('Send your request', 'أرسل طلبك') : t('Tell us what you need', 'أخبرنا بما تحتاجه')}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/85">{t('We answer within one working day with a time for a half-hour call.', 'نرد خلال يوم عمل واحد ونقترح موعداً لجلسة نصف ساعة.')}</p>
        </div>
      </header>

      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        {sent ? (
          <div role="status" className="rounded-2xl bg-white p-6 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-white">
              <Check width={26} height={26} strokeWidth={3} />
            </span>
            <h2 className="mt-4 text-2xl font-bold">{t(`Thank you, ${values.name.trim()}. The form is complete.`, `شكراً ${values.name.trim()}، النموذج مكتمل.`)}</h2>
            <p className="mt-2 max-w-xl soft">
              {t(
                'Moon Studio is a demo, so nothing was sent and nobody will write back. On a real site, this is where your request would reach the team.',
                'مون ستوديو موقع تجريبي، فلم يُرسَل شيء ولن يرد عليك أحد. في موقع حقيقي يصل طلبك هنا إلى الفريق.',
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={to('/work')} className="btn-forest">
                {t('See our work', 'شاهد أعمالنا')}
              </Link>
              <button
                type="button"
                className="btn-line"
                onClick={() => {
                  setValues(blank)
                  setSent(false)
                }}
              >
                {t('Write another request', 'اكتب طلباً آخر')}
              </button>
            </div>
          </div>
        ) : (
          <form ref={form} onSubmit={submit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label={t('Your name', 'اسمك')} problem={problems.name}>
                <input type="text" autoComplete="name" {...props('name')} />
              </Field>
              <Field id="company" label={t('Business name', 'اسم المنشأة')} hint={t('optional', 'اختياري')}>
                <input type="text" autoComplete="organization" {...props('company')} />
              </Field>
              <Field id="email" label={t('E-mail', 'البريد الإلكتروني')} problem={problems.email}>
                <input type="email" autoComplete="email" dir="ltr" {...props('email')} className={`${props('email').className} rtl:text-right`} />
              </Field>
              <Field id="phone" label={t('Mobile', 'رقم الجوال')} hint={t('optional', 'اختياري')} problem={problems.phone}>
                <input type="tel" autoComplete="tel" dir="ltr" placeholder="05XXXXXXXX" {...props('phone')} className={`${props('phone').className} rtl:text-right`} />
              </Field>
            </div>
            <Field id="message" label={hasEstimate ? t('Anything to add?', 'هل تضيف شيئاً؟') : t('What do you need?', 'ماذا تحتاج؟')} hint={hasEstimate ? t('optional', 'اختياري') : undefined} problem={problems.message}>
              <textarea rows={5} {...props('message')} />
            </Field>
            <button type="submit" className="btn-flame w-full sm:w-auto">
              {t('Send request', 'أرسل الطلب')}
            </button>
          </form>
        )}

        <aside aria-label={t('Your estimate', 'تقديرك')}>
          {hasEstimate ? (
            <div className="rounded-2xl bg-white p-5 sm:p-6">
              <h2 className="text-xl font-bold">{t('Attached estimate', 'التقدير المرفق')}</h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed">{summarize(selection, lang)}</p>
              <p className="mt-4 border-t-2 border-dashed border-line pt-4 text-2xl font-bold text-forest">
                <Range low={result.low} high={result.high} />
              </p>
              <p className="mt-1 soft">
                {t('about ', 'نحو ')}
                {weeksLabel(result.weeks, lang)}
              </p>
              <Link to={`${to('/estimate')}?${query}`} className="link mt-2 inline-block py-2">
                {t('Change the estimate', 'عدّل التقدير')}
              </Link>
            </div>
          ) : (
            <div className="rounded-2xl bg-leaf p-5 sm:p-6">
              <h2 className="text-xl font-bold">{t('Want a number first?', 'تريد رقماً أولاً؟')}</h2>
              <p className="mt-2">{t('Build an estimate in two minutes and send it with your request.', 'ابنِ تقديراً في دقيقتين وأرسله مع طلبك.')}</p>
              <Link to={to('/estimate')} className="btn-forest mt-4">
                {t('Open the estimator', 'افتح الحاسبة')}
              </Link>
            </div>
          )}
        </aside>
      </div>
    </>
  )
}
