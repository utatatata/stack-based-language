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
})
