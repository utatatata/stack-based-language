const push = (stack, value) => [value, ...stack]

const drop = ([_, ...xs]) => xs

const swap = ([x1, x2, ...xs]) =>
  x1 === void 0 ? [] : x2 === void 0 ? [x1] : [x2, x1, ...xs]

const applyN = (stack, n, f) => [f(...stack.slice(0, n)), ...stack.slice(n)]

const apply = (stack, f) => applyN(stack, 1, f)

const apply2 = (stack, f) => applyN(stack, 2, f)

module.exports = {
  push,
  drop,
  swap,
  applyN,
  apply,
  apply2,
}
