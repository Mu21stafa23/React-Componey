import { Link } from 'react-router-dom'
import { company } from '../lib/company.js'
import { useTitle } from '../lib/hooks.js'
import { useT, useTo } from '../lib/i18n.jsx'

export default function Privacy() {
  const t = useT()
  const to = useTo()
  useTitle(t('Privacy policy | ECO', 'سياسة الخصوصية | ECO'))
  const parts = [
    {
      title: t('What the contact form asks for', 'ما يطلبه نموذج التواصل'),
      text: t('Your first and last name, an e-mail address and your message. Nothing else is collected: the site sets no cookies and runs no tracking.', 'اسمك الأول واسم العائلة وبريدك الإلكتروني ورسالتك. لا يُجمع شيء غير ذلك: الموقع لا يضع ملفات تعريف ارتباط ولا يتتبّع الزوار.'),
    },
    {
      title: t('What happens to it', 'ماذا يحدث لها'),
      text: t('ECO is a demo company. The form checks what you typed and then stops: your details stay in your browser, are not sent anywhere and are gone when you close the page.', 'ECO شركة افتراضية للعرض. النموذج يتحقق مما كتبته ثم يتوقف: بياناتك تبقى في متصفحك، لا تُرسل إلى أي مكان وتختفي عند إغلاق الصفحة.'),
    },
    {
      title: t('Questions', 'للاستفسار'),
      text: t(`A real company would give you a way to ask for your data or have it deleted. Here that address would be ${company.email}.`, `الشركة الحقيقية تتيح لك طلب بياناتك أو حذفها. هنا كان العنوان سيكون ${company.email}.`),
    },
  ]
  return (
    <div className="wrap py-16 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">{t('Privacy policy', 'سياسة الخصوصية')}</h1>
        {parts.map((part) => (
          <section key={part.title} className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">{part.title}</h2>
            <p className="mt-2 text-lg text-gray-700">{part.text}</p>
          </section>
        ))}
        <Link to={`${to('/')}#contact`} className="btn mt-10">
          {t('Back to the contact form', 'عُد إلى نموذج التواصل')}
        </Link>
      </div>
    </div>
  )
}
