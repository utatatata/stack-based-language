const sbl = require('../src/main.js')

const toStr = JSON.stringify

describe('sbl', () => {
  const testSbl = (src, result) =>
    test(`sbl('${src}') to be ${toStr(result)}`, () => {
      expect(sbl(src)).toEqual(result)
    })

  testSbl('1 2 +', [3])
  testSbl('-1 +4 +', [3])
  testSbl('2 -8 +', [-6])
  testSbl('11 3 -', [-8])
})
