const push = (value) => (stack) => [value, ...stack]

const drop = ([_, ...xs]) => xs

const swap = ([x1, x2, ...xs]) =>
  x1 === void 0 ? [] : x2 === void 0 ? [x1] : [x2, x1, ...xs]

const applyN = (n, f) => (stack) => [f(...stack.slice(0, n).reverse()), ...stack.slice(n)]

const apply = f => applyN(1, f)

const apply2 = f => applyN(2, f)

module.exports = {
  push,
  drop,
  swap,
  applyN,
  apply,
  apply2,
}
