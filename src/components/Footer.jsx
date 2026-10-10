import { Link } from 'react-router-dom'
import { company } from '../lib/company.js'
import { useLang, useT, useTo } from '../lib/i18n.jsx'
import { useSectionLinks } from './Header.jsx'
import { Logo } from './icons.jsx'

export default function Footer() {
  const lang = useLang()
  const t = useT()
  const to = useTo()
  const links = [...useSectionLinks(), { to: to('/privacy'), label: t('Privacy policy', 'سياسة الخصوصية') }]
  return (
    <footer className="bg-night-soft text-gray-300">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo name={company.name[lang]} className="!text-white" />
          <p className="mt-3 text-gray-400">{t('Data consulting, product development and digital marketing for online businesses, from one team.', 'استشارات بيانات وتطوير منتجات وتسويق رقمي للأعمال على الإنترنت، من فريق واحد.')}</p>
        </div>
        <nav aria-label={t('Footer', 'روابط أسفل الصفحة')}>
          <ul className="grid grid-cols-2 gap-x-10 sm:grid-cols-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-block rounded py-2.5 text-gray-300 underline-offset-4 hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-6 text-sm text-gray-400">
          <span dir="ltr" className="inline-block">
            © {new Date().getFullYear()} {company.name.en}.
          </span>{' '}
          {t('A demo company website: the company, its numbers and its contact details are examples.', 'موقع تجريبي لشركة افتراضية: الشركة وأرقامها وبيانات التواصل أمثلة للعرض.')}
        </p>
      </div>
    </footer>
  )
}
