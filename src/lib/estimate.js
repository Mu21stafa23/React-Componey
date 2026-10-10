// What the studio sells and how an estimate is worked out. The same rules price the
// estimate on the home page, the full estimator, and the "a project like this" links.

const tx = (en, ar) => ({ en, ar })

// An option is either a switch (`price`, `weeks`) or a choice between steps (`choices`).
export const services = [
  {
    id: 'site',
    name: tx('Company website', 'موقع تعريفي'),
    blurb: tx('Who you are, what you offer and how to reach you, on any screen.', 'من أنت وماذا تقدّم وكيف يصل إليك العميل، على أي شاشة.'),
    includes: [tx('Design made for your brand', 'تصميم خاص بهويتك'), tx('Fast on phones', 'سريع على الجوال'), tx('Contact form and map', 'نموذج تواصل وخريطة'), tx('Set up to be found on Google', 'مهيّأ للظهور في قوقل')],
    base: 9000,
    weeks: 3,
    options: [
      {
        id: 'pages',
        label: tx('How many pages?', 'كم صفحة؟'),
        choices: [
          { label: tx('Up to 5', 'حتى 5'), price: 0, weeks: 0 },
          { label: tx('6 to 12', 'من 6 إلى 12'), price: 4000, weeks: 1 },
          { label: tx('More than 12', 'أكثر من 12'), price: 9000, weeks: 2 },
        ],
      },
      { id: 'both', label: tx('In Arabic and English', 'بالعربية والإنجليزية'), price: 2500, weeks: 0.5 },
      { id: 'cms', label: tx('You edit the content yourself', 'تعدّل المحتوى بنفسك'), price: 3500, weeks: 1 },
      { id: 'copy', label: tx('We write the text', 'نكتب النصوص عنك'), price: 3000, weeks: 1 },
    ],
  },
  {
    id: 'store',
    name: tx('Online store', 'متجر إلكتروني'),
    blurb: tx('Products, cart and checkout, with the payment methods people here use.', 'منتجات وسلة ودفع، بطرق الدفع التي يستخدمها الناس هنا.'),
    includes: [tx('Product pages and search', 'صفحات المنتجات والبحث'), tx('Cart and checkout', 'السلة وإتمام الطلب'), tx('Order emails', 'رسائل تأكيد الطلب'), tx('A panel to manage orders', 'لوحة لإدارة الطلبات')],
    base: 18000,
    weeks: 5,
    options: [
      {
        id: 'products',
        label: tx('How many products?', 'كم منتجاً؟'),
        choices: [
          { label: tx('Up to 50', 'حتى 50'), price: 0, weeks: 0 },
          { label: tx('51 to 500', 'من 51 إلى 500'), price: 5000, weeks: 1 },
          { label: tx('More than 500', 'أكثر من 500'), price: 12000, weeks: 2 },
        ],
      },
      { id: 'pay', label: tx('Mada, Apple Pay and cards', 'مدى و Apple Pay والبطاقات'), price: 3000, weeks: 0.5 },
      { id: 'ship', label: tx('Linked to a shipping company', 'ربط بشركة شحن'), price: 2500, weeks: 0.5 },
      { id: 'both', label: tx('In Arabic and English', 'بالعربية والإنجليزية'), price: 3500, weeks: 1 },
    ],
  },
  {
    id: 'app',
    name: tx('Web app or dashboard', 'تطبيق ويب أو لوحة تحكم'),
    blurb: tx('A tool your team signs in to: bookings, orders, stock, reports.', 'أداة يدخل إليها فريقك: حجوزات، طلبات، مخزون، تقارير.'),
    includes: [tx('Sign-in and permissions', 'تسجيل دخول وصلاحيات'), tx('Your data in tables and forms', 'بياناتك في جداول ونماذج'), tx('Works on phone and desktop', 'يعمل على الجوال والحاسوب'), tx('Hosted and backed up', 'استضافة ونسخ احتياطي')],
    base: 28000,
    weeks: 8,
    options: [
      {
        id: 'roles',
        label: tx('How many kinds of users?', 'كم نوعاً من المستخدمين؟'),
        choices: [
          { label: tx('One', 'نوع واحد'), price: 0, weeks: 0 },
          { label: tx('Two or three', 'نوعان أو ثلاثة'), price: 6000, weeks: 1 },
          { label: tx('Four or more', 'أربعة فأكثر'), price: 13000, weeks: 3 },
        ],
      },
      { id: 'reports', label: tx('Reports and charts', 'تقارير ورسوم بيانية'), price: 6000, weeks: 1 },
      { id: 'link', label: tx('Linked to another system', 'ربط بنظام آخر'), price: 5000, weeks: 1 },
      { id: 'both', label: tx('In Arabic and English', 'بالعربية والإنجليزية'), price: 4000, weeks: 1 },
    ],
  },
  {
    id: 'brand',
    name: tx('Brand identity', 'هوية بصرية'),
    blurb: tx('A logo, colors and type that look like you everywhere.', 'شعار وألوان وخطوط تشبهك في كل مكان.'),
    includes: [tx('Logo in every format', 'الشعار بكل الصيغ'), tx('Colors and typefaces', 'الألوان والخطوط'), tx('Arabic and Latin versions', 'نسخة عربية ولاتينية')],
    base: 6000,
    weeks: 2,
    options: [
      { id: 'print', label: tx('Cards, letterhead and bags', 'بطاقات وورق رسمي وأكياس'), price: 1500, weeks: 0.5 },
      { id: 'guide', label: tx('A guide for using the brand', 'دليل استخدام الهوية'), price: 2500, weeks: 0.5 },
    ],
  },
  {
    id: 'launch',
    name: tx('Launch campaign', 'حملة إطلاق'),
    blurb: tx('Paid ads on the platforms your customers use, measured from the first riyal.', 'إعلانات مدفوعة على المنصات التي يستخدمها عملاؤك، تُقاس من أول ريال.'),
    includes: [tx('Audience and message', 'الجمهور والرسالة'), tx('Two versions of each ad', 'نسختان من كل إعلان'), tx('A weekly report in plain words', 'تقرير أسبوعي بكلام واضح')],
    base: 6500,
    weeks: 3,
    options: [
      { id: 'posts', label: tx('Twelve designed posts', '12 منشوراً مصمَّماً'), price: 3000, weeks: 0.5 },
      { id: 'page', label: tx('A landing page for the campaign', 'صفحة هبوط للحملة'), price: 4000, weeks: 1 },
    ],
  },
  {
    id: 'plan',
    name: tx('Discovery workshop', 'ورشة تخطيط'),
    blurb: tx('Two sessions to work out what to build first, before spending on it.', 'جلستان لنعرف ماذا نبني أولاً، قبل أن تدفع فيه.'),
    includes: [tx('Two sessions with your team', 'جلستان مع فريقك'), tx('A list of what matters most', 'قائمة بالأهم فالمهم')],
    base: 3500,
    weeks: 1,
    options: [{ id: 'roadmap', label: tx('A written plan with costs', 'خطة مكتوبة بالتكاليف'), price: 2000, weeks: 0.5 }],
  },
]

