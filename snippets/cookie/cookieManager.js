
export function setCookie(name, value, expiresAt) {
  const expires = `; expires=${new Date(
    typeof expiresAt !== 'number' ? parseInt(expiresAt) : expiresAt
  ).toUTCString()}`
  const domain = process.env !== 'development' ? 'domain=cleo.one' : ''
  document.cookie = `${name}=${value || ''};${domain} ${expires}; path=/`
}

export function getCookie(name) {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}

export function eraseCookie(name) {
  if (getCookie(name)) {
    const domain = config.environment !== 'development' ? 'domain=cleo.one' : ''
    document.cookie = `${name}=;path=/;${domain};expires=Thu, 01 Jan 1970 00:00:01 GMT`
  }
}