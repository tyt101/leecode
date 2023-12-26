/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  let len = s.length
  let count = 0;
  for(let i = 0; i <= len - 3; i++) {
      if(s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
          count ++
      }
  }
  return count
};