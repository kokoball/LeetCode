/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const left = -(2 ** 31)
  const right = 2 ** 31 - 1

  let num = parseInt(dividend / divisor)
  if (num < left) return left
  else if (right < num) return right
  else return num
}