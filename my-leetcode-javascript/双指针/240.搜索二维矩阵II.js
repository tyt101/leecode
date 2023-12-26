/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 此题也可以用对每一行进行二分查找
var searchMatrix = function(matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  let p = m - 1, q = 0
  while(p < m && q < n && p >= 0 && q >= 0) {
      if(matrix[p][q] > target) {
          p --
      }else if(matrix[p][q] < target) {
          q ++
      }else {
          return true
      }
  }
  return false
};