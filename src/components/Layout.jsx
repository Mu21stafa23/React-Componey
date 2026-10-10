import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LangProvider } from '../lib/i18n.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

/** The frame around every page, in one language. */
export default function Layout({ lang }) {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  // A link such as "/#contact" goes to that section; any other link starts at the top of the page.
  useEffect(() => {
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash, location.key])

  return (
    <LangProvider lang={lang}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand focus:shadow">
        {lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
