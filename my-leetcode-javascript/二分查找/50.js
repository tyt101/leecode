/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n === 0) return 1
  if(n === 1) return x
  let abs = Math.abs(n)
  let isMinus = abs !== n

  let res = abs % 2 === 0 ? myPow(x * x, abs / 2) : x * myPow(x, abs - 1)
  return isMinus ? 1 / res : res
};