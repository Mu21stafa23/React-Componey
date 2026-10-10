// Everything the site says about the company, in one place and in both languages.
// ECO is an invented company: the numbers, offices and contact details are examples.

const tx = (en, ar) => ({ en, ar })

export const company = {
  name: 'ECO',
  founded: 2010,
  phone: { label: '+1 (555) 010-0199', href: 'tel:+15550100199' },
  email: 'contact@eco-business.example',
}

// "Work with us": the three ways the company helps.
export const offers = [
  {
    id: 'consulting',
    title: tx('Consulting', 'الاستشارات'),
    text: tx('Our expert consultants provide industry-leading advice to help optimize your processes and strategies.', 'يقدّم مستشارونا خبرة عملية تساعدك على تحسين إجراءاتك واستراتيجياتك.'),
  },
  {
    id: 'development',
    title: tx('Development', 'التطوير'),
    text: tx('We create custom software solutions tailored to your unique business needs, ensuring scalability and efficiency.', 'نبني حلولاً برمجية مصممة لاحتياجات عملك، قابلة للتوسّع وعالية الكفاءة.'),
  },
  {
    id: 'marketing',
    title: tx('Marketing', 'التسويق'),
    text: tx('Our digital marketing strategies will increase your online presence, drive engagement, and boost your business growth.', 'استراتيجياتنا في التسويق الرقمي تزيد حضورك على الإنترنت وتفاعل عملائك ونموّ أعمالك.'),
  },
]

// "Our services": the same three areas, with what a client actually receives.
export const services = [
  {
    id: 'consulting',
    title: tx('Consulting Services', 'الخدمات الاستشارية'),
    text: tx('Tailored business solutions for your company.', 'حلول أعمال مصممة لشركتك.'),
    includes: [tx('A review of how your business uses its data', 'مراجعة لطريقة استخدام شركتك لبياناتها'), tx('A dashboard of the numbers that matter', 'لوحة للأرقام التي تهمّك'), tx('A plan for the next twelve months', 'خطة للاثني عشر شهراً القادمة')],
  },
  {
    id: 'product',
    title: tx('Product Development', 'تطوير المنتجات'),
    text: tx('Creating innovative products that drive growth.', 'نبتكر منتجات تدفع النمو.'),
    includes: [tx('Design and prototype in the first month', 'تصميم ونموذج أولي في الشهر الأول'), tx('Web and mobile apps built to scale', 'تطبيقات ويب وجوال قابلة للتوسّع'), tx('Support after launch', 'دعم بعد الإطلاق')],
  },
  {
    id: 'marketing',
    title: tx('Digital Marketing', 'التسويق الرقمي'),
    text: tx('Comprehensive strategies to boost your online presence.', 'استراتيجيات شاملة لتعزيز حضورك على الإنترنت.'),
    includes: [tx('Search and social media campaigns', 'حملات على محركات البحث ووسائل التواصل'), tx('Content written for your customers', 'محتوى مكتوب لعملائك'), tx('A monthly report in plain numbers', 'تقرير شهري بأرقام واضحة')],
  },
]

// `count` numbers are counted up on screen; the founding year is shown as it is.
export const stats = [
  { id: 'founded', value: company.founded, count: false, suffix: '', label: tx('Founded', 'سنة التأسيس') },
  { id: 'employees', value: 500, count: true, suffix: '+', label: tx('Employees', 'موظف') },
  { id: 'countries', value: 120, count: true, suffix: '+', label: tx('Countries', 'دولة') },
  { id: 'offices', value: 5, count: true, suffix: '', label: tx('Offices', 'مكاتب') },
]

export const offices = [tx('Riyadh', 'الرياض'), tx('Dubai', 'دبي'), tx('London', 'لندن'), tx('Singapore', 'سنغافورة'), tx('Toronto', 'تورنتو')]
