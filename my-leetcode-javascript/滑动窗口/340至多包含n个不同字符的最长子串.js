/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let n = s.length
  if(n < k + 1) return n
  let l = 0, r = 0, max = k
  let map = new Map()
  while(r < n) {
    if(map.size < k + 1) map.set(s[r], r++)
    if(map.size === k + 1) {
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