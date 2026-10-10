// Checks for the contact form.

const arabicDigits = '٠١٢٣٤٥٦٧٨٩'

/** "٠٥٠ ١٢٣-٤٥٦٧" becomes "0501234567". */
export function tidyPhone(text) {
  return text
    .replace(/[٠-٩]/g, (digit) => String(arabicDigits.indexOf(digit)))
    .replace(/[\s\-().]/g, '')
}

/** A Saudi mobile number, written locally (05…) or with the country code. */
export function isSaudiMobile(text) {
  return /^(?:\+966|00966|966|0)?5\d{8}$/.test(tidyPhone(text))
}

export function isEmail(text) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(text.trim())
}

/**
 * Returns the problems in a request, keyed by field, as codes the page turns into sentences.
 * With an estimate attached the message may be left empty: the estimate says what is wanted.
 */
export function checkRequest(values, hasEstimate) {
  const problems = {}
  if (values.name.trim().length < 2) problems.name = 'name'
  if (values.email.trim() === '') problems.email = 'emailMissing'
  else if (!isEmail(values.email)) problems.email = 'emailShape'
  if (values.phone.trim() !== '' && !isSaudiMobile(values.phone)) problems.phone = 'phone'
  if (!hasEstimate && values.message.trim().length < 10) problems.message = 'message'
  return problems
}
