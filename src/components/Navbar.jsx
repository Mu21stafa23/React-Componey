import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useOtherLanguage, useT, useTo } from '../lib/i18n.jsx'
import { Close, Crescent, Menu } from './icons.jsx'

export function Brand({ className = '' }) {
  const t = useT()
  const to = useTo()
  return (
    <Link to={to('/')} className={`flex min-h-11 items-center gap-2.5 rounded-lg font-display text-xl font-bold ${className}`}>
      <Crescent className="text-moon" />
      {t('Moon Studio', 'مون ستوديو')}
    </Link>
  )
}

export default function Navbar() {
  const t = useT()
  const to = useTo()
  const other = useOtherLanguage()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const links = [
    { path: '/services', label: t('Services', 'الخدمات') },
    { path: '/work', label: t('Work', 'أعمالنا') },
    { path: '/contact', label: t('Contact', 'تواصل') },
  ]
  const linkClass = ({ isActive }) => `rounded-lg px-3 py-2 font-medium hover:bg-white/10 ${isActive ? 'text-moon underline decoration-2 underline-offset-8' : 'text-white'}`
  const language = (
    <Link to={other.to} lang={other.lang} hrefLang={other.lang} className="rounded-lg px-3 py-2 font-medium text-white hover:bg-white/10">
      {other.lang === 'ar' ? 'العربية' : 'English'}
    </Link>
  )

  return (
    <header className="no-print relative z-30 bg-forest text-white">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Brand />
        <nav aria-label={t('Main', 'الرئيسية')} className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={to(link.path)} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          {language}
          <Link to={to('/estimate')} className="btn-flame ms-2 min-h-11 px-5">
            {t('Price your project', 'احسب تكلفة مشروعك')}
          </Link>
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-lg hover:bg-white/10 md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
          <span className="sr-only">{open ? t('Close menu', 'أغلق القائمة') : t('Open menu', 'افتح القائمة')}</span>
        </button>
      </div>
      {open && (
        <nav id="menu" aria-label={t('Main', 'الرئيسية')} className="absolute inset-x-0 top-full border-t border-white/15 bg-forest pb-5 shadow-xl md:hidden">
          <div className="wrap flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <NavLink key={link.path} to={to(link.path)} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            {language}
            <Link to={to('/estimate')} className="btn-flame mt-2">
              {t('Price your project', 'احسب تكلفة مشروعك')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
