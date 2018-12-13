const s = require('./stack')
const h = require('./helper')

const toNumberFunc = n => stack => s.push(stack, n)

const toFunc = str => {
  if (h.isNum(str)) {
    return toNumberFunc(parseInt(str, 10))
  }
  switch (str) {
    case '+':
      return stack => s.apply2(stack, (a, b) => a + b)
    case '-':
      return stack => s.apply2(stack, (a, b) => a - b)
    case '*':
      return stack => s.apply2(stack, (a, b) => a * b)
    case '/':
      return stack => s.apply2(stack, (a, b) => a / b)
    default:
      throw new Error(`unexpected token: function '${str}' not found`)
  }
}

module.exports = {
  toNumberFunc,
  toFunc,
}
