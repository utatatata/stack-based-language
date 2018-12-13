const s = require('./stack')
const h = require('./helper')

const toFunc = str => {
  if (h.isNum(str)) {
    return s.push(parseInt(str, 10))
  }
  if (h.isStr(str)) {
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

module.exports = {
  toFunc,
}
