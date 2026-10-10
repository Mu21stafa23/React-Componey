import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from '../components/icons.jsx'
import { company } from '../lib/company.js'
import { useLang, useT, useTo } from '../lib/i18n.jsx'
import { checkMessage } from '../lib/validate.js'

const blank = { firstName: '', lastName: '', email: '', message: '', agree: false }

const problemText = {
  firstName: { en: 'Write your first name.', ar: 'اكتب اسمك الأول.' },
  lastName: { en: 'Write your last name.', ar: 'اكتب اسم العائلة.' },
  emailMissing: { en: 'Write an e-mail address for our reply.', ar: 'اكتب بريداً إلكترونياً ليصلك ردّنا.' },
  emailShape: { en: 'This address looks incomplete. It should read like name@example.com.', ar: 'هذا العنوان يبدو ناقصاً. الشكل الصحيح مثل name@example.com.' },
  message: { en: 'Tell us in a sentence or two how we can help.', ar: 'اكتب في جملة أو جملتين كيف نساعدك.' },
  agree: { en: 'Turn this on to agree before sending.', ar: 'فعّل هذا الخيار للموافقة قبل الإرسال.' },
}

function Problem({ id, code }) {
  const lang = useLang()
  if (!code) return null
  return (
    <p id={`${id}-problem`} className="mt-1.5 text-sm font-medium text-red-700">
      {problemText[code][lang]}
    </p>
  )
}

export default function Contact() {
  const t = useT()
  const to = useTo()
  const [values, setValues] = useState(blank)
  const [problems, setProblems] = useState({})
  const [sent, setSent] = useState(false)
  const form = useRef(null)

  const change = (field, value) => {
    const next = { ...values, [field]: value }
    setValues(next)
    // Once a field has been flagged, clear the flag as soon as it is put right.
    if (problems[field]) setProblems(checkMessage(next))
  }
  const submit = (event) => {
    event.preventDefault()
    const found = checkMessage(values)
    setProblems(found)
    const first = Object.keys(found)[0]
    if (first) form.current?.querySelector(`#${first}`)?.focus()
    else setSent(true)
  }
  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: (event) => change(name, event.target.value),
    className: `field mt-2 ${problems[name] ? 'field-invalid' : ''}`,
    'aria-invalid': problems[name] ? true : undefined,
    'aria-describedby': problems[name] ? `${name}-problem` : undefined,
  })

  return (
    <section id="contact" className="bg-white py-20 sm:py-24" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="text-center text-4xl font-bold tracking-tight text-brand sm:text-5xl">
          {t('Contact us', 'تواصل معنا')}
        </h2>

        <div className="mx-auto mt-12 max-w-xl">
          {sent ? (
            <div role="status" className="rounded-lg bg-slate-100 p-6 text-center sm:p-8">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-indigo-600 text-white">
                <Check width={26} height={26} />
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{t(`Thank you, ${values.firstName.trim()}.`, `شكراً ${values.firstName.trim()}.`)}</h3>
              <p className="mt-2 text-gray-700">
                {t(
                  'Your message is complete. ECO is a demo company, so nothing was sent and nobody will reply.',
                  'رسالتك مكتملة. ECO شركة افتراضية للعرض، فلم يُرسَل شيء ولن يصلك رد.',
                )}
              </p>
              <button
                type="button"
                className="btn mt-6"
                onClick={() => {
                  setValues(blank)
                  setSent(false)
                }}
              >
                {t('Write another message', 'اكتب رسالة أخرى')}
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={submit} noValidate>
              <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="text-sm font-semibold text-gray-900">
                    {t('First name', 'الاسم الأول')}
                  </label>
                  <input type="text" autoComplete="given-name" {...field('firstName')} />
                  <Problem id="firstName" code={problems.firstName} />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-semibold text-gray-900">
                    {t('Last name', 'اسم العائلة')}
                  </label>
                  <input type="text" autoComplete="family-name" {...field('lastName')} />
                  <Problem id="lastName" code={problems.lastName} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                    {t('Email', 'البريد الإلكتروني')}
                  </label>
                  <input type="email" autoComplete="email" dir="ltr" {...field('email')} className={`${field('email').className} rtl:text-right`} />
                  <Problem id="email" code={problems.email} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900">
                    {t('Message', 'الرسالة')}
                  </label>
                  <textarea rows={4} {...field('message')} />
                  <Problem id="message" code={problems.message} />
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex shrink-0 cursor-pointer items-center py-2">
                    <input
                      id="agree"
                      type="checkbox"
                      role="switch"
                      className="peer sr-only"
                      checked={values.agree}
                      onChange={(event) => change('agree', event.target.checked)}
                      aria-labelledby="agree-text"
                      aria-invalid={problems.agree ? true : undefined}
                      aria-describedby={problems.agree ? 'agree-problem' : undefined}
                    />
                    <span aria-hidden="true" className="h-7 w-12 rounded-full bg-gray-300 transition-colors peer-checked:bg-indigo-600 peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-600" />
                    <span aria-hidden="true" className="absolute start-1 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:ltr:translate-x-5 peer-checked:rtl:-translate-x-5 motion-reduce:transition-none" />
                  </label>
                  <p id="agree-text" className="text-sm text-gray-600">
                    {t('By selecting this, you agree to our ', 'باختيارك هذا فأنت توافق على ')}
                    <Link to={to('/privacy')} className="font-semibold text-indigo-600 underline-offset-4 hover:underline">
                      {t('privacy policy', 'سياسة الخصوصية')}
                    </Link>
                    .
                  </p>
                </div>
                <Problem id="agree" code={problems.agree} />
              </div>

              <button type="submit" className="btn mt-6 w-full">
                {t("Let's talk", 'لنتحدث')}
              </button>
            </form>
          )}

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">{t('Have any questions? Reach us at:', 'عندك سؤال؟ تواصل معنا عبر:')}</p>
            <p className="mt-3 text-lg font-medium text-gray-900">
              {t('Phone: ', 'الهاتف: ')}
              <a href={company.phone.href} dir="ltr" className="inline-block py-1.5 text-indigo-600 underline-offset-4 hover:underline">
                {company.phone.label}
              </a>
            </p>
            <p className="text-lg font-medium text-gray-900">
              {t('Email: ', 'البريد: ')}
              <a href={`mailto:${company.email}`} dir="ltr" className="inline-block break-all py-1.5 text-indigo-600 underline-offset-4 hover:underline">
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
