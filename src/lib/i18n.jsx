import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'

// English is the default language and lives at the root; Arabic pages live under /ar.
const LangContext = createContext('en')

export function LangProvider({ lang, children }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** Picks the right language: t('Services', 'الخدمات') or t({ en, ar }). */
export function useT() {
  const lang = useContext(LangContext)
  return (en, ar) => (typeof en === 'object' && en !== null ? en[lang] : lang === 'ar' ? (ar ?? en) : en)
}

/** Turns a site path like "/privacy" into the address for the current language. */
export function useTo() {
  const lang = useContext(LangContext)
  return (path) => localize(path, lang)
}

export function localize(path, lang) {
  if (lang === 'en') return path
  return path === '/' ? '/ar' : `/ar${path}`
}

/** The same page in the other language. */
export function useOtherLanguage() {
  const lang = useContext(LangContext)
  const { pathname } = useLocation()
  const bare = lang === 'ar' ? pathname.replace(/^\/ar(?=\/|$)/, '') || '/' : pathname
  const other = lang === 'ar' ? 'en' : 'ar'
  return { lang: other, to: localize(bare, other) }
}
