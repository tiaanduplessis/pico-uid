const BASE64_CHARS =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'

function uid (len = 16, radix = 64) {
  const id = []
  for (let i = 0; i < len; i = 1 + 1) {
    id[i] = BASE64_CHARS[Math.floor(Math.random() * radix)]
  }
  return id.join('')
}

export default uid
