/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let n = s.length
  if(n < 3) return n
  let l = 0, r = 0, max = 2
  let map = new Map()
  while(r < n) {
      // 这里map.set(s[r],r),中的r是该s[r]的下标，所以当存储 === 3的时候，去除最左边下标的map存储字段，l = minValue + 1
      if(map.size < 3) map.set(s[r], r++)
      if(map.size === 3) {
          let minkey, minValue = Infinity
          for( let [key, value] of map.entries()) {
              if(minValue > value) {
                  minValue = value
                  minkey = key
              }
          }
          map.delete(minkey)
          l = minValue + 1
      }
      max = Math.max(max, r - l)
  }
  return max
};