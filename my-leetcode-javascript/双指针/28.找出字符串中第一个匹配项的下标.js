/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let len = needle.length
  let minIndex = Infinity
  for(let i = 0; i <= haystack.length - len; i++) {
      if(haystack.slice(i, i+len) === needle) {
          minIndex = Math.min(minIndex, i)
      }
  }
  if(minIndex !== Infinity) return minIndex
  return -1
};