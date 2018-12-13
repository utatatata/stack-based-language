const s = require('../src/stack')

const toStr = JSON.stringify

describe('stack', () => {
  describe('push', () => {
    const testPush = (stack, value, result) =>
      test(`push ${value} to ${toStr(stack)} to be ${toStr(result)}`, () => {
        expect(s.push(stack, value)).toEqual(result)
      })

    testPush([], 3, [3])
    testPush([2], -2, [-2, 2])
  })

  describe('apply', () => {
    const testApplyN = (stack, f, n, result) =>
      test(`apply ${f} to ${toStr(stack)} to be ${toStr(result)}`, () => {
        expect(s.applyN(stack, n, f)).toEqual(result)
      })

    testApplyN([-3], a => a + 8, 1, [5])
    testApplyN([2, 5], a => a + 1, 1, [3, 5])
    testApplyN([3, 0], (a, b) => a + b, 2, [3])
    testApplyN([-3, -11, 0], (a, b) => a - b, 2, [8, 0])
    testApplyN([1, 2, 3], (a, b, c) => a + b - c, 3, [0])
    testApplyN([8, 6, 4, 2], (a, b, c) => a - b * c, 3, [-16, 2])
  })
})
