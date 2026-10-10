import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useOtherLanguage, useT, useTo } from '../lib/i18n.jsx'
import { Close, Logo, Menu } from './icons.jsx'

/** The links to the sections of the home page, shared by the header and the footer. */
export function useSectionLinks() {
  const t = useT()
  const to = useTo()
  return [
    { to: `${to('/')}#work`, label: t('Work with us', 'اعمل معنا') },
    { to: `${to('/')}#services`, label: t('Services', 'الخدمات') },
    { to: `${to('/')}#about`, label: t('About', 'عن الشركة') },
    { to: `${to('/')}#contact`, label: t('Contact', 'تواصل') },
  ]
}

export default function Header() {
  const t = useT()
  const to = useTo()
  const other = useOtherLanguage()
  const location = useLocation()
  const links = useSectionLinks()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.key])

  const linkClass = 'rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-brand'
  const language = (
    <Link to={other.to} lang={other.lang} hrefLang={other.lang} className={linkClass}>
      {other.lang === 'ar' ? 'العربية' : 'English'}
    </Link>
  )

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200/70 bg-white/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link to={to('/')} className="flex min-h-11 items-center rounded-md" aria-label={t('ECO, home page', 'ECO، الصفحة الرئيسية')}>
          <Logo />
        </Link>
        <nav aria-label={t('Main', 'القائمة الرئيسية')} className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </Link>
          ))}
          {language}
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
          <span className="sr-only">{open ? t('Close menu', 'أغلق القائمة') : t('Open menu', 'افتح القائمة')}</span>
        </button>
      </div>
      {open && (
        <nav id="menu" aria-label={t('Main', 'القائمة الرئيسية')} className="absolute inset-x-0 top-full border-b border-gray-200 bg-white shadow-lg md:hidden">
          <div className="wrap flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className={`${linkClass} py-3`}>
                {link.label}
              </Link>
            ))}
            <Link to={other.to} lang={other.lang} hrefLang={other.lang} className={`${linkClass} py-3`}>
              {other.lang === 'ar' ? 'العربية' : 'English'}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
