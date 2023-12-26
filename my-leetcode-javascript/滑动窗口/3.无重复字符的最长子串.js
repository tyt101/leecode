/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0 , r = 1, max = 0, temp;
  if(s.length === 1) return 1
  while(r < s.length) {
      temp = s.slice(l, r)
      if(temp.indexOf(s.charAt(r)) > -1) {
          l ++
          continue
      } else {
          r ++
      }
      if(r - l > max) max = r - l
  }

  return max
};