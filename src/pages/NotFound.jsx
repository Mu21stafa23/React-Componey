import { Link } from 'react-router-dom'
import { useTitle } from '../lib/hooks.js'
import { useT, useTo } from '../lib/i18n.jsx'

export default function NotFound() {
  const t = useT()
  const to = useTo()
  useTitle(t('Page not found | Moon Studio', 'الصفحة غير موجودة | مون ستوديو'))
  return (
    <div className="wrap py-20">
      <h1 className="text-4xl font-bold">{t('This page does not exist', 'هذه الصفحة غير موجودة')}</h1>
      <p className="mt-3 max-w-xl text-lg soft">{t('The link may be old or mistyped. These two are a good place to start again.', 'ربما كان الرابط قديماً أو فيه خطأ. يمكنك البدء من هنا.')}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to={to('/')} className="btn-forest">
          {t('Home page', 'الصفحة الرئيسية')}
        </Link>
        <Link to={to('/estimate')} className="btn-line">
          {t('Price your project', 'احسب تكلفة مشروعك')}
        </Link>
      </div>
    </div>
  )
}
