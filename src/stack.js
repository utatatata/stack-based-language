const push = (stack, value) => [value].concat(stack)

const applyN = (stack, n, f) => [f(...stack.slice(0, n))].concat(stack.slice(n))

const apply = (stack, f) => applyN(stack, 1, f)

const apply2 = (stack, f) => applyN(stack, 2, f)

module.exports = {
  push,
  applyN,
  apply,
  apply2,
}
