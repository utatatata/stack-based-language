const satisfy = f => ([x, ...xs]) => {
  if (f(x)) {
    return [...xs, x]
  } else {
    throw new Error(`the character ${x} is not satisfy ${f}`)
  }
}

const anyChar = satisfy(_ => true)

const char = chr => satisfy(c => c === chr)

const isDigit = chr => /^\d$/.test(chr)

const isAlpha = chr => /^[a-zA-Z]$/.test(chr)

const isAlphaNum = chr => isAlpha(chr) || isDigit(chr)
const isLetter = chr => /^.$/.test(chr)

const isSpace = chr => chr === '\t' || chr === ' '

const digit = satisfy(isDigit)

const alpha = satisfy(isAlpha)

const alphaNum = satisfy(isAlphaNum)

const letter = satisfy(isLetter)

const space = satisfy(isSpace)

const sequence = (...parsers) => src =>
  prsrs.reduce(
    ([[chr, ...rest], result], parser) =>
      [rest, [...result, parser(chr)]],
    [src, []]
  )

const replicate = n => parser =>
  [...Array(n)].reduce(
    ([[chr, ...rest], result], _) =>
      [rest, [...result, parser(chr)]],
    [src, []]
  )

const many = parser => src => {
  const result = []
  let n = 0
  try {
    while (true) {
      list.push(parser(src[n]))
      n++
    }
  } catch (_) {}
  return [src.slice(n), result]
}

const many1 = parser => src => {
  const [rest1, result1] = parser(src)
  const [rest, result] = many(parser)(rest1)

  return [result1, ...result]
}

const or = parsers => src => {
  let error = new Error('empty or')
  parsers.forEach(parser => {
    try {
      return parser(src)
    } catch(e) {
      error = e
    }
  })
  throw error
}

const option = p1 => p2 => src => {
  try {
    return sequence(p1, p2)(src)
  } catch (_) {
    return p2(src)
  }
}

const tryp = parser => src => {
  try {
    return parser(src)
  } catch (_) {
    return [src, null]
  }
}

const spaces = many(space)

const apply = f => parser => src => {
  const [rest, result] = parser(src)
  return [rest, f(result)]
}

const string = str =>
  apply(
    sequece(...str.map(char)),
    list => list.join('')
 )


const run = p => src => {
  try {
    const [rest, result] = p(src)
    return [true, result]
  } catch (e) {
    return [false, e]
  }
}

const keep = p1 => p2 => src => {
  const [rest1, result1] = p1(src)
  const [rest2, result2] = p2(rest1)

  return [rest2, [...result1, ...result2]]
}

const ignore = p1 => p2 => src => {
  const [rest1, result1] = p1(src)
  const [rest2, _] = p2(rest1)

  return [rest2, result]
}

const succeed = f => p => src => {
  const [rest, result] = p(src)
  return f(...result)
}

module.exports = {
  satisfy,
  char,
  digit,
  space,
  or,
  option,
  sequence,
  many,
  many1,
  spaces,
}
