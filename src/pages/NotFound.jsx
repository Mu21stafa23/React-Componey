import { Link } from 'react-router-dom'
import { useTitle } from '../lib/hooks.js'
import { useT, useTo } from '../lib/i18n.jsx'

export default function NotFound() {
  const t = useT()
  const to = useTo()
  useTitle(t('Page not found | ECO', 'الصفحة غير موجودة | ECO'))
  return (
    <div className="wrap py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-brand">{t('This page does not exist', 'هذه الصفحة غير موجودة')}</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-700">{t('The link may be old or mistyped.', 'ربما كان الرابط قديماً أو فيه خطأ.')}</p>
      <Link to={to('/')} className="btn mt-8">
        {t('Go to the home page', 'اذهب إلى الصفحة الرئيسية')}
      </Link>
    </div>
  )
}
