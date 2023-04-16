/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// @Note: JS 정수 범위 끝 표현하기 
var divide = function (dividend, divisor) {
  const left = -(2 ** 31)
  const right = 2 ** 31 - 1

  let num = parseInt(dividend / divisor)
  if (num < left) return left
  else if (right < num) return right
  else return num
}