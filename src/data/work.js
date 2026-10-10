// The projects on the Work pages. Moon Studio is a demo, so the clients are invented and the
// figures are examples. `config` is the same kind of selection the estimator builds, which is
// how each project can show what something like it would cost.

const tx = (en, ar) => ({ en, ar })

export const sectors = [
  { id: 'retail', name: tx('Food and retail', 'أغذية وتجزئة') },
  { id: 'property', name: tx('Building and property', 'مقاولات وعقار') },
  { id: 'care', name: tx('Health and education', 'صحة وتعليم') },
  { id: 'logistics', name: tx('Transport and logistics', 'نقل وخدمات لوجستية') },
]

export const sectorById = (id) => sectors.find((sector) => sector.id === id)

export const projects = [
  {
    slug: 'sidr-coffee',
    name: tx('Sidr Coffee Roasters', 'محمصة سدر'),
    place: tx('Abha', 'أبها'),
    year: 2025,
    sector: 'retail',
    services: ['store', 'brand'],
    config: { picked: { store: { products: 1, pay: true, ship: true }, brand: { print: true } }, rush: false, care: true },
    cover: { kind: 'store', bg: '#3b2a20', panel: '#f6ede1', accent: '#c8742b', ink: '#3b2a20', letter: 'س' },
    line: tx('A roastery that sold through Instagram messages now takes orders while the owner sleeps.', 'محمصة كانت تبيع عبر رسائل إنستغرام، وصارت تستقبل الطلبات وصاحبها نائم.'),
    challenge: tx(
      'Every order was a conversation: a customer asked what was in stock, the owner answered, a bank transfer followed, and a screenshot proved it. On a busy day half the messages went unanswered.',
      'كل طلب كان محادثة: العميل يسأل عن المتوفر، وصاحب المحمصة يرد، ثم تحويل بنكي وصورة للإيصال. في الأيام المزدحمة كان نصف الرسائل يبقى بلا رد.',
    ),
    did: [
      tx('A store with 120 products, each with its roast date, tasting notes and the grind options.', 'متجر فيه 120 منتجاً، لكل منتج تاريخ التحميص والإيحاءات وخيارات الطحن.'),
      tx('Checkout with Mada and Apple Pay, and a shipping label printed the moment an order is paid.', 'دفع بمدى و Apple Pay، وبوليصة شحن تُطبع لحظة سداد الطلب.'),
      tx('A monthly subscription: the same bag at the door every four weeks.', 'اشتراك شهري: الكيس نفسه على الباب كل أربعة أسابيع.'),
      tx('A new mark drawn from the sidr leaf, with bags and cups to match.', 'شعار جديد مأخوذ من ورقة السدر، مع أكياس وأكواب بالهوية نفسها.'),
    ],
    results: [
      { value: '3×', label: tx('orders per week, three months in', 'الطلبات الأسبوعية بعد ثلاثة أشهر') },
      { value: '41%', label: tx('of orders placed after midnight', 'من الطلبات تأتي بعد منتصف الليل') },
      { value: '260', label: tx('monthly subscribers', 'مشتركاً شهرياً') },
    ],
  },
  {
    slug: 'dar-albina',
    name: tx('Dar Al-Bina Contracting', 'دار البناء للمقاولات'),
    place: tx('Riyadh', 'الرياض'),
    year: 2025,
    sector: 'property',
    services: ['site', 'brand'],
    config: { picked: { site: { pages: 1, both: true, cms: true }, brand: { guide: true } }, rush: false, care: false },
    cover: { kind: 'site', bg: '#1f2a37', panel: '#f4f1ea', accent: '#e0a526', ink: '#1f2a37', letter: 'د' },
    line: tx('Twenty years of finished buildings, and a website that finally shows them.', 'عشرون سنة من المباني المنجزة، وموقع يعرضها أخيراً.'),
    challenge: tx(
      'The company won work by word of mouth and lost tenders it was qualified for, because the committee could find nothing about it online except an old page with a broken map.',
      'كانت الشركة تكسب أعمالها بالسمعة وتخسر مناقصات هي مؤهلة لها، لأن اللجنة لا تجد عنها شيئاً على الإنترنت غير صفحة قديمة بخريطة معطّلة.',
    ),
    did: [
      tx('A project archive the team updates itself: 64 projects with area, value, duration and photos.', 'أرشيف مشاريع يحدّثه الفريق بنفسه: 64 مشروعاً بالمساحة والقيمة والمدة والصور.'),
      tx('A page of licences and classifications that a tender committee can download as one file.', 'صفحة للتراخيص والتصنيفات تنزّلها لجنة المناقصات في ملف واحد.'),
      tx('Arabic and English from the same content, so neither version falls behind.', 'العربية والإنجليزية من محتوى واحد، فلا تتأخر نسخة عن الأخرى.'),
      tx('A tidied mark and a brand guide the site supervisors actually use on signboards.', 'شعار مرتَّب ودليل هوية يستخدمه مشرفو المواقع فعلاً على اللوحات.'),
    ],
    results: [
      { value: '64', label: tx('projects documented', 'مشروعاً موثَّقاً') },
      { value: '5', label: tx('tender invitations in the first quarter', 'دعوات مناقصات في الربع الأول') },
      { value: '1.2s', label: tx('to load on a phone', 'زمن التحميل على الجوال') },
    ],
  },
  {
    slug: 'qimam-logistics',
    name: tx('Qimam Logistics', 'قمم اللوجستية'),
    place: tx('Dammam', 'الدمام'),
    year: 2026,
    sector: 'logistics',
    services: ['app'],
    config: { picked: { app: { roles: 1, reports: true, link: true } }, rush: false, care: true },
    cover: { kind: 'app', bg: '#0f2f4a', panel: '#eef4f8', accent: '#1f9d8b', ink: '#0f2f4a', letter: 'ق' },
    line: tx('Dispatchers stopped phoning drivers to ask where they are.', 'توقّف المنسّقون عن الاتصال بالسائقين ليسألوهم أين وصلوا.'),
    challenge: tx(
      'Forty trucks were run from a spreadsheet and a WhatsApp group. Nobody could say how many deliveries were late until the customer called to complain.',
      'أربعون شاحنة تُدار من جدول وقروب واتساب. لم يكن أحد يعرف كم شحنة تأخرت حتى يتصل العميل شاكياً.',
    ),
    did: [
      tx('A board of today’s trips: assigned, on the road, delivered, late.', 'لوحة لرحلات اليوم: مُسنَدة، في الطريق، مُسلَّمة، متأخرة.'),
      tx('A driver screen with three buttons, made for one hand and bright sunlight.', 'شاشة للسائق بثلاثة أزرار، مصمَّمة ليد واحدة وتحت شمس قوية.'),
      tx('Trips pulled from the accounting system, so nothing is typed twice.', 'الرحلات تُسحب من النظام المحاسبي، فلا شيء يُكتب مرتين.'),
      tx('A weekly report: on-time rate per customer and per driver.', 'تقرير أسبوعي: نسبة الالتزام بالموعد لكل عميل ولكل سائق.'),
    ],
    results: [
      { value: '93%', label: tx('delivered on time, up from 78%', 'تسليم في الموعد بعد أن كانت 78%') },
      { value: '−70%', label: tx('calls between office and drivers', 'في المكالمات بين المكتب والسائقين') },
      { value: '40', label: tx('trucks on one screen', 'شاحنة على شاشة واحدة') },
    ],
  },
  {
    slug: 'noor-dental',
    name: tx('Noor Dental Clinics', 'عيادات نور لطب الأسنان'),
    place: tx('Jeddah', 'جدة'),
    year: 2025,
    sector: 'care',
    services: ['site', 'launch'],
    config: { picked: { site: { both: true, copy: true }, launch: { page: true } }, rush: false, care: false },
    cover: { kind: 'site', bg: '#e6f1f4', panel: '#ffffff', accent: '#2a8ca8', ink: '#143642', letter: 'ن' },
    line: tx('A booking page that answers the three questions patients ask before they call.', 'صفحة حجز تجيب عن الأسئلة الثلاثة التي يسألها المريض قبل أن يتصل.'),
    challenge: tx(
      'The reception desk spent its mornings repeating prices, insurance and opening hours on the phone. Ads sent people to a home page where none of that was written.',
      'كان الاستقبال يقضي صباحه في تكرار الأسعار والتأمين ومواعيد الدوام على الهاتف. والإعلانات ترسل الناس إلى صفحة رئيسية ليس فيها شيء من ذلك.',
    ),
    did: [
      tx('A page per treatment with what it costs, how long it takes and which insurers cover it.', 'صفحة لكل علاج فيها تكلفته ومدته وشركات التأمين التي تغطيه.'),
      tx('Booking in four taps: branch, doctor, day, time.', 'حجز في أربع نقرات: الفرع، الطبيب، اليوم، الوقت.'),
      tx('Text written with the doctors, in words patients use.', 'نصوص كُتبت مع الأطباء، بالكلمات التي يستخدمها المرضى.'),
      tx('A six-week campaign for the new branch, with its own landing page.', 'حملة ستة أسابيع للفرع الجديد، بصفحة هبوط خاصة بها.'),
    ],
    results: [
      { value: '58%', label: tx('of bookings now made online', 'من الحجوزات صارت عبر الموقع') },
      { value: '−35%', label: tx('cost of each new patient from ads', 'في تكلفة المريض الجديد من الإعلانات') },
      { value: '2', label: tx('branches, one calendar', 'فرعان بتقويم واحد') },
    ],
  },
  {
    slug: 'athar-books',
    name: tx('Athar Bookshop', 'مكتبة أثر'),
    place: tx('Madinah', 'المدينة المنورة'),
    year: 2026,
    sector: 'retail',
    services: ['store'],
    config: { picked: { store: { products: 2, pay: true, ship: true, both: true } }, rush: false, care: true },
    cover: { kind: 'store', bg: '#f1e9da', panel: '#fffdf8', accent: '#8a3324', ink: '#2c2520', letter: 'أ' },
    line: tx('Six thousand titles, findable by a reader who remembers half the name.', 'ستة آلاف عنوان، يجدها قارئ يتذكر نصف الاسم.'),
    challenge: tx(
      'The shop’s catalogue lived in the heads of two booksellers. The old store’s search found nothing unless the title was typed exactly, hamzas included.',
      'فهرس المكتبة كان في رأسَي بائعَين. والبحث في المتجر القديم لا يجد شيئاً إلا إذا كُتب العنوان حرفياً، بهمزاته.',
    ),
    did: [
      tx('Search that forgives spelling: ة and ه, أ and ا, with or without ال.', 'بحث يتسامح مع الإملاء: ة و ه، أ و ا، بأل التعريف أو بدونها.'),
      tx('Stock read from the till every hour, so the site never sells a book that is gone.', 'المخزون يُقرأ من نقطة البيع كل ساعة، فلا يبيع الموقع كتاباً نفد.'),
      tx('Shelves by the booksellers: short lists they write and sign.', 'رفوف يرتّبها البائعون: قوائم قصيرة يكتبونها ويوقّعونها.'),
      tx('An English storefront for orders from abroad.', 'واجهة إنجليزية للطلبات من الخارج.'),
    ],
    results: [
      { value: '6,200', label: tx('titles online', 'عنواناً على الموقع') },
      { value: '+52%', label: tx('searches that end in a purchase', 'في عمليات البحث التي تنتهي بشراء') },
      { value: '18', label: tx('countries shipped to', 'دولة وصلتها الطلبات') },
    ],
  },
  {
    slug: 'wahat-property',
    name: tx('Wahat Real Estate', 'واحات العقارية'),
    place: tx('Al Khobar', 'الخبر'),
    year: 2026,
    sector: 'property',
    services: ['plan', 'app'],
    config: { picked: { app: { roles: 2, reports: true, both: true }, plan: { roadmap: true } }, rush: false, care: true },
    cover: { kind: 'app', bg: '#22332b', panel: '#f3f6f1', accent: '#c9a24a', ink: '#22332b', letter: 'و' },
    line: tx('The workshop cut the first release in half, and it shipped on the planned day.', 'الورشة اختصرت الإصدار الأول إلى النصف، فصدر في يومه المحدد.'),
    challenge: tx(
      'The owners wanted one system for tenants, landlords, maintenance crews and accountants, all at once. Two earlier attempts had stalled under that list.',
      'أراد الملّاك نظاماً واحداً للمستأجرين والمؤجّرين وفرق الصيانة والمحاسبين، دفعة واحدة. وتعثّرت محاولتان سابقتان تحت هذه القائمة.',
    ),
    did: [
      tx('Two sessions that ranked 47 wishes and kept 19 for the first release.', 'جلستان رتّبتا 47 طلباً وأبقتا 19 منها للإصدار الأول.'),
      tx('A tenant portal: pay rent, report a fault, download the contract.', 'بوابة للمستأجر: يدفع الإيجار، يبلّغ عن عطل، ينزّل العقد.'),
      tx('A maintenance queue the crews work through on their phones.', 'قائمة صيانة تنجزها الفرق من جوالاتها.'),
      tx('Monthly statements for each landlord, made without a spreadsheet.', 'كشوف شهرية لكل مؤجّر، تُعدّ بلا جداول.'),
    ],
    results: [
      { value: '19', label: tx('features in the first release, out of 47 asked for', 'ميزة في الإصدار الأول من أصل 47 طلباً') },
      { value: '820', label: tx('units managed', 'وحدة تُدار عبر النظام') },
      { value: '4 d', label: tx('to close a fault, down from 11', 'لإغلاق بلاغ الصيانة بعد أن كانت 11 يوماً'), valueAr: '4 أيام' },
    ],
  },
  {
    slug: 'masar-training',
    name: tx('Masar Training Center', 'مركز مسار للتدريب'),
    place: tx('Riyadh', 'الرياض'),
    year: 2025,
    sector: 'care',
    services: ['site', 'launch'],
    config: { picked: { site: { pages: 1, cms: true }, launch: { posts: true } }, rush: false, care: false },
    cover: { kind: 'campaign', bg: '#2b2350', panel: '#f5f2ff', accent: '#f08a4b', ink: '#2b2350', letter: 'م' },
    line: tx('Courses filled from the timetable page, not from the phone.', 'امتلأت الدورات من صفحة الجدول، لا من الهاتف.'),
    challenge: tx(
      'The course timetable was a picture posted every month. It could not be searched, and by the second week half of it was wrong.',
      'جدول الدورات كان صورة تُنشر كل شهر. لا يمكن البحث فيها، وفي الأسبوع الثاني يصبح نصفها خاطئاً.',
    ),
    did: [
      tx('A live timetable the coordinators edit: seats left, trainer, price, city.', 'جدول حيّ يحرّره المنسّقون: المقاعد المتبقية، المدرب، السعر، المدينة.'),
      tx('Registration that holds a seat for 24 hours until payment.', 'تسجيل يحجز المقعد 24 ساعة حتى يتم الدفع.'),
      tx('Twelve posts and four short videos for the autumn term.', 'اثنا عشر منشوراً وأربعة مقاطع قصيرة لفصل الخريف.'),
    ],
    results: [
      { value: '87%', label: tx('of seats filled in the autumn term', 'من المقاعد امتلأت في فصل الخريف') },
      { value: '0', label: tx('timetable pictures posted since', 'صور جداول نُشرت منذ ذلك') },
      { value: '1,400', label: tx('registrations online', 'تسجيلاً عبر الموقع') },
    ],
  },
  {
    slug: 'rawabi-gardens',
    name: tx('Rawabi Gardens', 'روابي لتنسيق الحدائق'),
    place: tx('Taif', 'الطائف'),
    year: 2026,
    sector: 'property',
    services: ['launch', 'brand'],
    config: { picked: { brand: { print: true }, launch: { posts: true, page: true } }, rush: true, care: false },
    cover: { kind: 'brand', bg: '#e9efdf', panel: '#ffffff', accent: '#4c7a34', ink: '#23331a', letter: 'ر' },
    line: tx('A spring campaign, ready before spring.', 'حملة الربيع، جاهزة قبل الربيع.'),
    challenge: tx(
      'A two-person landscaping business had five weeks before its busiest season and nothing to show but phone photos.',
      'منشأة تنسيق حدائق من شخصين، أمامها خمسة أسابيع قبل موسمها الأزحم، ولا تملك ما تعرضه غير صور بالجوال.',
    ),
    did: [
      tx('A name, a mark and van lettering in the first ten days.', 'اسم وشعار وكتابة على السيارة في أول عشرة أيام.'),
      tx('One page: before and after photos, three packages, a WhatsApp button.', 'صفحة واحدة: صور قبل وبعد، ثلاث باقات، وزر واتساب.'),
      tx('Ads shown only in the neighbourhoods they can reach in a day.', 'إعلانات تظهر فقط في الأحياء التي يصلون إليها في يوم واحد.'),
    ],
    results: [
      { value: '5 wk', label: tx('from first call to first ad', 'من أول اتصال إلى أول إعلان'), valueAr: '5 أسابيع' },
      { value: '74', label: tx('quote requests in March', 'طلب تسعير في مارس') },
      { value: '11', label: tx('gardens booked from them', 'حديقة حُجزت منها') },
    ],
  },
]

export const projectBySlug = (slug) => projects.find((project) => project.slug === slug)
