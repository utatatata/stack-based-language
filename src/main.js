const p = require('./parser')
const h = require('./helper')

const run = src =>
  src
    .split(' ')
    .filter(s => s !== '')
    .map(p.toFunc)
    .reduce(h.andThen)([])

module.exports = run
