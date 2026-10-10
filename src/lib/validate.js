// Checks for the contact form.

export function isEmail(text) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(text.trim())
}

/** Returns the problems in a message, keyed by field, as codes the page turns into sentences. */
export function checkMessage(values) {
  const problems = {}
  if (values.firstName.trim().length < 2) problems.firstName = 'firstName'
  if (values.lastName.trim().length < 2) problems.lastName = 'lastName'
  if (values.email.trim() === '') problems.email = 'emailMissing'
  else if (!isEmail(values.email)) problems.email = 'emailShape'
  if (values.message.trim().length < 10) problems.message = 'message'
  if (!values.agree) problems.agree = 'agree'
  return problems
}
