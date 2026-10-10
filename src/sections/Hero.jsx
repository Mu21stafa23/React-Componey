import { Link } from 'react-router-dom'
import { company } from '../lib/company.js'
import { useT, useTo } from '../lib/i18n.jsx'

export default function Hero() {
  const t = useT()
  const to = useTo()
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* the soft violet glow behind the top corner */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-56 start-[-12%] -z-10 h-[52rem] w-[64rem] max-w-[160vw] bg-[radial-gradient(closest-side,rgba(196,181,253,0.5),rgba(199,210,254,0.28)_45%,rgba(224,231,255,0)_100%)]" />
      <div className="wrap py-24 text-center sm:py-32 lg:py-40">
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('Your data already knows how to grow your business', 'بياناتك تعرف كيف تنمو أعمالك')}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-gray-600 sm:text-xl">
          {t(
            `${company.name.en} reads the numbers your store, app and ads produce every day, then builds and markets what they point to. One team for advice, software and marketing.`,
            `في ${company.name.ar} نقرأ الأرقام التي ينتجها متجرك وتطبيقك وإعلاناتك كل يوم، ثم نبني ونسوّق ما تدلّ عليه. فريق واحد للاستشارة والبرمجة والتسويق.`,
          )}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link to={`${to('/')}#contact`} className="btn">
            {t('Talk to us', 'تحدّث معنا')}
          </Link>
          <Link to={`${to('/')}#services`} className="inline-flex min-h-12 items-center rounded-md px-2 font-semibold text-gray-900 underline-offset-4 hover:text-brand hover:underline">
            {t('See our services', 'تعرّف على خدماتنا')}
          </Link>
        </div>
      </div>
    </section>
  )
}