export const RUSH_RATE = 0.25
export const CARE_MONTHLY = 900
export const VAT_RATE = 0.15

export const serviceById = (id) => services.find((service) => service.id === id)

/** A selection: which services are wanted, with which options, and the two extras. */
export const emptySelection = { picked: {}, rush: false, care: false }

const round500 = (value) => Math.round(value / 500) * 500

/**
 * Prices a selection. `low` to `high` is the range shown to the visitor: the sum of what
 * was picked, and 15% above it for what only a conversation reveals.
 */
export function estimate(selection) {
  const lines = []
  for (const service of services) {
    const chosen = selection.picked[service.id]
    if (!chosen) continue
    const parts = [{ label: service.name, price: service.base, base: true }]
    let weeks = service.weeks
    for (const option of service.options) {
      const value = chosen[option.id]
      if (option.choices) {
        const choice = option.choices[value] ?? option.choices[0]
        if (choice.price > 0) parts.push({ label: choice.label, question: option.label, price: choice.price })
        weeks += choice.weeks
      } else if (value) {
        parts.push({ label: option.label, price: option.price })
        weeks += option.weeks
      }
    }
    lines.push({ id: service.id, name: service.name, parts, price: parts.reduce((sum, part) => sum + part.price, 0), weeks })
  }
  const subtotal = lines.reduce((sum, line) => sum + line.price, 0)
  const rushFee = selection.rush ? Math.round(subtotal * RUSH_RATE) : 0
  const total = subtotal + rushFee
  // The longest piece sets the pace; the others run alongside it and add half their length.
  const lengths = lines.map((line) => line.weeks).sort((a, b) => b - a)
  let weeks = lengths.length === 0 ? 0 : lengths[0] + lengths.slice(1).reduce((sum, length) => sum + length * 0.5, 0)
  if (selection.rush) weeks *= 0.75
  weeks = lengths.length === 0 ? 0 : Math.max(1, Math.ceil(weeks))
  return {
    lines,
    subtotal,
    rushFee,
    total,
    low: round500(total),
    // In whole halalas first: 45,000 × 1.15 is not exactly 51,750 in floating point.
    high: round500(Math.round(total * 115) / 100),
    weeks,
    monthly: selection.care ? CARE_MONTHLY : 0,
    empty: lines.length === 0,
  }
}

