/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;
  let ans = null;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    
    if (mid * mid === x) return mid;
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      ans = mid;
      left = mid + 1;
    }
  }
  return ans;
};
