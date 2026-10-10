import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'

// Arabic is the default language and lives at the root; English pages live under /en.
const LangContext = createContext('ar')

export function LangProvider({ lang, children }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** A helper that picks the right language: t('Work', 'أعمالنا') or t(project.name). */
export function useT() {
  const lang = useContext(LangContext)
  return (en, ar) => (typeof en === 'object' && en !== null ? en[lang] : lang === 'ar' ? (ar ?? en) : en)
}

/** Turns a site path like "/work" into the address for the current language. */
export function useTo() {
  const lang = useContext(LangContext)
  return (path) => localize(path, lang)
}

export function localize(path, lang) {
  if (lang === 'ar') return path
  return path === '/' ? '/en' : `/en${path}`
}

/** The same page in the other language, keeping whatever follows the "?". */
export function useOtherLanguage() {
  const lang = useContext(LangContext)
  const { pathname, search } = useLocation()
  const bare = lang === 'en' ? pathname.replace(/^\/en(?=\/|$)/, '') || '/' : pathname
  const other = lang === 'en' ? 'ar' : 'en'
  return { lang: other, to: `${localize(bare, other)}${search}` }
}

/** 12500 gives "12,500". Western digits in both languages, so figures match what a bank shows. */
export function number(value) {
  return Math.round(value).toLocaleString('en')
}

export function money(value, lang) {
  return lang === 'ar' ? `${number(value)} ر.س` : `SAR ${number(value)}`
}

export function weeksLabel(weeks, lang) {
  if (lang === 'en') return weeks === 1 ? '1 week' : `${weeks} weeks`
  if (weeks === 1) return 'أسبوع واحد'
  if (weeks === 2) return 'أسبوعان'
  return weeks <= 10 ? `${weeks} أسابيع` : `${weeks} أسبوعاً`
}
