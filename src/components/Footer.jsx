import { Link } from 'react-router-dom'
import { useT, useTo } from '../lib/i18n.jsx'
import { Brand } from './Navbar.jsx'

export default function Footer() {
  const t = useT()
  const to = useTo()
  const links = [
    { path: '/services', label: t('Services and prices', 'الخدمات والأسعار') },
    { path: '/estimate', label: t('Price your project', 'احسب تكلفة مشروعك') },
    { path: '/work', label: t('Work', 'أعمالنا') },
    { path: '/contact', label: t('Contact', 'تواصل') },
  ]
  return (
    <footer className="no-print bg-forest-deep text-white">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Brand />
          <p className="mt-3 max-w-md text-white/80">
            {t('Websites, stores, apps, branding and launch campaigns for small businesses, priced in the open.', 'مواقع ومتاجر وتطبيقات وهوية وحملات إطلاق للمنشآت الصغيرة، بأسعار معلنة.')}
          </p>
        </div>
        <nav aria-label={t('Footer', 'روابط أسفل الصفحة')}>
          <ul className="grid gap-x-6 sm:grid-cols-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link to={to(link.path)} className="inline-block rounded py-2.5 text-white/90 underline-offset-4 hover:text-moon hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="wrap py-5 text-sm text-white/75">
          {t('Moon Studio is a demo project. The clients, results and prices are examples, and the contact form sends nothing.', 'مون ستوديو مشروع تجريبي. العملاء والنتائج والأسعار أمثلة للعرض، ونموذج التواصل لا يرسل شيئاً.')}
        </p>
      </div>
    </footer>
  )
}
