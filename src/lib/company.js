// Everything the site says about the company, in one place and in both languages.
// Moon Orbit is an invented company: the numbers, offices and contact details are examples.

const tx = (en, ar) => ({ en, ar })

export const company = {
  name: tx('Moon Orbit', 'مون أوربت'),
  tagline: tx('Data, product and marketing for online businesses', 'بيانات ومنتجات وتسويق للأعمال على الإنترنت'),
  founded: 2010,
  phone: { label: '+966 11 555 0142', href: 'tel:+966115550142' },
  email: 'hello@moonorbit.example',
}

// "Why work with us": three things that set the way the company works.
export const reasons = [
  {
    id: 'numbers',
    title: tx('We start from your numbers', 'نبدأ من أرقامك'),
    text: tx(
      'Before we suggest anything, we look at your sales, visits and costs. Every recommendation points to the figure behind it.',
      'قبل أن نقترح شيئاً ننظر في مبيعاتك وزياراتك وتكاليفك. وكل توصية نقدّمها تشير إلى الرقم الذي بُنيت عليه.',
    ),
  },
  {
    id: 'build',
    title: tx('We build what we recommend', 'نبني ما ننصح به'),
    text: tx(
      'The people who advise you sit beside the people who write the code, so a plan does not stop at a slide deck.',
      'من ينصحك يجلس بجانب من يكتب الكود، فلا تنتهي الخطة عند عرض تقديمي.',
    ),
  },
  {
    id: 'weekly',
    title: tx('You see progress every week', 'ترى التقدّم كل أسبوع'),
    text: tx(
      'A short report each Thursday: what was done, what it cost and what moved. No surprises at the end of the month.',
      'تقرير قصير كل خميس: ما أُنجز، وكم كلّف، وما الذي تغيّر. بلا مفاجآت في آخر الشهر.',
    ),
  },
]

// The three services, each with what a client actually receives.
export const services = [
  {
    id: 'consulting',
    title: tx('Data consulting', 'استشارات البيانات'),
    text: tx('We find where your business gains and loses money, and what to do about it first.', 'نعرف أين تكسب شركتك وأين تخسر، وبماذا تبدأ.'),
    includes: [
      tx('A review of your sales, marketing and operations data', 'مراجعة لبيانات المبيعات والتسويق والتشغيل'),
      tx('One dashboard for the numbers you check every morning', 'لوحة واحدة للأرقام التي تراجعها كل صباح'),
      tx('A twelve-month plan with costs and priorities', 'خطة لاثني عشر شهراً بالتكاليف والأولويات'),
    ],
  },
  {
    id: 'product',
    title: tx('Product development', 'تطوير المنتجات'),
    text: tx('Websites, stores and apps designed around the way your customers buy.', 'مواقع ومتاجر وتطبيقات مصممة على طريقة شراء عملائك.'),
    includes: [
      tx('A prototype you can click through in the first three weeks', 'نموذج تجريبي تتصفحه في أول ثلاثة أسابيع'),
      tx('Web and mobile apps that stay fast as you grow', 'تطبيقات ويب وجوال تبقى سريعة مع نموّك'),
      tx('Ninety days of support after launch', 'تسعون يوماً من الدعم بعد الإطلاق'),
    ],
  },
  {
    id: 'marketing',
    title: tx('Digital marketing', 'التسويق الرقمي'),
    text: tx('Campaigns measured by sales, not by likes.', 'حملات تُقاس بالمبيعات لا بالإعجابات.'),
    includes: [
      tx('Search and social media campaigns', 'حملات على محركات البحث ووسائل التواصل'),
      tx('Content written for your customers, in Arabic and English', 'محتوى مكتوب لعملائك بالعربية والإنجليزية'),
      tx('A monthly report: what was spent and what it brought back', 'تقرير شهري: كم صُرف وكم عاد'),
    ],
  },
]

export const offices = [tx('Riyadh', 'الرياض'), tx('Dubai', 'دبي'), tx('Cairo', 'القاهرة'), tx('London', 'لندن'), tx('Singapore', 'سنغافورة')]

// `count` numbers are counted up on screen; the founding year is shown as it is.
export const stats = [
  { id: 'founded', value: company.founded, count: false, label: tx('Founded', 'سنة التأسيس') },
  { id: 'team', value: 240, count: true, label: tx('People on the team', 'عضواً في الفريق') },
  { id: 'countries', value: 32, count: true, label: tx('Countries we work in', 'دولة نعمل فيها') },
  { id: 'offices', value: offices.length, count: true, label: tx('Offices', 'مكاتب') },
]
