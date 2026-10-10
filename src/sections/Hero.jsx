import { Link } from 'react-router-dom'
import { useT, useTo } from '../lib/i18n.jsx'

export default function Hero() {
  const t = useT()
  const to = useTo()
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* the soft violet glow behind the top corner */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 start-[2%] -z-10 h-[26rem] w-[34rem] max-w-[90vw] rounded-full bg-violet-300/45 blur-[90px]" />
      <div className="wrap py-24 text-center sm:py-32 lg:py-40">
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('Data to Enrich Your Online Business', 'بيانات تُثري أعمالك على الإنترنت')}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-gray-600 sm:text-xl">
          {t(
            'Unlock powerful insights with tailored business solutions that drive growth and success. Explore how our services can empower your business to thrive.',
            'اكتشف ما تقوله بياناتك عبر حلول أعمال مصممة لك تدفع النمو والنجاح. تعرّف على خدماتنا وكيف تساعد شركتك على الازدهار.',
          )}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link to={`${to('/')}#contact`} className="btn">
            {t('BE WITH US', 'كن معنا')}
          </Link>
          <Link to={`${to('/')}#services`} className="inline-flex min-h-12 items-center rounded-md px-2 font-semibold text-gray-900 underline-offset-4 hover:text-brand hover:underline">
            {t('See our services', 'تعرّف على خدماتنا')}
          </Link>
        </div>
      </div>
    </section>
  )
}
