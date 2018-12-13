const isNum = str => /^(\-|\+)?\d+$/.test(str)

const isStr = str => /^".*"$/.test(str)

const andThen = (f1, f2) => x => f2(f1(x))

module.exports = {
  isNum,
  isStr,
  andThen,
}
