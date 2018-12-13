const push = (stack, value) => [value].concat(stack)

const drop = stack => stack.slice(1)

const swap = stack =>
  stack.length < 2 ? stack :
    [stack[1], stack[0]].concat(stack.slice(2))

const applyN = (stack, n, f) => [f(...stack.slice(0, n))].concat(stack.slice(n))

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
