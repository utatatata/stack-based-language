const h = require('../src/helper')

describe('helper', () => {
  describe('isNum', () => {
    const testIsNum = (str, result) =>
      test(`${str} is ${result ? '' : 'not '}a number`, () => {
        expect(h.isNum(str)).toBe(result)
      })

    testIsNum('123', true)
    testIsNum('a123', false)
    testIsNum('123a', false)
    testIsNum('-123', true)
    testIsNum('-a123', false)
    testIsNum('-123a', false)
    testIsNum('+123', true)
    testIsNum('+a123', false)
    testIsNum('+123a', false)
  })

  describe('isStr', () => {
    const testIsStr = (str, result) =>
      test(`${str} is ${result ? '' : 'not '}a string`, () => {
        expect(h.isStr(str)).toBe(result)
      })

    testIsStr(`"abc"`, true)
    testIsStr(`""`, true)
    testIsStr(`"'"`, true)
    testIsStr(`"""`, true)
    testIsStr(`abc"`, false)
    testIsStr(`"abc`, false)
    testIsStr(`"a"bc`, false)
  })
})
