const s = require('./stack')
const pc = require('./parserCombinator')

const isNum = str => /^(\-|\+)?\d+$/.test(str)

const isStr = str => /^".*"$/.test(str)

const isFunc = str => /^{}$/


const toFunc = str => {
  if (isNum(str)) {
    return s.push(parseInt(str, 10))
  }
  if (isStr(str)) {
    return s.push(str)
  }
  switch (str) {
    case '+':
      return s.apply2((a, b) => a + b)
    case '-':
      return s.apply2((a, b) => a - b)
    case '*':
      return s.apply2((a, b) => a * b)
    case '/':
      return s.apply2((a, b) => a / b)
    case 'drop':
      return s.drop
    case 'swap':
      return s.swap
    default:
      throw new Error(`unexpected token: function '${str}' not found`)
  }
}

const _number = pc.option(pc.char('-'), pc.many1(pc.digit))

const _string = pc.sequence(
  pc.char('"'),
  pc.many(pc.satisfy(c => c !== '"')),
  pc.char('"')
)

const _function = pc.sequence(
  pc.char('{'),
  pc.spaces,
  value,
  pc.many(pc.many1(pc.space), value),
  pc.spaces,
  pc.char('}')
)

function value(src) {
  pc.or(_number, _string, _function)(src)
}
  

module.exports = {
  isNum,
  isStr,
  toFunc,
}