// ---- A selection in the address bar, so an estimate can be bookmarked, shared or sent ----

/** "site.pages1.both~brand.guide" for the services, plus rush=1 and care=1. */
export function toQuery(selection) {
  const params = new URLSearchParams()
  const need = []
  for (const service of services) {
    const chosen = selection.picked[service.id]
    if (!chosen) continue
    let text = service.id
    for (const option of service.options) {
      const value = chosen[option.id]
      if (option.choices) {
        if (value > 0) text += `.${option.id}${value}`
      } else if (value) text += `.${option.id}`
    }
    need.push(text)
  }
  if (need.length > 0) params.set('need', need.join('~'))
  if (selection.rush) params.set('rush', '1')
  if (selection.care) params.set('care', '1')
  return params
}

/** Reads a selection back. Anything unknown is ignored, so an old or mistyped link still opens. */
export function fromQuery(params) {
  const picked = {}
  for (const text of (params.get('need') ?? '').split('~')) {
    const [id, ...flags] = text.split('.')
    const service = serviceById(id)
    if (!service) continue
    const chosen = {}
    for (const flag of flags) {
      for (const option of service.options) {
        if (option.choices) {
          const match = flag.startsWith(option.id) ? Number(flag.slice(option.id.length)) : NaN
          if (Number.isInteger(match) && match > 0 && match < option.choices.length && flag === `${option.id}${match}`) chosen[option.id] = match
        } else if (flag === option.id) chosen[option.id] = true
      }
    }
    picked[id] = chosen
  }
  return { picked, rush: params.get('rush') === '1', care: params.get('care') === '1' }
}

/** How one priced extra reads: a switch by its name, a choice as "How many pages: 6 to 12". */
export function partLabel(part, lang) {
  return part.question ? `${part.question[lang].replace(/[?؟]$/, '')}: ${part.label[lang]}` : part.label[lang]
}

/** A few lines of plain text describing a selection, for the message sent with a request. */
export function summarize(selection, lang) {
  const result = estimate(selection)
  if (result.empty) return ''
  const lines = result.lines.map((line) => {
    const extras = line.parts.filter((part) => !part.base).map((part) => partLabel(part, lang))
    return `- ${line.name[lang]}${extras.length > 0 ? ` (${extras.join(lang === 'ar' ? '، ' : ', ')})` : ''}`
  })
  if (selection.rush) lines.push(lang === 'ar' ? '- تسليم مستعجل' : '- Rush delivery')
  if (selection.care) lines.push(lang === 'ar' ? '- متابعة شهرية بعد التسليم' : '- Monthly care after launch')
  return lines.join('\n')
}
