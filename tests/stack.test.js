const s = require('../src/stack')

const toStr = JSON.stringify

describe('stack', () => {
  describe('push', () => {
    const testPush = (stack, value, result) =>
      test(`push ${value} to ${toStr(stack)} to be ${toStr(result)}`, () => {
        expect(s.push(value)(stack)).toEqual(result)
      })

    testPush([], 3, [3])
    testPush([2], -2, [-2, 2])
  })

  describe('drop', () => {
    const testDrop = (stack, result) =>
      test(`drop from ${toStr(stack)} to be ${toStr(result)}`, () => {
        expect(s.drop(stack)).toEqual(result)
      })

    testDrop([1, 2, 3], [2, 3])
    testDrop([1], [])
    testDrop([], [])
  })

  describe('swap', () => {
    const testSwap = (stack, result) =>
      test(`swap ${toStr(stack)} to be ${toStr(result)}`, () => {
        expect(s.swap(stack)).toEqual(result)
      })

    testSwap([8, 2], [2, 8])
    testSwap([-11, 5, 0], [5, -11, 0])
    testSwap([3], [3])
    testSwap([], [])
  })

  describe('apply', () => {
    const testApplyN = (stack, f, n, result) =>
      test(`apply ${f} to ${toStr(stack)} to be ${toStr(result)}`, () => {
        expect(s.applyN(n, f)(stack)).toEqual(result)
      })

    testApplyN([-3], a => a + 8, 1, [5])
    testApplyN([2, 5], a => a + 1, 1, [3, 5])
    testApplyN([3, 0], (a, b) => a + b, 2, [3])
    testApplyN([-3, -11, 0], (a, b) => a - b, 2, [-8, 0])
    testApplyN([1, 2, 3], (a, b, c) => a + b - c, 3, [4])
    testApplyN([8, 6, 4, 2], (a, b, c) => a - b * c, 3, [-44, 2])
  })
})
